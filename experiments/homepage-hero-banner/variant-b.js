/**
 * Homepage Hero Banner - Variant B (Product-Focused)
 *
 * Experiment: HH-2025-10-A
 * Hypothesis: Clean product shots with discount messaging will drive higher
 *             immediate conversions than lifestyle imagery
 * Target Audience: All homepage visitors
 * Traffic Split: 50/50
 * Start Date: 2025-10-15
 * Owner: Isabel Laurenceau (Marketing)
 */

export const heroBannerVariantB = {
  id: "hero-product-v1",
  headline: "20% Off Premium Watch Bands",
  subheadline:
    "Leather, Sport, Metal & Designer bands - Free shipping over $50",
  ctaText: "Shop the Sale",
  ctaLink: "/collections/sale?discount=FALL20",
  backgroundImage: "/assets/hero-product-grid.jpg",
  analyticsLabel: "hero_variant_b_product",
};

// Track impression
export function trackHeroImpression() {
  if (window.analytics) {
    window.analytics.track("Hero Banner Viewed", {
      variant: "b_product",
      experiment_id: "HH-2025-10-A",
    });
  }
}

// Track CTA click
export function trackHeroClick() {
  if (window.analytics) {
    window.analytics.track("Hero CTA Clicked", {
      variant: "b_product",
      experiment_id: "HH-2025-10-A",
    });
  }
}
