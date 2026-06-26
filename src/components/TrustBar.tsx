/**
 * TrustBar — Royalty Roofing
 * - Flush below hero, dark navy (#0A1220) background
 * - Stats row: 4.9★ | 7× | 15+ | 500+
 * - Award badges row: all 7 Best of Omaha badges with VERIFIED CDN URLs
 * CDN URLs verified 2026-04-22
 */
const STATS = [
  { display: "4.9★", label: "Google Rating" },
  { display: "7×", label: "Best of Omaha Winner" },
  { display: "15+", label: "Years Serving Omaha" },
];

const AWARDS = [
  { src: "/images/YxnCUKTKTxhmuQvH.png", alt: "Best of Omaha 2020, Residential Roofing" },
  { src: "/images/sSfzxxmSoIYevjBW.png", alt: "Best of Omaha 2021, Residential Siding" },
  { src: "/images/AlAJNKLYxnwKLRzc.png", alt: "Best of Omaha 2022, Residential Siding" },
  { src: "/images/wiTUJNMXftSBXyRb.png", alt: "Best of Omaha 2023, Residential Roofing" },
  { src: "/images/AXiRtluyUJdIhZod.png", alt: "Best of Omaha 2024, Residential Roofing" },
  { src: "/images/OvgQUnyKHjflghyH.png", alt: "Best of Omaha 2025, Residential Roofing" },
  { src: "/images/qvfYCjTxkEEEsbbp.png", alt: "Best of Omaha 2026, Residential Siding" },
];

// Pure-CSS animated stat (no JS / no IntersectionObserver) — fades up on load via
// the `stat-num` keyframe defined in this component's <style> block.
function AnimatedStat({ display }: { display: string }) {
  return (
    <div
      className="stat-num"
      style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(40px, 4.5vw, 56px)",
        color: "white",
        lineHeight: 1,
        letterSpacing: "0.01em",
      }}
    >
      {display}
    </div>
  );
}

export default function TrustBar() {
  return (
      <section style={{ background: "#0A1220", paddingBottom: "0" }}>
      {/* Stats row */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "56px 28px 48px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "0",
        }}
        className="stats-grid"
      >
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "0 16px",
              borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
            }}
          >
            <AnimatedStat display={stat.display} />
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                fontWeight: 500,
                color: "rgba(255,255,255,0.72)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginTop: "10px",
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Awards strip — white background */}
      <div className="awards-strip" style={{ background: "#ffffff", borderTop: "1px solid #e5e7eb", padding: "48px 28px" }}>
        {/* Award badges row */}
        <div
          className="awards-inner"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "24px",
          }}
        >
        {AWARDS.map((award) => (
          <img
            key={award.alt}
            className="award-badge"
            src={award.src}
            alt={award.alt}
            loading="lazy"
            decoding="async"
            style={{
              height: "130px",
              width: "auto",
              objectFit: "contain",
              opacity: 0.85,
              transition: "opacity 0.2s, transform 0.2s",
            }}
          />
        ))}
        </div>
      </div>

      {/* Responsive + CSS-only interactions (zero JS) */}
      <style>{`
        .award-badge:hover {
          opacity: 1 !important;
          transform: scale(1.06);
        }
        @keyframes statFadeUp {
          from { opacity: 0.15; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .stat-num {
          animation: statFadeUp 0.5s ease both;
        }
        @media (prefers-reduced-motion: reduce) {
          .stat-num { animation: none; }
        }
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 0 !important;
            padding: 32px 12px 28px !important;
          }
          .stats-grid > div {
            border-right: none !important;
            padding: 0 8px !important;
          }
          .awards-strip {
            padding: 24px 0 !important;
            overflow-x: auto !important;
            -webkit-overflow-scrolling: touch !important;
          }
          .awards-inner {
            flex-wrap: nowrap !important;
            justify-content: flex-start !important;
            padding: 0 16px !important;
            gap: 16px !important;
          }
          .awards-inner img {
            height: 80px !important;
            flex-shrink: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
