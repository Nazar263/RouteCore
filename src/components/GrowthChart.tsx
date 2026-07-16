"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const dataPoints = [
  { year: "2020", value: 8, label: "5" },
  { year: "2021", value: 22, label: "12" },
  { year: "2022", value: 40, label: "25" },
  { year: "2023", value: 62, label: "38" },
  { year: "2024", value: 85, label: "50+" },
];

export default function GrowthChart() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const width = 400;
  const height = 220;
  const padding = { top: 20, right: 20, bottom: 40, left: 10 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const maxVal = Math.max(...dataPoints.map((d) => d.value));

  const points = dataPoints.map((d, i) => ({
    x: padding.left + (i / (dataPoints.length - 1)) * chartW,
    y: padding.top + chartH - (d.value / maxVal) * chartH,
    ...d,
  }));

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${padding.top + chartH} L ${points[0].x} ${padding.top + chartH} Z`;

  return (
    <div ref={ref} className="mt-6 sm:mt-8">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto"
        style={{ maxHeight: "220px" }}
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#00d4aa" />
          </linearGradient>
          <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00d4aa" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#00d4aa" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
          <line
            key={ratio}
            x1={padding.left}
            y1={padding.top + chartH * (1 - ratio)}
            x2={width - padding.right}
            y2={padding.top + chartH * (1 - ratio)}
            stroke="rgba(24, 38, 64, 0.5)"
            strokeDasharray="4 4"
          />
        ))}

        {/* Area fill */}
        <motion.path
          d={areaPath}
          fill="url(#areaGrad)"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Line */}
        <motion.path
          d={linePath}
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Data points + labels */}
        {points.map((p, i) => (
          <g key={p.year}>
            <motion.circle
              cx={p.x}
              cy={p.y}
              r="4"
              fill="#0c1322"
              stroke="url(#lineGrad)"
              strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
            />
            {/* Value label */}
            <motion.text
              x={p.x}
              y={p.y - 12}
              textAnchor="middle"
              fill="#00d4aa"
              fontSize="11"
              fontWeight="600"
              fontFamily="var(--font-space), monospace"
              initial={{ opacity: 0, y: p.y }}
              animate={isInView ? { opacity: 1, y: p.y - 12 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
            >
              {p.label}
            </motion.text>
            {/* Year label */}
            <motion.text
              x={p.x}
              y={height - 8}
              textAnchor="middle"
              fill="#7a8faa"
              fontSize="10"
              fontFamily="var(--font-space), monospace"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
            >
              {p.year}
            </motion.text>
          </g>
        ))}
      </svg>
    </div>
  );
}
