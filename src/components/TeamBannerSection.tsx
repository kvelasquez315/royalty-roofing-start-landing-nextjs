/**
 * TeamBannerSection — "Real People Who Work Locally All Year Round"
 * id="team"
 * - Light off-white bg
 * - Bebas Neue headline, DM Sans body
 * - Large team photos filling the right column, no name labels
 * - Blue CTA
 */

const TEAM_1 = "/images/UZteEbGBLmvFwkIW.png";
const TEAM_2 = "/images/USLiBmemGdALLysr.png";

export default function TeamBannerSection() {
  return (
    <section
      id="team"
      style={{ background: "#F5F5F3", padding: "96px 0", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 28px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
        }}
        className="team-grid"
      >
        {/* LEFT: Text */}
        <div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 4.5vw, 60px)",
              lineHeight: 0.95,
              color: "#0A1220",
              margin: "0 0 24px",
              letterSpacing: "0.01em",
            }}
          >
            WE'RE AN OMAHA-BASED TEAM THAT LIVES AND WORKS HERE<br />
            <span style={{ color: "#3D6CC0" }}>ALL YEAR ROUND.</span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              color: "#4B5563",
              lineHeight: 1.75,
              marginBottom: "28px",
              maxWidth: "520px",
            }}
          >
            We're not a franchise or a storm-chasing crew that rolls in after a hailstorm and disappears. Royalty Roofing and Siding is family-owned and operated right here in Omaha. When you call, you talk to us directly, not a call center.
          </p>

          {/* Proof points */}
          <div style={{ marginBottom: "36px" }}>
            {[
              "Family owned and operated since 2010",
              "Omaha-based team, we live here too",
              "Direct communication with your project manager",
              "We answer our phones and return calls same day",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "12px",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l3.5 3.5L13 4.5" stroke="#3D6CC0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    color: "#374151",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          <a
            href="tel:4022168850"
            className="team-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#3D6CC0",
              color: "white",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "15px",
              padding: "14px 32px",
              borderRadius: "6px",
              textDecoration: "none",
              transition: "background 0.15s, transform 0.15s",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Call (402) 216-8850
          </a>
        </div>

        {/* RIGHT: Team photos — equal side by side, no overlap, no offset */}
        <div
          className="team-photos"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            alignItems: "start",
          }}
        >
          <div
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
              aspectRatio: "2/3",
            }}
          >
            <img
              src={TEAM_1}
              alt="AJ Velasquez, Owner, Royalty Roofing and Siding"
              loading="lazy"
              decoding="async"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
            />
          </div>
          <div
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
              aspectRatio: "2/3",
            }}
          >
            <img
              src={TEAM_2}
              alt="David Velasquez, Co-Owner, Royalty Roofing and Siding"
              loading="lazy"
              decoding="async"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
            />
          </div>
        </div>
      </div>

      {/* Responsive + CSS-only hover (zero JS) */}
      <style>{`
        .team-cta:hover {
          background: #2d5aad !important;
          transform: translateY(-1px);
        }
        @media (max-width: 900px) {
          .team-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
            padding: 0 16px !important;
          }
        }
        @media (max-width: 640px) {
          #team {
            padding: 56px 0 !important;
          }
          .team-photos {
            grid-template-columns: 1fr 1fr !important;
            gap: 10px !important;
          }
          .team-photos > div {
            aspect-ratio: 3/4 !important;
          }
        }
      `}</style>
    </section>
  );
}
