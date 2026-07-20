import { test, expect } from '@playwright/test';

test.describe('Login Feature', () => {
  test('Login fails with incorrect password', async ({ page }) => {
    // 1. Navigate to https://practicesoftwaretesting.com/auth/login
    await page.goto('https://practicesoftwaretesting.com/auth/login');

    // 2. Enter a valid email and incorrect password and click Login
    await page.getByLabel('Email address *').fill('customer@practicesoftwaretesting.com');
    await page.getByLabel('Password *').fill('wrong-password');
    await page.getByRole('button', { name: 'Login' }).click();

    // 3. Confirm an authentication error message is shown
    await expect(page.getByText('Invalid email or password')).toBeVisible();
    await expect(page).toHaveURL(/\/auth\/login/);
  });
});
