/**
 * EstimateForm — shared form used in HeroSection and BottomFormSection
 * Design: Dark card (#0d1a2e / near-black), large white inputs with rounded-xl,
 * full-width selects stacked, big blue CTA button with Bebas Neue uppercase text.
 * Fields: First Name, Last Name, Phone only.
 */
import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { trackLead, postLeadToCRM } from "@/lib/tracking";

interface EstimateFormProps {
  variant?: "glass" | "card";
}

export default function EstimateForm({ variant = "card" }: EstimateFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      // POST the lead to our CRM/webhook (endpoint configured in lib/tracking.ts)
      await postLeadToCRM({ ...form, source: "roofing_estimate" });
      setStatus("success");
      // Fire the conversion event (dataLayer + gtag generate_lead, method "form")
      trackLead("form", { form_type: "roofing_estimate" });
    } catch {
      setStatus("error");
    }
  };

  const cardBg = "rgba(8, 16, 32, 0.82)";
  const cardBorder = "1px solid rgba(255,255,255,0.12)";
  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: "10px",
    fontSize: "15px",
    background: "rgba(255,255,255,0.92)",
    border: "1.5px solid rgba(255,255,255,0.7)",
    color: "#111",
    outline: "none",
    fontFamily: "var(--font-body)",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };
  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "13px",
    fontWeight: 600,
    color: "rgba(255,255,255,0.85)",
    marginBottom: "6px",
    fontFamily: "var(--font-body)",
    letterSpacing: "0.02em",
  };

  if (status === "success") {
    return (
      <div
        className="flex flex-col items-center justify-center text-center py-14 px-8 rounded-2xl"
        style={{ background: cardBg, border: cardBorder, backdropFilter: "blur(20px)" }}
      >
        <CheckCircle className="mb-4 text-green-400" size={52} />
        <h3
          className="text-2xl font-bold mb-2"
          style={{ fontFamily: "var(--font-body)", color: "white" }}
        >
          Thanks! We&apos;ll call you within 1 business day.
        </h3>
        <p className="text-white/80 text-sm leading-relaxed">
          A member of our Omaha team will reach out to schedule your free, no-obligation roof inspection.
        </p>
        <p className="mt-5 font-semibold text-white/90">
          Need immediate help? Call{" "}
          <a href="tel:4022168850" className="underline" style={{ color: "#3D6CC0" }}>
            (402) 216-8850
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl overflow-hidden"
      style={{
        background: cardBg,
        border: cardBorder,
        backdropFilter: "blur(20px)",
        boxShadow: "0 12px 48px rgba(0,0,0,0.55)",
      }}
    >
      {/* Header */}
      <div className="px-7 pt-7 pb-5">
        {/* Trust line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "7px",
            marginBottom: "12px",
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            fontWeight: 600,
            color: "rgba(255,255,255,0.92)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" aria-hidden="true">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          Join 500+ Omaha homeowners — 4.9 on Google.
        </div>
        <h3
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "26px",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          Get Your Free Consultation
        </h3>
      </div>

      <div className="px-7 pb-7 space-y-4">
        {/* Name row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }} className="form-two-col">
          <div>
            <label style={labelStyle} htmlFor="firstName">First Name <span style={{ color: "#f87171" }}>*</span></label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="lastName">Last Name <span style={{ color: "#f87171" }}>*</span></label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              autoComplete="family-name"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
        </div>

        {/* Phone — full width */}
        <div>
          <label style={labelStyle} htmlFor="phone">Phone <span style={{ color: "#f87171" }}>*</span></label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            required
            placeholder="(402) 000-0000"
            value={form.phone}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            width: "100%",
            padding: "18px 24px",
            background: "#3D6CC0",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            letterSpacing: "0.12em",
            cursor: status === "loading" ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            transition: "background 0.2s",
            marginTop: "4px",
          }}
          onMouseEnter={(e) => { if (status !== "loading") (e.currentTarget as HTMLButtonElement).style.background = "#2d5aad"; }}
          onMouseLeave={(e) => { if (status !== "loading") (e.currentTarget as HTMLButtonElement).style.background = "#3D6CC0"; }}
        >
          {status === "loading" ? (
            <><Loader2 size={20} className="animate-spin" /> Sending...</>
          ) : (
            "GET MY FREE INSPECTION"
          )}
        </button>

        {/* Reassurance microcopy directly under the submit button */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            color: "rgba(255,255,255,0.75)",
            textAlign: "center",
            margin: "10px 0 0",
            lineHeight: 1.5,
          }}
        >
          ✓ Free inspection · No obligation · We call within 1 business day.
        </p>

        {status === "error" && (
          <p style={{ color: "#fca5a5", fontSize: "13px", textAlign: "center", fontFamily: "var(--font-body)" }}>
            Something went wrong. Please call us at (402) 216-8850.
          </p>
        )}

        {/* Consent statement (not a blocking checkbox) */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
            margin: "4px 0 0",
            lineHeight: 1.5,
          }}
        >
          By submitting, you agree to receive calls/texts about your project. Msg &amp; data rates may apply.
        </p>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .form-two-col {
            grid-template-columns: 1fr !important;
          }
          .px-7 {
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
        }
      `}</style>
    </form>
  );
}
