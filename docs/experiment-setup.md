# Experiment Setup Guide

## Quick Start

Follow these steps to set up a new personalization experiment.

## 1. Create GitHub Issue

Use the experiment issue template to document:

- Hypothesis
- Target audience
- Success metrics
- Timeline
- Owner

## 2. Create Feature Branch

```bash
git checkout -b experiment/descriptive-name
```

Naming convention: `experiment/[feature-area]-[brief-description]`

Examples:

- `experiment/homepage-hero-test`
- `experiment/cart-abandonment-modal`
- `experiment/product-recs-algorithm`

## 3. Develop Experiment Code

Create your experiment files in the appropriate directory:

```
experiments/
  └── your-experiment-name/
      ├── control.js (or variant-a.js)
      ├── treatment.js (or variant-b.js)
      └── README.md (optional, for complex experiments)
```

### Code Requirements

- Include experiment ID and description in comments
- Implement analytics tracking (impressions, interactions, conversions)
- Handle errors gracefully (fallback to control)
- Keep bundle size small (< 10KB per variant)
- Ensure mobile compatibility

### Analytics Events

Track at minimum:

1. **Impression**: When user sees the variant
2. **Interaction**: When user engages with the feature
3. **Conversion**: When desired action is completed

Example:

```javascript
window.analytics.track("Event Name", {
  variant: "variant_a",
  experiment_id: "EXP-2025-10-A",
  // additional context
});
```

## 4. Open Pull Request

Use the PR template and fill in all sections:

- Experiment details
- Hypothesis
- Success metrics
- Technical changes
- Pre-merge checklist

## 5. Review Process

**Automated checks** (runs automatically):

- Code linting
- Unit tests
- Accessibility checks
- Performance checks
- Bundle size validation

**Human review required**:

- Engineering: Code quality, performance, security
- Marketing: Preview review, messaging accuracy
- QA: Cross-browser/device testing

## 6. Deploy to Staging

Once PR is approved and merged to `main`:

- Auto-deploys to staging environment
- Run for 24-48 hours minimum
- Final smoke testing by QA and marketing

## 7. Deploy to Production

Manual approval required from:

- Engineering lead
- Marketing lead

Best practices:

- Deploy during low-traffic hours (if possible)
- Monitor for first hour post-deployment
- Have rollback plan ready

## 8. Monitor Results

- Check analytics dashboard daily
- Wait for statistical significance (typically 2 weeks)
- Document learnings
- Share results with team

## Common Patterns

### Device Detection

```javascript
function getUserDevice() {
  // Check cart contents, cookies, or user agent
  return "apple-watch"; // or 'fitbit', 'garmin', 'samsung'
}
```

### Personalization by User Segment

```javascript
function shouldShowVariant(user) {
  if (user.isReturning && user.purchaseCount > 3) {
    return "loyalty_variant";
  }
  return "control";
}
```

### Progressive Enhancement

```javascript
// Ensure code degrades gracefully
try {
  showPersonalizedExperience();
} catch (error) {
  console.error("Experiment failed:", error);
  showControlExperience();
}
```

## Rollback Procedure

If issues detected:

1. **Quick rollback** (< 2 min):

   - Go to Actions tab
   - Re-run previous successful deployment

2. **Code revert** (< 5 min):

```bash
   git revert <commit-hash>
   git push origin main
```

3. **Feature flag** (instant):
   - Disable in Dynamic Yield dashboard
   - Code remains deployed but inactive

## Questions?

Contact:

- Engineering: #engineering Slack channel
- Marketing: @sarah-chen
- Product: @mike-johnson
