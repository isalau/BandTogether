# Deployment Guide

## Overview

All personalization experiments follow this deployment workflow to ensure quality and minimize risk.

## Workflow Stages

### 1. Development (Feature Branch)

- Create branch from `main`: `git checkout -b experiment/hero-banner-test`
- Develop experiment code
- Commit with descriptive messages
- Push to GitHub

### 2. Pull Request & Review

- Open PR using template
- Automated tests run:
  - Code linting (catches syntax errors)
  - Unit tests (validates logic)
  - Accessibility checks (WCAG 2.1 AA compliance)
  - Performance checks (bundle size limits)
- Preview deployment auto-generated (takes ~3 min)

### 3. Stakeholder Review

- Marketing reviews preview URL
- QA tests across devices/browsers
- Engineering reviews code quality
- At least 1 approval required to merge

### 4. Staging Deployment

- Merge to `main` triggers auto-deploy to staging
- Staging mirrors production environment
- Final verification by marketing and QA
- Runs for 24-48 hours minimum

### 5. Production Deployment

- Manual approval gate required
- Approvers: Engineering Lead + Marketing Lead
- Deploy during low-traffic window (preferred)
- Monitor for 1 hour post-deployment
- Rollback available in < 2 minutes if needed

## Rollback Process

If issues detected in production:

1. Navigate to Actions tab
2. Find latest production deployment
3. Click "Re-run jobs" on previous successful deployment
4. OR revert the commit and push

Rollback time: ~2 minutes

## Emergency Contacts

- On-call engineer: #engineering-oncall Slack channel
- Marketing lead: @sarah-chen
- Product manager: @mike-johnson
