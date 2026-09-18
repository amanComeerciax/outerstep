"use client"

import { useEffect, useRef, useCallback, useState } from "react"
import createGlobe from "cobe"

export interface Marker {
  id: string
  location: [number, number]
  label: string
}

export interface Arc {
  id: string
  from: [number, number]
  to: [number, number]
  label?: string
}

export interface GlobeProps {
  markers?: Marker[]
  arcs?: Arc[]
  className?: string
  markerColor?: [number, number, number]
  baseColor?: [number, number, number]
  arcColor?: [number, number, number]
  glowColor?: [number, number, number]
  dark?: number
  mapBrightness?: number
  markerSize?: number
  markerElevation?: number
  arcWidth?: number
  arcHeight?: number
  speed?: number
  theta?: number
  diffuse?: number
  mapSamples?: number
  showAirplanes?: boolean
  airplaneFlightDuration?: number
}

// Mathematical projections for spherical coordinates, arcs, and 3D-to-2D projection
const PI = Math.PI

function latLngToVector([lat, lng]: [number, number]): [number, number, number] {
  const phi = (lat * PI) / 180
  const theta = (lng * PI) / 180 - PI
  const cosPhi = Math.cos(phi)
  return [-cosPhi * Math.cos(theta), Math.sin(phi), cosPhi * Math.sin(theta)]
}

function getArcPoint(
  from: [number, number],
  to: [number, number],
  progress: number,
  markerElevation = 0.01,
  arcHeight = 0.035
): [number, number, number] {
  const l = latLngToVector(from)
  const m = latLngToVector(to)
  const c = 0.8 + markerElevation
  const d: [number, number, number] = [l[0] * c, l[1] * c, l[2] * c]
  const e: [number, number, number] = [m[0] * c, m[1] * c, m[2] * c]
  const f: [number, number, number] = [l[0] + m[0], l[1] + m[1], l[2] + m[2]]
  const n = Math.sqrt(f[0] * f[0] + f[1] * f[1] + f[2] * f[2])
  const E: [number, number, number] = n > 1e-3 ? [f[0] / n, f[1] / n, f[2] / n] : [0, 1, 0]
  const o: [number, number, number] = [
    E[0] * (0.8 + arcHeight + markerElevation),
    E[1] * (0.8 + arcHeight + markerElevation),
    E[2] * (0.8 + arcHeight + markerElevation),
  ]

  const p = Math.max(0, Math.min(1, progress))
  const inv = 1 - p
  return [
    inv * inv * d[0] + 2 * inv * p * o[0] + p * p * e[0],
    inv * inv * d[1] + 2 * inv * p * o[1] + p * p * e[1],
    inv * inv * d[2] + 2 * inv * p * o[2] + p * p * e[2],
  ]
}

function project3Dto2D(
  t: [number, number, number],
  phi: number,
  theta: number
): { x: number; y: number; z: number } {
  const r = Math.cos(theta)
  const a = Math.cos(phi)
  const o = Math.sin(theta)
  const i = Math.sin(phi)

  const c = a * t[0] + i * t[2]
  const s = i * o * t[0] + r * t[1] - a * o * t[2]
  const z_depth = -i * r * t[0] + o * t[1] + a * r * t[2]

  return {
    x: (c + 1) / 2,
    y: (-s + 1) / 2,
    z: z_depth,
  }
}

export function Globe({
  markers = [],
  arcs = [],
  className = "",
  markerColor = [10 / 255, 58 / 255, 64 / 255],
  baseColor = [1, 1, 1],
  arcColor = [10 / 255, 58 / 255, 64 / 255],
  glowColor = [0.94, 0.93, 0.91],
  dark = 0,
  mapBrightness = 10,
  markerSize = 0.025,
  markerElevation = 0.01,
  arcWidth = 0.5,
  arcHeight = 0.035,
  speed = 0.003,
  theta = 0.2,
  diffuse = 1.5,
  mapSamples = 16000,
  showAirplanes = true,
  airplaneFlightDuration = 7000,
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const airplaneRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const trailPathRefs = useRef<Record<string, SVGPathElement | null>>({})
  const basePathRefs = useRef<Record<string, SVGPathElement | null>>({})
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null)
  const lastPointer = useRef<{ x: number; y: number; t: number } | null>(null)
  const dragOffset = useRef({ phi: 0, theta: 0 })
  const velocity = useRef({ phi: 0, theta: 0 })
  const phiOffsetRef = useRef(0)
  const thetaOffsetRef = useRef(0)
  const isPausedRef = useRef(false)

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      pointerInteracting.current = { x: e.clientX, y: e.clientY }
      if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
      isPausedRef.current = true
    },
    []
  )

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (pointerInteracting.current !== null) {
      const deltaX = e.clientX - pointerInteracting.current.x
      const deltaY = e.clientY - pointerInteracting.current.y
      dragOffset.current = { phi: deltaX / 300, theta: deltaY / 1000 }
      const now = Date.now()
      if (lastPointer.current) {
        const dt = Math.max(now - lastPointer.current.t, 1)
        const maxVelocity = 0.15
        velocity.current = {
          phi: Math.max(
            -maxVelocity,
            Math.min(maxVelocity, ((e.clientX - lastPointer.current.x) / dt) * 0.3)
          ),
          theta: Math.max(
            -maxVelocity,
            Math.min(maxVelocity, ((e.clientY - lastPointer.current.y) / dt) * 0.08)
          ),
        }
      }
      lastPointer.current = { x: e.clientX, y: e.clientY, t: now }
    }
  }, [])

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi
      thetaOffsetRef.current += dragOffset.current.theta
      dragOffset.current = { phi: 0, theta: 0 }
      lastPointer.current = null
    }
    pointerInteracting.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
    isPausedRef.current = false
  }, [])

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerup", handlePointerUp, { passive: true })
    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
    }
  }, [handlePointerMove, handlePointerUp])

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    let globe: ReturnType<typeof createGlobe> | null = null
    let animationId: number
    let phi = 0

    function init() {
      const width = canvas.offsetWidth
      if (width === 0 || globe) return

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width,
        height: width,
        phi: 0,
        theta,
        dark,
        diffuse,
        mapSamples,
        mapBrightness,
        baseColor,
        markerColor,
        glowColor,
        markerElevation,
        markers: markers.map((m) => ({
          location: m.location,
          size: markerSize,
          id: m.id,
        })),
        arcs: [], // Dynamic progressive route lines are rendered seamlessly in SVG
        arcColor,
        arcWidth,
        arcHeight,
        opacity: 0.7,
      })

      function animate() {
        if (!isPausedRef.current) {
          phi += speed
          if (
            Math.abs(velocity.current.phi) > 0.0001 ||
            Math.abs(velocity.current.theta) > 0.0001
          ) {
            phiOffsetRef.current += velocity.current.phi
            thetaOffsetRef.current += velocity.current.theta
            velocity.current.phi *= 0.95
            velocity.current.theta *= 0.95
          }
          const thetaMin = -0.4,
            thetaMax = 0.4
          if (thetaOffsetRef.current < thetaMin) {
            thetaOffsetRef.current += (thetaMin - thetaOffsetRef.current) * 0.1
          } else if (thetaOffsetRef.current > thetaMax) {
            thetaOffsetRef.current += (thetaMax - thetaOffsetRef.current) * 0.1
          }
        }
        const currentPhi = phi + phiOffsetRef.current + dragOffset.current.phi
        const currentTheta = theta + thetaOffsetRef.current + dragOffset.current.theta
        globe!.update({
          phi: currentPhi,
          theta: currentTheta,
          dark,
          mapBrightness,
          markerColor,
          baseColor,
          arcColor,
          markerElevation,
          markers: markers.map((m) => ({
            location: m.location,
            size: markerSize,
            id: m.id,
          })),
          arcs: [],
        })

        // Update Airplane positions and Progressive Route Lines along arcs
        if (showAirplanes && arcs.length > 0) {
          const now = performance.now()
          const flightDuration = airplaneFlightDuration
          const pauseDuration = 1400
          const totalCycle = flightDuration + pauseDuration

          arcs.forEach((arc, idx) => {
            const planeEl = airplaneRefs.current[arc.id]
            const trailEl = trailPathRefs.current[arc.id]
            const baseEl = basePathRefs.current[arc.id]

            // Check if route endpoints are on the visible front hemisphere
            const f = latLngToVector(arc.from)
            const t = latLngToVector(arc.to)
            const pF = project3Dto2D([f[0] * 0.81, f[1] * 0.81, f[2] * 0.81], currentPhi, currentTheta)
            const pT = project3Dto2D([t[0] * 0.81, t[1] * 0.81, t[2] * 0.81], currentPhi, currentTheta)

            const minZ = Math.min(pF.z, pT.z)
            const maxZ = Math.max(pF.z, pT.z)

            // Hide completely if both cities are behind the globe
            if (maxZ < -0.02 || minZ < -0.15) {
              if (planeEl) {
                planeEl.style.opacity = "0"
                planeEl.style.display = "none"
              }
              if (trailEl) trailEl.style.opacity = "0"
              if (baseEl) baseEl.style.opacity = "0"
              return
            }

            // Smooth route visibility factor: 1 when both cities face front, fades to 0 as either city turns past the limb
            const routeVis = Math.max(0, Math.min(1, (minZ + 0.08) / 0.16))
            if (routeVis <= 0.01) {
              if (planeEl) {
                planeEl.style.opacity = "0"
                planeEl.style.display = "none"
              }
              if (trailEl) trailEl.style.opacity = "0"
              if (baseEl) baseEl.style.opacity = "0"
              return
            }

            // Stagger flight departures evenly
            const stagger = (idx * totalCycle) / arcs.length
            const cycleTime = (now + stagger) % totalCycle

            // 1. Draw faint base guide track (corridor) - only points on front of sphere
            if (baseEl) {
              const N_BASE = 18
              let baseD = ""
              let baseStarted = false
              for (let k = 0; k <= N_BASE; k++) {
                const p = k / N_BASE
                const pt = getArcPoint(arc.from, arc.to, p, markerElevation, arcHeight)
                const proj = project3Dto2D(pt, currentPhi, currentTheta)
                if (proj.z > -0.02) {
                  const x = (proj.x * 100).toFixed(2)
                  const y = (proj.y * 100).toFixed(2)
                  baseD += (!baseStarted ? "M " : " L ") + x + " " + y
                  baseStarted = true
                }
              }
              if (baseStarted) {
                baseEl.setAttribute("d", baseD)
                baseEl.style.opacity = (0.35 * routeVis).toFixed(3)
              } else {
                baseEl.style.opacity = "0"
              }
            }

            let rawT = 0
            let isFlying = false
            let trailOpacity = 1

            if (cycleTime <= flightDuration) {
              // Airplane is actively flying
              rawT = cycleTime / flightDuration
              isFlying = true
              trailOpacity = rawT < 0.05 ? rawT / 0.05 : 1
            } else {
              // Landed / turnaround phase: keep line fully drawn and smoothly fade before next takeoff
              rawT = 1
              isFlying = false
              const turnaroundT = (cycleTime - flightDuration) / pauseDuration
              trailOpacity = Math.max(0, 1 - turnaroundT * 1.25)
            }

            // Smooth ease in/out for cruising
            const easeT = rawT < 0.5 ? 2 * rawT * rawT : 1 - Math.pow(-2 * rawT + 2, 2) / 2

            // Calculate current 3D position
            const pt = getArcPoint(arc.from, arc.to, easeT, markerElevation, arcHeight)
            const screenPt = project3Dto2D(pt, currentPhi, currentTheta)
            const ptHorizonFade = Math.max(0, Math.min(1, (screenPt.z + 0.04) / 0.1))

            // 2. Build progressive trail line drawn BEHIND the airplane (from 0 to easeT)
            // Strictly only draw points on the front hemisphere (z > -0.02)
            if (trailEl) {
              if (trailOpacity > 0.01 && easeT > 0.005) {
                const SAMPLES = Math.max(8, Math.round(easeT * 24))
                let trailD = ""
                let trailStarted = false
                for (let k = 0; k <= SAMPLES; k++) {
                  const p = (k / SAMPLES) * easeT
                  const ptK = getArcPoint(arc.from, arc.to, p, markerElevation, arcHeight)
                  const projK = project3Dto2D(ptK, currentPhi, currentTheta)
                  if (projK.z > -0.02) {
                    const x = (projK.x * 100).toFixed(2)
                    const y = (projK.y * 100).toFixed(2)
                    trailD += (!trailStarted ? "M " : " L ") + x + " " + y
                    trailStarted = true
                  }
                }
                if (trailStarted) {
                  trailEl.setAttribute("d", trailD)
                  const finalTrailOp = (routeVis * trailOpacity).toFixed(3)
                  trailEl.style.opacity = finalTrailOp
                } else {
                  trailEl.style.opacity = "0"
                }
              } else {
                trailEl.style.opacity = "0"
              }
            }

            // 3. Update Airplane position right at the front of the line
            if (planeEl) {
              if (isFlying && rawT > 0.01 && rawT < 0.99 && screenPt.z > -0.02) {
                const ptAhead = getArcPoint(
                  arc.from,
                  arc.to,
                  Math.min(1, easeT + 0.005),
                  markerElevation,
                  arcHeight
                )
                const screenPtAhead = project3Dto2D(ptAhead, currentPhi, currentTheta)

                const dx = screenPtAhead.x - screenPt.x
                const dy = screenPtAhead.y - screenPt.y
                const angle = Math.atan2(dy, dx) * (180 / Math.PI)

                const takeoffLandingFade =
                  rawT < 0.07 ? rawT / 0.07 : rawT > 0.93 ? (1 - rawT) / 0.07 : 1
                const opacity = routeVis * ptHorizonFade * takeoffLandingFade
                const altitudeScale = 1.28 + 0.25 * Math.sin(easeT * Math.PI)

                if (opacity > 0.01) {
                  planeEl.style.display = "block"
                  planeEl.style.left = `${screenPt.x * 100}%`
                  planeEl.style.top = `${screenPt.y * 100}%`
                  planeEl.style.transform = `translate(-50%, -50%) rotate(${angle}deg) scale(${altitudeScale.toFixed(2)})`
                  planeEl.style.opacity = opacity.toFixed(3)
                } else {
                  planeEl.style.opacity = "0"
                  planeEl.style.display = "none"
                }
              } else {
                planeEl.style.opacity = "0"
                planeEl.style.display = "none"
              }
            }
          })
        }

        animationId = requestAnimationFrame(animate)
      }
      animate()
      setTimeout(() => canvas && (canvas.style.opacity = "1"))
    }

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect()
          init()
        }
      })
      ro.observe(canvas)
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      if (globe) globe.destroy()
    }
  }, [markers, arcs, markerColor, baseColor, arcColor, glowColor, dark, mapBrightness, markerSize, markerElevation, arcWidth, arcHeight, speed, theta, diffuse, mapSamples, showAirplanes, airplaneFlightDuration])

  return (
    <div className={`relative aspect-square select-none ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          opacity: 0,
          transition: "opacity 1.2s ease",
          borderRadius: "50%",
          touchAction: "none",
        }}
      />
      {/* Progressive Route Lines drawn dynamically behind airplanes */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none rounded-full overflow-hidden"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ zIndex: 25 }}
      >
        {/* Faint base route tracks */}
        {arcs.map((arc) => (
          <path
            key={`base-${arc.id}`}
            ref={(el) => {
              basePathRefs.current[arc.id] = el
            }}
            fill="none"
            stroke="#062226"
            strokeWidth="2.2"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="3 4"
            strokeOpacity="0.4"
            strokeLinecap="round"
          />
        ))}

        {/* Dynamic active lines drawn progressively behind the plane */}
        {arcs.map((arc) => (
          <path
            key={`trail-${arc.id}`}
            ref={(el) => {
              trailPathRefs.current[arc.id] = el
            }}
            fill="none"
            stroke="#062226"
            strokeWidth="3.6"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0"
          />
        ))}
      </svg>
      {/* Animated Airplanes traveling along Arc lines */}
      {showAirplanes &&
        arcs.map((arc) => (
          <div
            key={`airplane-${arc.id}`}
            ref={(el) => {
              airplaneRefs.current[arc.id] = el
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              transform: "translate(-50%, -50%)",
              opacity: 0,
              pointerEvents: "none",
              willChange: "transform, opacity",
              zIndex: 35,
            }}
          >
            <svg
              width="58"
              height="30"
              viewBox="-29 -15 58 30"
              fill="none"
              className="pointer-events-none drop-shadow-[0_4px_10px_rgba(6,34,38,0.6)]"
            >
              <defs>
                <linearGradient
                  id={`contrail-${arc.id}`}
                  x1="-26"
                  y1="0"
                  x2="-10"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0" />
                  <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#2dd4bf" stopOpacity="1" />
                </linearGradient>
              </defs>

              {/* Contrail trail behind plane */}
              <line
                x1="-26"
                y1="0"
                x2="-10"
                y2="0"
                stroke={`url(#contrail-${arc.id})`}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="3 2.5"
              />

              {/* Jet engine glow */}
              <circle cx="-10" cy="0" r="2.2" fill="#2dd4bf" />

              {/* Airplane body */}
              <path
                d="M12 0 C10.5 -1 5 -1.2 2.5 -1.2 L-3 -10.5 L-5.2 -10.2 L-2.8 -1.2 L-9 -1.2 L-11 -5 L-12.5 -4.5 L-11.2 0 L-12.5 4.5 L-11 5 L-9 1.2 L-2.8 1.2 L-5.2 10.2 L-3 10.5 L2.5 1.2 C5 1.2 10.5 1 12 0 Z"
                fill="#062226"
                stroke="#ffffff"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ))}
      {markers.map((m) => (
        <div
          key={m.id}
          style={{
            position: "absolute",
            positionAnchor: `--cobe-${m.id}`,
            bottom: "anchor(top)",
            left: "anchor(center)",
            translate: "-50% 0",
            marginBottom: 8,
            padding: "2px 6px",
            background: "#0a3a40",
            color: "#fff",
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase" as const,
            whiteSpace: "nowrap" as const,
            pointerEvents: "none" as const,
            opacity: `var(--cobe-visible-${m.id}, 0)`,
            filter: `blur(calc((1 - var(--cobe-visible-${m.id}, 0)) * 8px))`,
            transition: "opacity 0.8s, filter 0.8s",
          }}
        >
          {m.label}
          <span
            style={{
              position: "absolute",
              top: "100%",
              left: "50%",
              transform: "translate3d(-50%, -1px, 0)",
              border: "5px solid transparent",
              borderTopColor: "#0a3a40",
            }}
          />
        </div>
      ))}
      {arcs
        .filter((a) => a.label)
        .map((a) => (
          <div
            key={a.id}
            style={{
              position: "absolute",
              positionAnchor: `--cobe-arc-${a.id}`,
              bottom: "anchor(top)",
              left: "anchor(center)",
              translate: "-50% 0",
              marginBottom: 8,
              padding: "2px 6px",
              background: "#fff",
              color: "#1a1a2e",
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              whiteSpace: "nowrap" as const,
              pointerEvents: "none" as const,
              boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
              opacity: `var(--cobe-visible-arc-${a.id}, 0)`,
              filter: `blur(calc((1 - var(--cobe-visible-arc-${a.id}, 0)) * 8px))`,
              transition: "opacity 0.8s, filter 0.8s",
            }}
          >
            {a.label}
            <span
              style={{
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translate3d(-50%, -1px, 0)",
                border: "5px solid transparent",
                borderTopColor: "#fff",
              }}
            />
          </div>
        ))}
    </div>
  )
}
