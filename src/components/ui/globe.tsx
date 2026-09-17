"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type ExtendedCOBEOptions = COBEOptions & {
  onRender?: (state: Record<string, any>) => void;
};

export const GLOBE_CONFIG: ExtendedCOBEOptions = {
  width: 1200,
  height: 1200,
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.2,
  dark: 0,
  diffuse: 1.2,
  mapSamples: 24000,
  mapBrightness: 3,
  baseColor: [0.15, 0.42, 0.45], // Rich visible Outerstep Deep Water Teal land dots
  markerColor: [79 / 255, 192 / 255, 174 / 255], // Outerstep Seam Teal #4fc0ae
  glowColor: [79 / 255, 192 / 255, 174 / 255], // Seam Teal Atmosphere Glow
  scale: 1,
  offset: [0, 0],
  markers: [
    { location: [31.2001, 29.9187], size: 0.12 }, // Alexandria (Export Hub)
    { location: [-23.9618, -46.3322], size: 0.1 }, // Santos (Brazil)
    { location: [51.9244, 4.4777], size: 0.09 }, // Rotterdam (Netherlands)
    { location: [22.8395, 69.7093], size: 0.08 }, // Mundra (India)
    { location: [29.7604, -95.3698], size: 0.08 }, // Houston (USA)
    { location: [-12.0565, -77.1181], size: 0.07 }, // Callao (Peru)
    { location: [14.7167, -17.4677], size: 0.07 }, // Dakar (Senegal)
    { location: [-6.2088, 106.8456], size: 0.07 }, // Jakarta (Indonesia)
  ],
  arcs: [
    { from: [31.2001, 29.9187], to: [-23.9618, -46.3322] }, // Alexandria -> Santos
    { from: [31.2001, 29.9187], to: [51.9244, 4.4777] }, // Alexandria -> Rotterdam
    { from: [31.2001, 29.9187], to: [22.8395, 69.7093] }, // Alexandria -> Mundra
    { from: [31.2001, 29.9187], to: [29.7604, -95.3698] }, // Alexandria -> Houston
    { from: [31.2001, 29.9187], to: [14.7167, -17.4677] }, // Alexandria -> Dakar
  ],
  arcColor: [79 / 255, 192 / 255, 174 / 255],
  arcWidth: 0.6,
  arcHeight: 0.22,
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: ExtendedCOBEOptions;
}) {
  let phi = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [r, setR] = useState(0);

  const updatePointerInteraction = (value: any) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: any) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      setR(delta / 200);
    }
  };

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.005;
      state.phi = phi + r;
      state.width = 1200;
      state.height = 1200;
    },
    [r],
  );

  useEffect(() => {
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      ...config,
      width: 1200,
      height: 1200,
      onRender,
    } as any);

    if (canvasRef.current) {
      canvasRef.current.style.opacity = "1";
    }

    return () => {
      globe.destroy();
    };
  }, [config, onRender]);

  return (
    <div
      className={cn("relative mx-auto aspect-square w-full max-w-[600px]", className)}
      style={{
        width: "100%",
        maxWidth: "600px",
        height: "600px",
        aspectRatio: "1 / 1",
        position: "relative",
        margin: "0 auto",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          opacity: 0,
          transition: "opacity 0.6s ease",
          cursor: "grab",
          contain: "layout paint size",
        }}
        onPointerDown={(e) =>
          updatePointerInteraction(e.clientX - pointerInteractionMovement.current)
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
      />
    </div>
  );
}
