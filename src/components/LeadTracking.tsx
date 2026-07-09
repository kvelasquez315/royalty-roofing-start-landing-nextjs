"use client";

/**
 * LeadTracking — mounts once and listens (via event delegation) for clicks on
 * any tel: or sms: link anywhere on the page, firing a `generate_lead` event
 * with the correct method ("call" or "text"). This keeps every phone/text link
 * tracked without wiring onClick into each component.
 */
import { useEffect } from "react";
import { trackLead, reportCallConversion } from "@/lib/tracking";

export default function LeadTracking() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a[href^='tel:'], a[href^='sms:']") as
        | HTMLAnchorElement
        | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      const method = href.startsWith("sms:") ? "text" : "call";
      trackLead(method);
      // Fire the Google Ads "Click to call" conversion on tel: clicks only.
      if (method === "call") reportCallConversion();
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
}
