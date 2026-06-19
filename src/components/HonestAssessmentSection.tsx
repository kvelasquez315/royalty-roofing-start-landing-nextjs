/**
 * HonestAssessmentSection — "Why Royalty" differentiator
 * id="why-royalty"
 * - Light off-white bg (#F5F5F3)
 * - Full-width headline above two-column grid (text left, photo right)
 * - No gold, no icon-in-circle, no floating badge
 */

const ROOF_PHOTO = "/images/bvHlWzgAoNLMEtcN.png";

const PROOF_BLOCKS = [
  {
    label: "We're out fast",
    desc: "We don't make you wait weeks for a quote. We get to your home quickly, get on the roof, and give you a straight answer on what it needs.",
  },
  {
    label: "We do repairs, not just replacements",
    desc: "A lot of companies won't bother with smaller jobs. We do. If a repair is all you need, that's what we'll quote. No pressure to replace something that still has life in it.",
  },
  {
    label: "We handle your insurance claim",
    desc: "Storm damage is stressful enough. We work directly with your adjuster from the first call to the final payment so you don't have to fight that battle alone.",
  },
  {
    label: "Every job backed by a written warranty",
    desc: "We stand behind our work. Every repair and replacement comes with a written workmanship warranty.",
  },
];

export default function HonestAssessmentSection() {
  const scrollToForm = () => {
    document.getElementById("bottom-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="why-royalty" style={{ background: "#F5F5F3", padding: "96px 0" }}>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 28px",
        }}
      >
        {/* Full-width headline */}

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(44px, 6vw, 80px)",
            lineHeight: 0.95,
            color: "#0A1220",
            margin: "0 0 48px",
            letterSpacing: "0.01em",
          }}
        >
          WE COME TO YOUR HOME, GET ON YOUR ROOF, AND GIVE YOU A STRAIGHT ANSWER ON WHAT IT{" "}
          <span style={{ color: "#3D6CC0" }}>ACTUALLY NEEDS.</span>
        </h2>

        {/* Two-column grid: text left, photo right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "start",
          }}
          className="why-grid"
        >
          {/* LEFT: Body + proof blocks + CTA */}
          <div>
            {/* Body copy */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                color: "#4B5563",
                lineHeight: 1.75,
                marginBottom: "36px",
                maxWidth: "520px",
              }}
            >
              We show up when we say we will, take on jobs of every size, and only recommend what your roof actually needs. If you have storm damage, we take the insurance process off your plate entirely.
            </p>

            {/* Proof blocks */}
            <div style={{ marginBottom: "40px" }}>
              {PROOF_BLOCKS.map(({ label, desc }, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "16px",
                    marginBottom: "24px",
                    paddingBottom: "24px",
                    borderBottom: i < PROOF_BLOCKS.length - 1 ? "1px solid rgba(0,0,0,0.07)" : "none",
                  }}
                >
                  {/* Number */}
                  <div
                    style={{
                      flexShrink: 0,
                      fontFamily: "var(--font-display)",
                      fontSize: "42px",
                      lineHeight: 1,
                      color: "#3D6CC0",
                      opacity: 0.55,
                      marginTop: "0px",
                      minWidth: "52px",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 700,
                        fontSize: "15px",
                        color: "#0A1220",
                        marginBottom: "4px",
                        lineHeight: 1.4,
                      }}
                    >
                      {label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        color: "#6B7280",
                        lineHeight: 1.65,
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={scrollToForm}
              style={{
                background: "#3D6CC0",
                color: "white",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: "15px",
                padding: "14px 32px",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.02em",
                transition: "background 0.15s, transform 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#2d5aad";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#3D6CC0";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
              }}
            >
              Schedule a Free Inspection →
            </button>
          </div>

          {/* RIGHT: Photo */}
          <div>
            <img
              src={ROOF_PHOTO}
              alt="Royalty Roofing crew completing a residential roofing project in Omaha"
              className="why-photo"
              style={{
                width: "100%",
                height: "520px",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.14)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 900px) {
          .why-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .why-photo {
            height: 360px !important;
          }
        }
        @media (max-width: 640px) {
          #why-royalty {
            padding: 56px 0 !important;
          }
          #why-royalty > div {
            padding: 0 16px !important;
          }
          .why-photo {
            height: 260px !important;
          }
        }
      `}</style>
    </section>
  );
}
