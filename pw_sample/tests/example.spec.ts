import { test, expect, type Page } from '@playwright/test';
import { testPlansPage } from '../pages/testPlansPage';


const username = 't-bpadaliya@microsoft.com';


test.describe('TestPlans', () => {
  test('should display',async ({page}) => {
    const testPlans = new testPlansPage(page);
    await testPlans.goto();
    await login(page);
    await testPlans.openTestPlans();
  })
});


async function login(page: Page) {
  await page.locator('[name="loginfmt"]').click();

  // Fill username
  await page.locator('[name="loginfmt"]').fill(username);

  // Click Next
  await page.locator('text=Next').click();

  // Wait for auth
  await page.waitForTimeout(15000);

  // Click No
  await page.locator('text=No').click();
}
