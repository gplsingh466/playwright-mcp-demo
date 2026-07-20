import { test, expect } from '../../src/fixtures/base';
import { LoginPage } from '../../src/pages/LoginPage';
import users from '../data/users.json';

test.describe('Login Feature', () => {
  test('standard_user can log in successfully @smoke @critical', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    const inventoryPage = await loginPage.loginAs(users.standard);

    await inventoryPage.accountHeading.waitFor({ state: 'visible' });
    await expect(inventoryPage.accountHeading).toHaveText('My account');
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');
  });
});
