"use client";

import { useMemo, useRef } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
  dotColor?: string;
  className?: string;
}

export function WorldMap({
  dots = [],
  lineColor = "#2dd4bf",
  dotColor = "#FFFFFF40",
  className,
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = useMemo(() => new DottedMap({ height: 100, grid: "diagonal" }), []);

  const svgMap = useMemo(() => {
    return map.getSVG({
      radius: 0.22,
      color: dotColor,
      shape: "circle",
      backgroundColor: "transparent",
    });
  }, [map, dotColor]);

  // Project point using DottedMap's exact Mercator projection
  const projectPoint = (lat: number, lng: number) => {
    const pin = map.getPin({ lat, lng });
    if (pin) {
      return { x: pin.x, y: pin.y };
    }
    return { x: 0, y: 0 };
  };

  // Create a natural, non-intersecting geodesic curve
  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = (start.y + end.y) / 2;
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist === 0) return `M ${start.x} ${start.y}`;

    // Normal vector pointing upwards / north
    let nx = -dy / dist;
    let ny = dx / dist;
    if (ny > 0) {
      nx = -nx;
      ny = -ny;
    }

    // Arc curvature proportional to distance
    const arcHeight = Math.min(dist * 0.26, 16);
    const cpX = midX + nx * arcHeight;
    const cpY = midY + ny * arcHeight;

    return `M ${start.x} ${start.y} Q ${cpX} ${cpY} ${end.x} ${end.y}`;
  };

  // Collect unique points to prevent duplicate overlapping circles
  const uniquePoints = useMemo(() => {
    const pointsMap = new Map<string, { x: number; y: number; label?: string }>();
    dots.forEach((dot) => {
      const p1 = projectPoint(dot.start.lat, dot.start.lng);
      const p2 = projectPoint(dot.end.lat, dot.end.lng);
      const k1 = `${p1.x.toFixed(1)}_${p1.y.toFixed(1)}`;
      const k2 = `${p2.x.toFixed(1)}_${p2.y.toFixed(1)}`;
      if (!pointsMap.has(k1)) pointsMap.set(k1, { ...p1, label: dot.start.label });
      if (!pointsMap.has(k2)) pointsMap.set(k2, { ...p2, label: dot.end.label });
    });
    return Array.from(pointsMap.values());
  }, [dots, map]);

  const viewBox = `0 0 ${map.image.width} ${map.image.height}`;

  return (
    <div
      className={cn(
        "w-full aspect-[198/100] relative font-sans select-none overflow-hidden",
        className ?? "dark:bg-black bg-white rounded-lg"
      )}
    >
      {/* Background Dotted Map */}
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full pointer-events-none select-none"
        alt="world map"
        height={map.image.height * 5}
        width={map.image.width * 5}
        draggable={false}
      />

      {/* Synchronized Vector Overlay with identical viewBox */}
      <svg
        ref={svgRef}
        viewBox={viewBox}
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="15%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="85%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="#5eead4" stopOpacity="0.8" />
          </linearGradient>

          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Trade Route Arcs */}
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="0.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0.3 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 1.4,
                  delay: 0.3 * i,
                  ease: "easeInOut",
                }}
              />
            </g>
          );
        })}

        {/* Unique Geographic Nodes (no merging/overlapping) */}
        {uniquePoints.map((point, i) => (
          <g key={`point-${i}`}>
            {/* Pulsing Outer Radar Ring */}
            <circle
              cx={point.x}
              cy={point.y}
              r="0.8"
              fill={lineColor}
              opacity="0.4"
            >
              <animate
                attributeName="r"
                from="0.8"
                to="3.2"
                dur="2.2s"
                begin={`${(i * 0.4) % 2}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from="0.6"
                to="0"
                dur="2.2s"
                begin={`${(i * 0.4) % 2}s`}
                repeatCount="indefinite"
              />
            </circle>

            {/* Solid Center Node */}
            <circle
              cx={point.x}
              cy={point.y}
              r="0.8"
              fill={lineColor}
              filter="url(#nodeGlow)"
            />
            <circle
              cx={point.x}
              cy={point.y}
              r="0.35"
              fill="#ffffff"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
