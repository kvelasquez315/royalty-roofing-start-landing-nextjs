/**
 * tracking.ts — single source of truth for lead conversion tracking.
 *
 * Two responsibilities:
 *  1. Push a `generate_lead` event to dataLayer/gtag (method: "form" | "call" | "text")
 *  2. POST the lead to our CRM webhook so Sales gets it in real time.
 *
 * Point `CRM_WEBHOOK_URL` at your endpoint (or set NEXT_PUBLIC_CRM_WEBHOOK_URL).
 */

export type LeadMethod = "form" | "call" | "text";

/**
 * Google Ads conversion label for the "Submit lead form" conversion action.
 * Format: AW-<account>/<conversion-label>. Used as the gtag `send_to` value.
 */
const GOOGLE_ADS_FORM_CONVERSION = "AW-931355603/tkwuCKLs78ccENO3jbwD";

/**
 * Fire the Google Ads "Submit lead form" conversion. Mirrors Google's
 * gtag_report_conversion snippet, but without the redirect callback since the
 * form shows an inline success state instead of navigating away.
 * Optionally pass a `url` to navigate to after the conversion is recorded.
 */
export function reportAdsConversion(url?: string): boolean {
  if (typeof window === "undefined") return false;

  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag !== "function") {
    // gtag not ready yet — still allow navigation if one was requested.
    if (url) window.location.href = url;
    return false;
  }

  w.gtag("event", "conversion", {
    send_to: GOOGLE_ADS_FORM_CONVERSION,
    event_callback: () => {
      if (typeof url !== "undefined") window.location.href = url;
    },
  });
  return false;
}

// TODO: Replace with your CRM/webhook endpoint (or set NEXT_PUBLIC_CRM_WEBHOOK_URL in project env vars).
const CRM_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_CRM_WEBHOOK_URL ||
  process.env.NEXT_PUBLIC_FORM_WEBHOOK_URL ||
  "";

/**
 * Fire the analytics conversion event. Safe to call on the client only.
 * Pushes to both dataLayer (GTM) and gtag (GA4 / Google Ads) if present.
 */
export function trackLead(method: LeadMethod, extra?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  const w = window as unknown as {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  };

  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: "generate_lead", method, ...extra });

  if (typeof w.gtag === "function") {
    w.gtag("event", "generate_lead", { method, ...extra });
  }
}

/**
 * POST a lead to the CRM webhook. Returns true on a successful send.
 * Never throws — callers can fire-and-forget.
 */
export async function postLeadToCRM(
  payload: Record<string, unknown>
): Promise<boolean> {
  if (!CRM_WEBHOOK_URL) return false;
  try {
    const res = await fetch(CRM_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, submittedAt: new Date().toISOString() }),
      keepalive: true,
    });
    return res.ok;
  } catch {
    return false;
  }
}
