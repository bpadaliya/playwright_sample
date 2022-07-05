import { expect, Locator, type Page } from '@playwright/test';

export class testPlansPage {
    readonly page: Page;
    readonly testPlansTab: Locator;
    readonly planName: Locator;
    readonly URL: string;
    constructor(page: Page) {
        this.page = page;
        this.testPlansTab = page.locator('[aria-label="Test Plans"]');
        this.planName = page.locator('.bolt-dropdown-expandable-button-label');
        this.URL = 'https://dev.azure.com/t-bpadaliya/automated-test/'
    }

    async goto() {
        await this.page.goto(this.URL);
    }

    async openTestPlans() {
        await this.testPlansTab.click();
        await expect(this.planName).toBeVisible();
    }
}

