import { test, type Page } from '@playwright/test';
import { testPlansPage } from '../pages/testPlansPage';



test.describe('TestPlans', () => {
  test('should display',async ({page}) => {
    const plansPage = new testPlansPage(page);
    await plansPage.goto();
    await plansPage.openTestPlans();
  })
});
