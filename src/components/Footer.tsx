/**
 * Footer — 3-column: logo+tagline, services, contact
 * White background, color logo, dark text
 */
export default function Footer() {
  const services = [
    "Roof Repair",
    "Roof Replacement",
    "Siding",
    "Gutters",
    "Windows & Doors",
    "Storm Damage",
  ];

  return (
    <footer style={{ background: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
      <div
        className="w-full px-6 py-12"
        style={{ maxWidth: "1280px", margin: "0 auto" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1: Logo + tagline */}
          <div>
            <img
              src="/images/jgBpqGuFanZshxxZ.png"
              alt="Royalty Roofing and Siding"
              style={{ height: "52px", width: "auto", marginBottom: "16px" }}
            />
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                color: "#6B7280",
                fontFamily: "var(--font-body)",
              }}
            >
              Omaha's most trusted roofing and siding contractor since 2010. Family owned. Best of Omaha winner 7 consecutive years.
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#9CA3AF",
                fontFamily: "var(--font-body)",
                marginBottom: "16px",
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {services.map((s) => (
                <li key={s} style={{ marginBottom: "8px" }}>
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#4B5563",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#9CA3AF",
                fontFamily: "var(--font-body)",
                marginBottom: "16px",
              }}
            >
              Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href="tel:4022168850"
                style={{
                  color: "#0A1220",
                  fontWeight: 600,
                  fontSize: "20px",
                  fontFamily: "var(--font-body)",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#3D6CC0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#0A1220")}
              >
                (402) 216-8850
              </a>
              <a
                href="mailto:info@royaltyroofing.org"
                style={{
                  fontSize: "14px",
                  color: "#6B7280",
                  fontFamily: "var(--font-body)",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#3D6CC0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6B7280")}
              >
                info@royaltyroofing.org
              </a>
              <span style={{ fontSize: "14px", color: "#6B7280", fontFamily: "var(--font-body)" }}>
                Omaha, NE &amp; Surrounding Areas
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: "40px",
            paddingTop: "24px",
            borderTop: "1px solid #f3f4f6",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "12px", color: "#9CA3AF", fontFamily: "var(--font-body)" }}>
            &copy; {new Date().getFullYear()} Royalty Roofing and Siding. All rights reserved.
          </p>
          <a
            href="https://royaltyroofing.org/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "12px",
              color: "#9CA3AF",
              fontFamily: "var(--font-body)",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#3D6CC0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
          >
            Privacy Policy
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          footer .grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          footer .w-full {
            padding: 40px 16px 90px !important;
          }
        }
      `}</style>
    </footer>
  );
}
