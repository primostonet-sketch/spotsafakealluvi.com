import { useEffect, useState } from "react";
import "../styles/components/Connector.css";

type Point = { x: number; y: number };

function midRight(rect: DOMRect, container: DOMRect): Point {
  return { x: rect.right - container.left, y: rect.top + rect.height / 2 - container.top };
}

function midLeft(rect: DOMRect, container: DOMRect): Point {
  return { x: rect.left - container.left, y: rect.top + rect.height / 2 - container.top };
}

export default function Connector() {
  const [points, setPoints] = useState<{ from: Point; to: Point; size: { w: number; h: number } } | null>(
    null,
  );
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function measure() {
      const source = document.querySelector<HTMLElement>('[data-connector="source"]');
      const target = document.querySelector<HTMLElement>('[data-connector="target"]');
      const container = document.querySelector<HTMLElement>(".showcase");
      if (!source || !target || !container) {
        setPoints(null);
        return;
      }
      const containerRect = container.getBoundingClientRect();
      const from = midLeft(source.getBoundingClientRect(), containerRect);
      const to = midRight(target.getBoundingClientRect(), containerRect);
      setPoints({ from, to, size: { w: containerRect.width, h: containerRect.height } });
    }

    measure();
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure).catch(() => {});

    const timeout = window.setTimeout(() => setVisible(true), 300);

    return () => {
      window.removeEventListener("resize", measure);
      window.clearTimeout(timeout);
    };
  }, []);

  if (!points) return null;

  const { from, to, size } = points;
  const midX = (from.x + to.x) / 2;
  const path = `M ${from.x} ${from.y} Q ${midX} ${from.y}, ${midX} ${(from.y + to.y) / 2} T ${to.x} ${to.y}`;

  return (
    <svg
      className={`connector${visible ? " connector--visible" : ""}`}
      width={size.w}
      height={size.h}
      viewBox={`0 0 ${size.w} ${size.h}`}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <filter id="connector-roughen">
          <feTurbulence type="fractalNoise" baseFrequency="0.022" numOctaves={2} seed={5} result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale={2.6} />
        </filter>
        <filter id="connector-shadow">
          <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#ffffff" floodOpacity="0.4" />
        </filter>
        <marker id="connector-arrowhead" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
        </marker>
      </defs>
      <g filter="url(#connector-shadow)">
        <path
          d={path}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          opacity={0.95}
          filter="url(#connector-roughen)"
          markerEnd="url(#connector-arrowhead)"
        />
        <path
          d={path}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.3}
          opacity={0.35}
          transform="translate(2,1.6)"
          filter="url(#connector-roughen)"
        />
      </g>
    </svg>
  );
}
