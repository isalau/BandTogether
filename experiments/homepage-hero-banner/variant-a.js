/**
 * Homepage Hero Banner - Variant A (Lifestyle Imagery)
 *
 * Experiment: HH-2025-10-A
 * Hypothesis: Lifestyle imagery showing bands in action will increase
 *             homepage engagement by 15% compared to product-only shots
 * Target Audience: All homepage visitors
 * Traffic Split: 50/50
 * Start Date: 2025-10-15
 * Owner: Isabel Laurenceau (Marketing)
 */

export const heroBannerVariantA = {
  id: "hero-lifestyle-v1",
  headline: "Express Your Style, Every Day",
  subheadline: "Premium bands for Apple Watch, Fitbit, Garmin & Samsung",
  ctaText: "Shop Your Device",
  ctaLink: "/collections/all-bands",
  backgroundImage: "/assets/hero-lifestyle-runner.jpg",
  analyticsLabel: "hero_variant_a_lifestyle",
};

// Track impression
export function trackHeroImpression() {
  if (window.analytics) {
    window.analytics.track("Hero Banner Viewed", {
      variant: "a_lifestyle",
      experiment_id: "HH-2025-10-A",
    });
  }
}

// Track CTA click
export function trackHeroClick() {
  if (window.analytics) {
    window.analytics.track("Hero CTA Clicked", {
      variant: "a_lifestyle",
      experiment_id: "HH-2025-10-A",
    });
  }
}
