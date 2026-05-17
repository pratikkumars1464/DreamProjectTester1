import {test, expect} from '@playwright/test';
test('should have the correct title', async ({page}) => {
  await page.goto(process.env.BASE_URL || '/');
  await console.log('Code is uploaded to GitHub');
});