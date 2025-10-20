/**
 * Cart Abandonment Modal - Control (No Modal)
 *
 * Experiment: CA-2025-10-B
 * Baseline: No intervention on exit intent
 */

export const cartAbandonmentControl = {
  id: "cart-abandonment-control",
  enabled: false,
  analyticsLabel: "cart_abandonment_control",
};

// Track exit without intervention
export function trackExitIntent() {
  if (window.analytics) {
    window.analytics.track("Cart Exit Intent", {
      variant: "control",
      experiment_id: "CA-2025-10-B",
      cart_value: getCartValue(),
    });
  }
}

function getCartValue() {
  // Mock function - would pull from actual cart
  return window.cartTotal || 0;
}
