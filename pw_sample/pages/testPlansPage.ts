import { expect, Locator, type Page } from '@playwright/test';

export class testPlansPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://dev.azure.com/t-bpadaliya/automated-test/');
    }

    async openTestPlans() {
        await this.page.locator('[aria-label="Test Plans"]').click();
        await expect(this.page.locator('.test-suite-content')).toBeVisible();
    }
}

