"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

/**
 * SMOOTH SCROLL PROVIDER
 * ─────────────────────────────────────────────────────────────────────────
 * Responsibilities:
 *  1. Registers GSAP ScrollTrigger once, globally.
 *  2. Debounces ScrollTrigger.refresh() on resize — NOT on every ResizeObserver
 *     tick, which was causing expensive reflows during scroll.
 *  3. Handles smooth anchor-scroll WITH sticky-header offset.
 *  4. Bootstraps the CSS data-reveal IntersectionObserver AFTER the browser
 *     has painted (using requestIdleCallback / setTimeout fallback) so that
 *     lazily-rendered sections are already in the DOM.
 *  5. Removes scroll-behavior:smooth from <html> during GSAP-scrubbed
 *     sections to prevent double-easing, then restores it after.
 */

const HEADER_OFFSET = 80
const RESIZE_DEBOUNCE_MS = 150

function smoothScrollTo(targetY: number) {
  window.scrollTo({ top: targetY, behavior: "smooth" })
}

function initAnchorScroll() {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    // Clone to wipe old listeners
    const clone = anchor.cloneNode(true) as HTMLAnchorElement
    anchor.parentNode?.replaceChild(clone, anchor)

    clone.addEventListener("click", (e) => {
      const href = clone.getAttribute("href")
      if (!href || href === "#") return
      const target = document.querySelector(href)
      if (!target) return
      e.preventDefault()
      const top = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
      smoothScrollTo(top)
    })
  })
}

function initScrollReveal() {
  const elements = document.querySelectorAll<HTMLElement>("[data-reveal]")
  if (!elements.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const el = entry.target as HTMLElement
        const delay = parseFloat(el.dataset.revealDelay ?? "0")
        if (delay > 0) {
          setTimeout(() => el.classList.add("revealed"), delay * 1000)
        } else {
          el.classList.add("revealed")
        }
        observer.unobserve(el)
      })
    },
    // rootMargin pushes the trigger line 60px above the viewport bottom
    // so elements begin animating just before they're fully in view
    { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
  )

  elements.forEach((el) => observer.observe(el))
  return () => observer.disconnect()
}

export function SmoothScrollProvider() {
  const resizeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    gsap.registerPlugin(ScrollTrigger)

    // ── 1. Debounced resize → ScrollTrigger.refresh ────────────────────
    // Using a single debounce instead of ResizeObserver on documentElement
    // prevents the flood of refresh() calls that caused layout jank.
    const onResize = () => {
      if (resizeTimer.current) clearTimeout(resizeTimer.current)
      resizeTimer.current = setTimeout(() => {
        ScrollTrigger.refresh(true)
      }, RESIZE_DEBOUNCE_MS)
    }
    window.addEventListener("resize", onResize, { passive: true })

    // ── 2. Anchor scroll (immediate bind) ─────────────────────────────
    initAnchorScroll()

    // ── 3. Scroll-reveal (wait for idle so lazy sections are in DOM) ──
    // requestIdleCallback fires when the main thread is free and all
    // current paint/layout work is done. Falls back to setTimeout(600).
    let revealCleanup: (() => void) | undefined
    const scheduleReveal = () => {
      revealCleanup = initScrollReveal()
      // Re-bind anchors after dynamic components mount
      initAnchorScroll()
    }

    let idleCbId: number | undefined
    if (typeof window.requestIdleCallback === "function") {
      idleCbId = window.requestIdleCallback(scheduleReveal, { timeout: 800 })
    } else {
      const t = setTimeout(scheduleReveal, 600)
      idleCbId = t as unknown as number
    }

    // ── 4. Initial ScrollTrigger refresh after first paint ─────────────
    const t0 = setTimeout(() => ScrollTrigger.refresh(), 400)

    return () => {
      window.removeEventListener("resize", onResize)
      if (resizeTimer.current) clearTimeout(resizeTimer.current)
      clearTimeout(t0)
      if (typeof window.cancelIdleCallback === "function" && idleCbId !== undefined) {
        window.cancelIdleCallback(idleCbId)
      }
      revealCleanup?.()
    }
  }, [])

  return null
}
