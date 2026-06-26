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
