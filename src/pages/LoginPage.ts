import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { InventoryPage } from './InventoryPage';

export class LoginPage extends BasePage {
  readonly emailInput;
  readonly passwordInput;
  readonly loginButton;

  constructor(page: Page) {
    super(page);
    this.emailInput = page.getByLabel('Email address *');
    this.passwordInput = page.getByLabel('Password *');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async goto(): Promise<void> {
    await this.page.goto('https://practicesoftwaretesting.com/auth/login');
    await this.emailInput.waitFor({ state: 'visible' });
  }

  async loginAs(credentials: { username: string; password: string }): Promise<InventoryPage> {
    await this.emailInput.fill(credentials.username);
    await this.passwordInput.fill(credentials.password);
    await this.loginButton.click();
    return new InventoryPage(this.page);
  }
}
