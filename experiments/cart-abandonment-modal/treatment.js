/**
 * Cart Abandonment Modal - Treatment (Free Shipping Offer)
 *
 * Experiment: CA-2025-10-B
 * Shows free shipping offer on exit intent
 */

export const cartAbandonmentTreatment = {
  id: "cart-abandonment-free-shipping",
  enabled: true,
  modalTitle: "Wait! Get Free Shipping",
  modalBody:
    "Complete your order now and we'll ship your bands for free. Limited time offer!",
  ctaText: "Get Free Shipping",
  dismissText: "No thanks",
  minCartValue: 30, // Only show if cart > $30
  analyticsLabel: "cart_abandonment_free_shipping",
};

// Track modal impression
export function trackModalShown() {
  if (window.analytics) {
    window.analytics.track("Cart Abandonment Modal Shown", {
      variant: "free_shipping",
      experiment_id: "CA-2025-10-B",
      cart_value: getCartValue(),
    });
  }
}

// Track CTA click
export function trackCtaClick() {
  if (window.analytics) {
    window.analytics.track("Cart Abandonment CTA Clicked", {
      variant: "free_shipping",
      experiment_id: "CA-2025-10-B",
      cart_value: getCartValue(),
    });
  }
}

// Track dismissal
export function trackDismiss() {
  if (window.analytics) {
    window.analytics.track("Cart Abandonment Modal Dismissed", {
      variant: "free_shipping",
      experiment_id: "CA-2025-10-B",
      cart_value: getCartValue(),
    });
  }
}

function getCartValue() {
  return window.cartTotal || 0;
}
