import Home from "@/views/Home";

// Server Component: the entire landing page renders to static HTML on the server.
// The previous client-only providers (ThemeProvider, TooltipProvider, sonner Toaster)
// were unused by this page and forced the whole tree — including the hero — into a
// hydrated client bundle. Removing them lets the hero (and the LCP H1) paint as static
// HTML with zero blocking JS, and drops sonner / next-themes / radix-tooltip from the
// critical bundle. Interactivity now lives in small client islands (form, navbar, etc).
export default function Page() {
  return <Home />;
}
