# Login Test Plan

**Target:** https://practicesoftwaretesting.com/auth/login
**Seed:** tests/seed.spec.ts
**Date:** 2026-07-20

## Overview
This plan covers the Practice Software Testing login flow with positive and negative credential scenarios. It focuses on successful login, locked account errors, empty-field validation, and invalid credentials handling.

## Preconditions
- The application is reachable at https://practicesoftwaretesting.com/auth/login
- The browser session starts on the login page for each scenario
- Test credentials are available for standard_user and locked_out_user

## Scenarios

### Scenario 1.1 — Standard user login succeeds
- **Priority:** P0
- **Tags:** @smoke @regression
- **Preconditions:** Browser is on the login page
- **Steps:**
  1. Navigate to the login page — expected: the login form is visible
  2. Enter standard_user credentials and click Login — expected: the request is submitted
  3. Confirm the authenticated landing page appears — expected: user lands on a dashboard or inventory page and no login error is shown
- **Assertions:**
  - The post-login page URL is not /auth/login
  - A UI element representing the authenticated user or dashboard is visible
  - No invalid credential error message is visible
- **Edge cases considered:**
  - The app returns the correct redirect after login
  - The login button remains enabled after login

### Scenario 1.2 — Locked out user shows account locked error
- **Priority:** P0
- **Tags:** @regression
- **Preconditions:** Browser is on the login page
- **Steps:**
  1. Navigate to the login page — expected: the login form is visible
  2. Enter locked_out_user credentials and click Login — expected: the request is submitted
  3. Confirm the locked account error is shown — expected: a clear locked-out message appears and the user remains on the login page
- **Assertions:**
  - The page displays a locked account error message
  - The URL remains on /auth/login
  - The login form is still visible for a retry
- **Edge cases considered:**
  - The locked-out message is not confused with invalid credentials
  - The login form does not redirect unexpectedly

### Scenario 1.3 — Empty username submission shows validation error
- **Priority:** P1
- **Tags:** @regression
- **Preconditions:** Browser is on the login page
- **Steps:**
  1. Navigate to the login page — expected: the login form is visible
  2. Leave email blank, enter a valid password, and click Login — expected: form validation triggers
  3. Confirm a required-username validation message is shown — expected: the user stays on the login page and sees a username-specific error
- **Assertions:**
  - A validation error for the email/username field is visible
  - The URL remains /auth/login
  - The password field value is unchanged after submit attempt
- **Edge cases considered:**
  - The browser does not clear the password when the email is missing
  - The app does not proceed with an empty email

### Scenario 1.4 — Empty password submission shows validation error
- **Priority:** P1
- **Tags:** @regression
- **Preconditions:** Browser is on the login page
- **Steps:**
  1. Navigate to the login page — expected: the login form is visible
  2. Enter a valid email, leave password blank, and click Login — expected: form validation triggers
  3. Confirm a required-password validation message is shown — expected: the user stays on the login page and sees a password-specific error
- **Assertions:**
  - A validation error for the password field is visible
  - The URL remains /auth/login
  - The email field retains its entered value after submit attempt
- **Edge cases considered:**
  - The app does not send a login request with an empty password
  - Validation message is specific to the password field, not a generic failure

### Scenario 1.5 — Invalid credentials show authentication error
- **Priority:** P0
- **Tags:** @smoke @regression
- **Preconditions:** Browser is on the login page
- **Steps:**
  1. Navigate to the login page — expected: the login form is visible
  2. Enter a valid email and incorrect password, then click Login — expected: authentication fails
  3. Confirm an invalid credentials error appears — expected: page remains on /auth/login and the error is displayed
- **Assertions:**
  - The page shows the invalid credentials error message
  - The login form remains visible for correction
  - The URL remains /auth/login
- **Edge cases considered:**
  - The invalid error is shown even when the email is valid
  - The page does not clear the email field after failure

## Not covered (and why)
- Social login flows are excluded because they require external OAuth interactions and are not stable for baseline automation.
- Registration and forgot-password flows are excluded because the request specifically targets the login flow.
