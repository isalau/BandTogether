/**
 * Analytics Tracking Utilities
 * Centralized tracking for all experiments
 */

export function trackEvent(eventName, properties = {}) {
  if (typeof window !== "undefined" && window.analytics) {
    window.analytics.track(eventName, {
      timestamp: new Date().toISOString(),
      platform: "web",
      ...properties,
    });
  } else {
    console.warn("Analytics not initialized:", eventName, properties);
  }
}

export function trackExperimentImpression(experimentId, variant) {
  trackEvent("Experiment Impression", {
    experiment_id: experimentId,
    variant: variant,
    page_url: window.location.href,
  });
}

export function trackExperimentConversion(
  experimentId,
  variant,
  conversionType
) {
  trackEvent("Experiment Conversion", {
    experiment_id: experimentId,
    variant: variant,
    conversion_type: conversionType,
  });
}
