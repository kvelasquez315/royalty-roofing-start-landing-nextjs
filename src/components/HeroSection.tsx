/**
 * HeroSection — Royalty Roofing
 * Design: Moose-inspired — massive Bebas Neue headline, trust badge cluster left, glass form right
 * Mobile: stacked layout, form shown below headline, badges wrap
 * Background: pure CSS brand-navy gradient (zero image requests) so the H1 is the
 * instant-painting LCP element — mobile LCP < 2.5s, no layout shift.
 * BBB logo: /images/OvrIKRhrXjOUvBsh.png
 */
import EstimateForm from "./EstimateForm";

const BBB_LOGO = "/images/OvrIKRhrXjOUvBsh.png";

const badgeStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  background: "rgba(255,255,255,0.16)",
  border: "1px solid rgba(255,255,255,0.35)",
  borderRadius: "10px",
  padding: "10px 16px",
  backdropFilter: "blur(8px)",
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "110px",
        overflow: "hidden",
        // Pure CSS brand-navy background — zero network requests, paints instantly.
        // Base diagonal navy → royal blue, with a soft radial highlight top-left for depth.
        backgroundColor: "#0E1B33",
        backgroundImage:
          "radial-gradient(120% 120% at 12% 8%, rgba(61,108,192,0.45) 0%, rgba(61,108,192,0) 55%), linear-gradient(135deg, #0B1426 0%, #16294C 45%, #2B4C8C 100%)",
      }}
    >

      {/* Content grid */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "40px 24px 80px",
          display: "grid",
          gridTemplateColumns: "1fr 460px",
          gap: "48px",
          alignItems: "start",
        }}
        className="hero-grid"
      >
        {/* LEFT */}
        <div>
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "12px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.82)",
              marginBottom: "16px",
            }}
          >
            Omaha's Trusted Roofer Since 2010
          </p>

          {/* Hero headline */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(46px, 6.5vw, 84px)",
              lineHeight: 1.0,
              color: "white",
              margin: "0 0 24px",
              letterSpacing: "0.01em",
            }}
          >
            WE INSPECT YOUR ROOF FOR FREE AND ONLY RECOMMEND A REPLACEMENT IF YOU TRULY NEED ONE.
          </h1>

          {/* Sub-copy */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(16px, 2vw, 20px)",
              fontWeight: 400,
              color: "rgba(255,255,255,0.88)",
              lineHeight: 1.65,
              maxWidth: "520px",
              marginBottom: "28px",
            }}
          >
Repairs done right. Replacements only when necessary. We're out to your home fast, we handle jobs of any size, and if you have storm damage we work directly with your insurance company from start to finish.
          </p>

          {/* Trust badge cluster */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {/* Google rating */}
            <div style={badgeStyle}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div>
                <div style={{ display: "flex", gap: "2px", marginBottom: "2px" }}>
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#F59E0B">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.90)", fontFamily: "var(--font-body)" }}>4.9 · 500+ Reviews</span>
              </div>
            </div>

            {/* Best of Omaha */}
            <div style={badgeStyle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#F59E0B">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "white", fontFamily: "var(--font-body)", lineHeight: 1.2 }}>Best of Omaha</div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.90)", fontFamily: "var(--font-body)" }}>7 Years Running</div>
              </div>
            </div>

            {/* BBB A+ Rating */}
            <div style={badgeStyle}>
              <img
                src={BBB_LOGO}
                alt="BBB"
                style={{ width: "26px", height: "26px", objectFit: "contain" }}
              />
              <div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "white", fontFamily: "var(--font-body)", lineHeight: 1.2 }}>BBB Accredited</div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.90)", fontFamily: "var(--font-body)" }}>A+ Rating</div>
              </div>
            </div>
          </div>

          {/* Mobile-only CTA phone link */}
          <a
            href="tel:4022168850"
            className="hero-mobile-cta"
            style={{
              display: "none",
              marginTop: "28px",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              background: "#3D6CC0",
              color: "white",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "18px",
              padding: "16px 24px",
              borderRadius: "10px",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Call (402) 216-8850
          </a>
        </div>

        {/* RIGHT: Form */}
        <div style={{ paddingBottom: "8px" }} className="hero-form-col">
          <EstimateForm variant="glass" />
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
            padding: 28px 16px 100px !important;
          }
          .hero-form-col {
            display: block !important;
          }
          .hero-mobile-cta {
            display: flex !important;
          }
          #hero {
            padding-top: 94px !important;
          }
        }
        @media (max-width: 480px) {
          .hero-grid {
            padding: 20px 14px 100px !important;
          }
          #hero {
            padding-top: 90px !important;
          }
        }
      `}</style>
    </section>
  );
}
