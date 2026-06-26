/**
 * TrustBar — Royalty Roofing
 * - Flush below hero, dark navy (#0A1220) background
 * - Stats row: 4.9★ | 7× | 15+ | 500+
 * - Award badges row: all 7 Best of Omaha badges with VERIFIED CDN URLs
 * CDN URLs verified 2026-04-22
 */
import { useEffect, useRef, useState } from "react";

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

function AnimatedStat({ display }: { display: string }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(40px, 4.5vw, 56px)",
        color: "white",
        lineHeight: 1,
        letterSpacing: "0.01em",
        opacity: visible ? 1 : 0.15,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
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
              mixBlendMode: undefined,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLImageElement).style.opacity = "1";
              (e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLImageElement).style.opacity = "0.85";
              (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
            }}
          />
        ))}
        </div>
      </div>

      {/* Responsive */}
      <style>{`
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
