# BandTogether Personalization Platform

This repository contains all personalization experiments and customer experience optimizations for BandTogether's e-commerce platform.

## 🎯 Purpose

This repo manages:

- A/B test variants for homepage, product pages, and checkout flow
- Personalized product recommendation algorithms
- Dynamic pricing experiments
- Cart abandonment interventions

## 🚀 Deployment Process

1. Create feature branch from `main`
2. Develop experiment code
3. Open Pull Request with experiment details
4. Automated tests run (linting, unit tests, performance checks)
5. Preview deployment generated automatically
6. Marketing team reviews preview
7. Engineering approves code
8. Merge to `main` triggers staging deployment
9. Manual approval required for production deployment

## 📊 Current Experiments

- **Homepage Hero Banner Test** - Testing lifestyle vs. product-focused imagery
- **Cart Abandonment Modal** - Free shipping vs. 15% discount offer
- **Product Recommendations** - "Complete the look" vs. device-based suggestions
- **Personalized Pricing** - Loyalty tier-based pricing for repeat customers

## 🔒 Branch Protection

- `main` branch requires:
  - At least 1 approval
  - All CI checks passing
  - No force pushes allowed

## 📈 Success Metrics

- Average deployment time: **< 24 hours** (down from 2 weeks)
- Production incidents: **0** in last 30 days
- Experiments shipped per month: **35+**

## 🛠️ Tech Stack

- Dynamic Yield for personalization engine
- GitHub Actions for CI/CD
- Vercel for preview deployments
- Google Analytics 4 for tracking

---

**Last Updated**: October 2025  
**Maintained by**: Engineering & Growth Teams
