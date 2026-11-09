import { useId } from "react";

// Lake ornaments, built only from the logo's parts (water line, head, mandarin).
// All are decorative, so they are hidden from assistive tech.

const MANDARINA = "var(--capi-mandarina)";
const MANTECA = "var(--capi-manteca)";

/** The full mark's geometry (copied from docs/brand/logo/capipay-mark.svg), in any palette color. */
export function MarkShape({ color, width }: { color: string; width: number }) {
  const maskId = `eye-${useId().replace(/:/g, "")}`;
  return (
    <svg viewBox="2 24 96 44" width={width} height={(width * 44) / 96} aria-hidden="true" focusable="false">
      <defs>
        <mask id={maskId}>
          <rect x="0" y="0" width="100" height="100" fill="#fff" />
          <circle cx="61" cy="45" r="5.5" fill="#000" />
        </mask>
      </defs>
      <g fill={color} mask={`url(#${maskId})`}>
        <circle cx="36" cy="34" r="8" />
        <path d="M20 62 V54 A22 22 0 0 1 42 32 H70 A12 12 0 0 1 82 44 V62 Z" />
      </g>
      <line x1="8" y1="62" x2="92" y2="62" stroke={color} strokeWidth="12" strokeLinecap="round" />
    </svg>
  );
}

/** A single round-cap water line. */
export function WaterLine({ color, width = 100 }: { color: string; width?: number }) {
  return (
    <svg className="water-line" width={width} height="10" viewBox={`0 0 ${width} 10`} aria-hidden="true" focusable="false">
      <line x1="5" x2={width - 5} y1="5" y2="5" stroke={color} strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

/** Ripples: the water line repeated, shorter each time. */
export function Ripples() {
  return (
    <svg viewBox="0 0 100 80" width="80" height="64" aria-hidden="true" focusable="false">
      {[42, 30, 16].map((half, i) => (
        <line key={half} x1={50 - half} x2={50 + half} y1={20 + i * 20} y2={20 + i * 20} stroke={MANDARINA} strokeWidth="10" strokeLinecap="round" />
      ))}
    </svg>
  );
}

/** Water line leading to a mandarin: money flowing to the wallet. */
export function LineToSun() {
  return (
    <svg viewBox="0 0 100 40" width="120" height="48" aria-hidden="true" focusable="false">
      <line x1="6" x2="70" y1="20" y2="20" stroke="var(--capi-tinta)" strokeWidth="8" strokeLinecap="round" />
      <circle cx="88" cy="20" r="10" fill={MANDARINA} />
    </svg>
  );
}

/** Horizon band: Monte lake with a Mandarina half sun and three Manteca glints. */
export function Horizon() {
  return (
    <div className="horizon" aria-hidden="true">
      <svg className="horizon__sun" viewBox="0 0 140 140" focusable="false">
        <path d="M0 64 A70 64 0 0 1 140 64 Z" fill={MANDARINA} />
        {[56, 40, 22].map((half, i) => (
          <line key={half} x1={70 - half} x2={70 + half} y1={86 + i * 18} y2={86 + i * 18} stroke={MANTECA} strokeWidth="9" strokeLinecap="round" />
        ))}
      </svg>
    </div>
  );
}

/** Sun reflection: the sun broken into eight water strokes. */
export function SunReflection() {
  const strokes = [
    [40, 480],
    [190, 420],
    [70, 330],
    [230, 470],
    [110, 260],
    [200, 400],
    [60, 300],
    [240, 380],
  ];
  return (
    <svg className="reflection" viewBox="0 0 520 400" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
      {strokes.map(([x1, x2], i) => (
        <line key={i} x1={x1} x2={x2} y1={26 + i * 49} y2={26 + i * 49} stroke={i % 2 ? MANDARINA : MANTECA} strokeWidth="26" strokeLinecap="round" />
      ))}
    </svg>
  );
}

/** Lake pattern: low-contrast rows of short water strokes. */
export function LakePattern() {
  return (
    <svg className="lake-pattern" width="100%" height="100%" aria-hidden="true" focusable="false">
      <defs>
        <pattern id="lake-pattern" width="180" height="64" patternUnits="userSpaceOnUse">
          <line x1="10" x2="100" y1="16" y2="16" stroke="var(--capi-manteca)" strokeOpacity="0.16" strokeWidth="12" strokeLinecap="round" />
          <line x1="100" x2="170" y1="48" y2="48" stroke="var(--capi-manteca)" strokeOpacity="0.16" strokeWidth="12" strokeLinecap="round" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#lake-pattern)" />
    </svg>
  );
}

export type PaymentStatus = "paid" | "waiting" | "partial" | "expired";

/** Small status icons for the pills. Always paired with a word. */
export function StatusIcon({ status }: { status: PaymentStatus }) {
  const common = { stroke: "currentColor", strokeWidth: 2.5, strokeLinecap: "round" as const, fill: "none" };
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false">
      {status === "paid" && <polyline points="3,8.5 6.5,12 13,4.5" {...common} strokeLinejoin="round" />}
      {status === "waiting" && (
        <>
          <line x1="2" x2="14" y1="5" y2="5" {...common} />
          <line x1="4" x2="12" y1="9" y2="9" {...common} />
          <line x1="6.5" x2="9.5" y1="13" y2="13" {...common} />
        </>
      )}
      {status === "partial" && (
        <>
          <circle cx="8" cy="8" r="5.5" {...common} strokeWidth={2} />
          <path d="M8 2.5 A5.5 5.5 0 0 1 8 13.5 Z" fill="currentColor" />
        </>
      )}
      {status === "expired" && <line x1="2" x2="14" y1="8" y2="8" {...common} />}
    </svg>
  );
}
