"use client";

/**
 * StickyMobileCTA — Fixed bottom bar on mobile only
 * Buttons: Call Now (tel:) + Text (sms:) + Get Free Estimate (scrolls to form)
 * - Stays fixed on scroll; all tap targets ≥ 48px
 * - The form sections carry extra bottom padding so this bar never covers the submit button
 * Hidden on lg+ screens
 */
export default function StickyMobileCTA() {
  const scrollToForm = () => {
    const el = document.getElementById("bottom-form");
    el?.scrollIntoView({ behavior: "smooth" });
    // Move focus to the first field for accessibility + faster fills
    setTimeout(() => {
      (el?.querySelector("#firstName") as HTMLInputElement | null)?.focus();
    }, 600);
  };

  const iconBtn: React.CSSProperties = {
    flex: "0 0 auto",
    minWidth: "56px",
    minHeight: "48px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "2px",
    background: "rgba(255,255,255,0.1)",
    border: "1.5px solid rgba(255,255,255,0.25)",
    color: "white",
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    fontSize: "11px",
    borderRadius: "8px",
    textDecoration: "none",
    letterSpacing: "0.02em",
  };

  return (
    <div className="sticky-mobile-cta lg:hidden" style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 99,
      display: "flex",
      background: "#0A1220",
      borderTop: "1px solid rgba(255,255,255,0.12)",
      padding: "10px 12px",
      gap: "8px",
      paddingBottom: "max(10px, env(safe-area-inset-bottom))",
    }}>
      <a href="tel:4022168850" aria-label="Call Royalty Roofing now" style={iconBtn}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        Call
      </a>
      <a href="sms:+14029839816" aria-label="Text Royalty Roofing" style={iconBtn}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        Text
      </a>
      <button
        onClick={scrollToForm}
        style={{
          flex: 1,
          minHeight: "48px",
          background: "#3D6CC0",
          color: "white",
          fontFamily: "var(--font-display)",
          fontWeight: 400,
          fontSize: "17px",
          letterSpacing: "0.08em",
          padding: "13px 12px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
        }}
      >
        GET FREE ESTIMATE
      </button>
    </div>
  );
}
