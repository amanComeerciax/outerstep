"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);
  return prefersReducedMotion;
}

const DESKTOP_WIDTH = 1200;
const TABLET_MIN_WIDTH = 768;
const DEPTH_MIN = -1;
const DEPTH_MAX = 1;
const Z_INDEX_MIN = 1;

gsap.registerPlugin(ScrollTrigger);

export interface CircularSplitRollItem {
  id?: string | number;
  title?: string;
  /** If provided, render an <img>. Otherwise render the `cardContent` slot. */
  image?: string;
  alt?: string;
  /** React node rendered inside the card when `image` is not set. */
  cardContent?: React.ReactNode;
}

interface CircularSplitRollCompProps {
  items?: CircularSplitRollItem[];
  className?: string;
  background?: string;
  titleColor?: string;
  sectionHeight?: number;
  leftRadiusX?: number;
  leftRadiusY?: number;
  rightRadiusX?: number;
  rightRadiusY?: number;
  imageCardWidth?: number;
  imageCardHeight?: number;
  titleSize?: string;
  pinSpacing?: boolean;
  scrub?: number;
  textCenterScale?: number;
  textSideScale?: number;
  textCenterOpacity?: number;
  textSideOpacity?: number;
  imageCenterScale?: number;
  imageSideScale?: number;
  imageCenterOpacity?: number;
  imageSideOpacity?: number;
  textFocusStart?: number;
  textFocusPower?: number;
  imageFocusStart?: number;
  imageFocusPower?: number;
  leftAngleOffset?: number;
  rightAngleOffset?: number;
  focusPhase?: number;
  leftDepthMax?: number;
  rightDepthMax?: number;
  columnSpreadVw?: number;
  columnOffsetPx?: number;
}

function wrapProgress(value: number) {
  let wrappedValue = value % 1;
  if (wrappedValue < 0) wrappedValue += 1;
  return wrappedValue;
}

function getCircularPosition(
  progress: number,
  radiusX: number,
  radiusY: number,
  angleOffset = 0
) {
  const angle = progress * Math.PI * 2 + angleOffset;
  return {
    angle,
    x: Math.sin(angle) * radiusX,
    y: Math.cos(angle) * radiusY,
    verticalDepth: Math.cos(angle),
    horizontalDepth: Math.sin(angle),
  };
}

function getStrength(value: number) {
  return gsap.utils.clamp(
    0,
    1,
    gsap.utils.mapRange(DEPTH_MIN, DEPTH_MAX, 0, 1, value)
  );
}

function shapeFocus(strength: number, start = 0.42, power = 2.8) {
  const normalized = gsap.utils.clamp(0, 1, (strength - start) / (1 - start));
  return Math.pow(normalized, power);
}

function CircularSplitRollComp({
  items = [],
  className = "",
  background,
  titleColor,
  sectionHeight = 260,
  leftRadiusX = 220,
  leftRadiusY = 220,
  rightRadiusX = 400,
  rightRadiusY = 400,
  imageCardWidth = 190,
  imageCardHeight = 210,
  titleSize = "clamp(28px, 3vw, 56px)",
  pinSpacing = true,
  scrub = 1.2,
  textCenterScale = 1,
  textSideScale = 0.68,
  textCenterOpacity = 1,
  textSideOpacity = 0.18,
  imageCenterScale = 1,
  imageSideScale = 0.58,
  imageCenterOpacity = 1,
  imageSideOpacity = 0.14,
  textFocusStart = 0.42,
  textFocusPower = 2.6,
  imageFocusStart = 0.45,
  imageFocusPower = 3.2,
  leftAngleOffset = Math.PI,
  rightAngleOffset = 0,
  focusPhase = 0.5,
  leftDepthMax = 30,
  rightDepthMax = 40,
  columnSpreadVw = 5,
  columnOffsetPx = 500,
}: CircularSplitRollCompProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef(0);
  const reducedMotion = usePrefersReducedMotion();

  const safeItems = useMemo(() => {
    return items.map((item, index) => ({
      id: item.id ?? index,
      title: item.title ?? `Item ${index + 1}`,
      image: item.image ?? "",
      alt: item.alt ?? item.title ?? `Item ${index + 1}`,
      cardContent: item.cardContent ?? null,
    }));
  }, [items]);

  useEffect(() => {
    if (!rootRef.current || !stickyRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      const ctx = gsap.context(() => {
        const leftNodes = gsap.utils.toArray(
          ".circular-scroll-showcase__left-item"
        ) as HTMLElement[];
        const rightNodes = gsap.utils.toArray(
          ".circular-scroll-showcase__right-item"
        ) as HTMLElement[];

        const total = safeItems.length;
        if (!total) return;

        gsap.set([...leftNodes, ...rightNodes], { opacity: 1 });

        const render = (scrollProgress: number) => {
          progressRef.current = scrollProgress;

          const width =
            typeof window !== "undefined" ? window.innerWidth : DESKTOP_WIDTH;
          let factor = 1;
          if (width < DESKTOP_WIDTH && width >= TABLET_MIN_WIDTH) {
            factor = width / DESKTOP_WIDTH;
          }

          const leftRadiusScaledX = leftRadiusX * factor;
          const leftRadiusScaledY = leftRadiusY * factor;
          const rightRadiusScaledX = rightRadiusX * factor;
          const rightRadiusScaledY = rightRadiusY * factor;

          if (rootRef.current) {
            rootRef.current.style.setProperty(
              "--css-card-width",
              `${imageCardWidth * factor}px`
            );
            rootRef.current.style.setProperty(
              "--css-card-height",
              `${imageCardHeight * factor}px`
            );
          }

          leftNodes.forEach((node, index) => {
            const localProgress = wrapProgress(
              index / total - scrollProgress + focusPhase / total
            );
            const position = getCircularPosition(
              localProgress,
              leftRadiusScaledX,
              leftRadiusScaledY,
              leftAngleOffset
            );
            const rawStrength = getStrength(position.horizontalDepth);
            const focusStrength = shapeFocus(
              rawStrength,
              textFocusStart,
              textFocusPower
            );
            const scale = gsap.utils.interpolate(
              textSideScale,
              textCenterScale,
              focusStrength
            );
            const opacity = gsap.utils.interpolate(
              textSideOpacity,
              textCenterOpacity,
              focusStrength
            );
            const zIndex = Math.round(
              gsap.utils.interpolate(Z_INDEX_MIN, leftDepthMax, focusStrength)
            );

            gsap.set(node, {
              x: position.x,
              y: position.y,
              scale,
              opacity,
              zIndex,
              transformOrigin: "50% 50%",
            });
          });

          rightNodes.forEach((node, index) => {
            const localProgress = wrapProgress(
              index / total - scrollProgress + focusPhase / total
            );
            const position = getCircularPosition(
              localProgress,
              rightRadiusScaledX,
              rightRadiusScaledY,
              rightAngleOffset
            );
            const rawStrength = getStrength(-position.horizontalDepth);
            const focusStrength = shapeFocus(
              rawStrength,
              imageFocusStart,
              imageFocusPower
            );
            const scale = gsap.utils.interpolate(
              imageSideScale,
              imageCenterScale,
              focusStrength
            );
            const opacity = gsap.utils.interpolate(
              imageSideOpacity,
              imageCenterOpacity,
              focusStrength
            );
            const zIndex = Math.round(
              gsap.utils.interpolate(Z_INDEX_MIN, rightDepthMax, focusStrength)
            );

            gsap.set(node, {
              x: position.x,
              y: position.y,
              scale,
              opacity,
              zIndex,
              transformOrigin: "50% 50%",
            });
          });
        };

        render(0);

        // Set the section height for desktop sticky scrolling track
        if (rootRef.current) {
          rootRef.current.style.height = `${sectionHeight * safeItems.length}vh`;
        }

        const scrollTrigger = ScrollTrigger.create({
          trigger: rootRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // An item is perfectly centered when its localProgress reaches 0.75.
            // localProgress = index / total - scrollProgress + focusPhase / total
            // To center item 0: scrollProgress = (0 + focusPhase) / total - 0.75
            // To center last item: scrollProgress = ((total - 1) + focusPhase) / total - 0.75
            const startP = (focusPhase / total) - 0.75;
            const endP = ((total - 1 + focusPhase) / total) - 0.75;
            const mappedProgress = startP + self.progress * (endP - startP);
            
            render(mappedProgress);
          },
        });

        const onResize = () => {
          render(progressRef.current);
          scrollTrigger.refresh();
        };
        window.addEventListener("resize", onResize);

        return () => {
          window.removeEventListener("resize", onResize);
          scrollTrigger.kill();
          if (rootRef.current) {
            rootRef.current.style.height = "auto";
          }
        };
      }, rootRef);

      return () => ctx.revert();
    });

    mm.add("(max-width: 768px)", () => {
      if (rootRef.current) {
        rootRef.current.style.height = "auto";
      }
    });

    return () => mm.revert();
  }, [
    safeItems,
    scrub,
    pinSpacing,
    sectionHeight,
    leftRadiusX,
    leftRadiusY,
    rightRadiusX,
    rightRadiusY,
    imageCardWidth,
    imageCardHeight,
    textCenterScale,
    textSideScale,
    textCenterOpacity,
    textSideOpacity,
    imageCenterScale,
    imageSideScale,
    imageCenterOpacity,
    imageSideOpacity,
    textFocusStart,
    textFocusPower,
    imageFocusStart,
    imageFocusPower,
    leftAngleOffset,
    rightAngleOffset,
    focusPhase,
    leftDepthMax,
    rightDepthMax,
  ]);

  return (
    <section
      ref={rootRef}
      className={`relative w-full ${className}`}
      style={{
        background: background || "var(--os-deep-water)",
        "--css-title-size": titleSize,
        "--css-card-width": `${imageCardWidth}px`,
        "--css-card-height": `${imageCardHeight}px`,
        color: titleColor || "#ffffff",
      } as React.CSSProperties & Record<string, string | number>}
    >
      <div
        ref={stickyRef}
        aria-hidden="true"
        className={`sticky top-0 h-screen w-full flex-col justify-center items-center hidden md:flex ${
          reducedMotion ? "!hidden" : ""
        }`}
        style={{ display: reducedMotion ? "none" : undefined }}
      >
        <div 
          className="relative w-full h-[80vh] min-h-[600px] overflow-hidden" 
          style={{ background: background || "var(--os-deep-water)" }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              height: "100%",
              width: "100%",
              margin: "0 auto",
            }}
          >
          {/* LEFT: titles */}
          <div
            style={{
              position: "relative",
              display: "flex",
              height: "100%",
              width: "50vw",
              alignItems: "center",
              justifyContent: "center",
              transform: `translateX(calc(${columnSpreadVw}vw - ${columnOffsetPx}px))`,
            }}
          >
            <div style={{ position: "relative", height: "78vh" }}>
              {safeItems.map((item) => (
                <div
                  key={item.id}
                  className="circular-scroll-showcase__left-item"
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    width: "100%",
                    transformOrigin: "center center",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                    fontSize: "var(--css-title-size, clamp(28px, 3vw, 56px))",
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    opacity: 0,
                    willChange: "transform, opacity",
                    pointerEvents: "none",
                  }}
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: cards */}
          <div
            style={{
              position: "relative",
              display: "flex",
              height: "100%",
              width: "50vw",
              alignItems: "center",
              justifyContent: "center",
              transform: `translateX(calc(${columnOffsetPx}px - ${columnSpreadVw}vw))`,
            }}
          >
            <div style={{ position: "relative", height: "78vh" }}>
              {safeItems.map((item) => (
                <div
                  key={item.id}
                  className="circular-scroll-showcase__right-item"
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    marginLeft: `calc(var(--css-card-width, 210px) * -0.5)`,
                    marginTop: `calc(var(--css-card-height, 210px) * -0.5)`,
                    height: "var(--css-card-height, 210px)",
                    width: "var(--css-card-width, 210px)",
                    transformOrigin: "center center",
                    opacity: 0,
                    willChange: "transform, opacity",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.alt}
                        draggable="false"
                        style={{
                          pointerEvents: "none",
                          display: "block",
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          position: "absolute",
                          inset: 0,
                          userSelect: "none",
                        }}
                      />
                    ) : (
                      item.cardContent
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Mobile view */}
      <div
        className={`w-full py-12 sm:py-16 px-4 sm:px-6 block md:hidden ${reducedMotion ? "!block" : ""}`}
        style={{ 
          display: reducedMotion ? "block" : undefined,
          background: background || "var(--os-deep-water)" 
        }}
      >
        <div className="flex flex-col gap-8 max-w-[420px] mx-auto md:max-w-[1000px] md:grid md:grid-cols-3 md:gap-8">
          {safeItems.map((item) => (
            <div key={item.id} className="flex flex-col gap-6">
              <h3
                style={{
                  fontSize: "clamp(24px, 6vw, 36px)",
                  fontWeight: 500,
                  lineHeight: 1.1,
                  letterSpacing: "-0.04em",
                  color: titleColor || "#ffffff",
                  padding: "0 20px"
                }}
              >
                {item.title}
              </h3>
              <div
                style={{
                  width: "100%",
                }}
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.alt}
                    draggable="false"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      borderRadius: "16px",
                    }}
                  />
                ) : (
                  item.cardContent
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export interface CircularSplitRollProps
  extends Omit<
    CircularSplitRollCompProps,
    | "leftRadiusX"
    | "leftRadiusY"
    | "rightRadiusX"
    | "rightRadiusY"
    | "imageCardWidth"
    | "imageCardHeight"
  > {
  radius?: number;
  cardSize?: number;
  leftRadiusX?: number;
  leftRadiusY?: number;
  rightRadiusX?: number;
  rightRadiusY?: number;
  imageCardWidth?: number;
  imageCardHeight?: number;
}

export default function CircularSplitRoll({
  items = [],
  radius = 500,
  cardSize = 205,
  sectionHeight = 100,
  leftRadiusX,
  leftRadiusY,
  rightRadiusX,
  rightRadiusY,
  imageCardWidth,
  imageCardHeight,
  ...rest
}: CircularSplitRollProps) {
  return (
    <CircularSplitRollComp
      items={items}
      sectionHeight={sectionHeight}
      leftRadiusX={leftRadiusX ?? radius}
      leftRadiusY={leftRadiusY ?? radius}
      rightRadiusX={rightRadiusX ?? radius}
      rightRadiusY={rightRadiusY ?? radius}
      imageCardWidth={imageCardWidth ?? cardSize}
      imageCardHeight={imageCardHeight ?? cardSize}
      {...rest}
    />
  );
}
