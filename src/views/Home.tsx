/**
 * Home — Royalty Roofing Google Ads Landing Page
 * Design: Premium Conversion Machine (revised)
 * Palette: Navy (#0F1B2D) + Royal Blue (#3D6CC0) + Off-white (#F7F7F5)
 * Fonts: DM Sans 400/500/600/700/800 throughout — no condensed typefaces
 * No gold/yellow anywhere (only #F59E0B for star icons)
 *
 * Section order (conversion-optimized):
 * 1. Navbar (fixed, anchor nav, blue CTA)
 * 2. HeroSection (full-viewport, above-the-fold form, new copy)
 * 3. TrustBar (stats + 7 award badges, dark bg flush)
 * 4. HonestAssessmentSection (id=why-royalty, editorial proof blocks)
 * 5. ReviewsSection (id=reviews, SVG stars, Google G mark)
 * 6. TeamBannerSection (id=team, blue CTA)
 * 7. BottomFormSection (id=bottom-form, blue submit)
 * 8. Footer
 */
import BottomFormSection from "@/components/BottomFormSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HonestAssessmentSection from "@/components/HonestAssessmentSection";
import Navbar from "@/components/Navbar";
import ReviewsSection from "@/components/ReviewsSection";
import TeamBannerSection from "@/components/TeamBannerSection";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import TrustBar from "@/components/TrustBar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <HonestAssessmentSection />
      <ReviewsSection />
      <TeamBannerSection />
      <BottomFormSection />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
