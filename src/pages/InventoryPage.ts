import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  readonly accountHeading;

  constructor(page: Page) {
    super(page);
    this.accountHeading = page.getByText('My account');
  }

  async goto(): Promise<void> {
    await this.page.goto('https://practicesoftwaretesting.com/account');
    await this.accountHeading.waitFor({ state: 'visible' });
  }
}
