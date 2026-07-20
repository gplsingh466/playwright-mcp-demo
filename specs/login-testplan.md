# Practice Software Testing Login Test Plan

## Application Overview

Test plan for the login functionality on Practice Software Testing demo application. The plan covers login page UI, successful login, validation, error handling, alternative login, and navigation to registration and forgot-password flows.

## Test Scenarios

### 1. Login Feature

**Seed:** `tests/example.spec.ts`

#### 1.1. Login page loads and shows required UI elements

**File:** `specs/login-page-loads.spec.ts`

**Steps:**
  1. Navigate to https://practicesoftwaretesting.com/auth/login
    - expect: The login page loads successfully.
    - expect: The page title contains "Login" or "Practice Software Testing - Toolshop".
  2. Verify the login form is visible
    - expect: The Email address field is present with placeholder "Your email".
    - expect: The Password field is present.
    - expect: The Login button is present.
    - expect: The Sign in with Google button is present.
    - expect: Links for "Register your account" and "Forgot your Password?" are present.

#### 1.2. Successful login with valid credentials

**File:** `specs/login-success.spec.ts`

**Steps:**
  1. Navigate to https://practicesoftwaretesting.com/auth/login
    - expect: The login page is displayed.
  2. Enter a valid email and password and click Login
    - expect: The login request is submitted.
  3. Confirm the user is redirected to the authenticated area
    - expect: The application shows a logged-in user state or dashboard.
    - expect: No login error message is displayed.

#### 1.3. Login fails with incorrect password

**File:** `specs/login-invalid-password.spec.ts`

**Steps:**
  1. Navigate to https://practicesoftwaretesting.com/auth/login
    - expect: The login page is displayed.
  2. Enter a valid email and incorrect password and click Login
    - expect: The form submission is attempted.
    - expect: An appropriate error message appears indicating invalid credentials.

#### 1.4. Login form validation for empty and invalid inputs

**File:** `specs/login-validation.spec.ts`

**Steps:**
  1. Navigate to https://practicesoftwaretesting.com/auth/login
    - expect: The login page is displayed.
  2. Attempt to submit the form with both email and password empty
    - expect: Form validation prevents submission or displays required field messages.
  3. Enter an invalid email format and any password, then submit
    - expect: An email format validation message appears or submission is prevented.

#### 1.5. Alternative login and navigation links work

**File:** `specs/login-alternative-links.spec.ts`

**Steps:**
  1. Navigate to https://practicesoftwaretesting.com/auth/login
    - expect: The login page is displayed.
  2. Click the Sign in with Google button
    - expect: The Google sign-in flow starts or the button is not broken.
    - expect: The page does not show a client-side JavaScript error on click.
  3. Click the "Register your account" link
    - expect: The browser navigates to /auth/register.
    - expect: The registration page is displayed.
  4. Navigate back to the login page and click "Forgot your Password?"
    - expect: The browser navigates to /auth/forgot-password.
    - expect: The forgot-password page is displayed.
