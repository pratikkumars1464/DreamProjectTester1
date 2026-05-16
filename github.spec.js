import {test, expect} from '@playwright/test';
test('should have the correct title', async ({page}) => {
  await page.goto('https://demo.applitools.com/app.html#');
  await console.log('Code is uploaded to GitHub');
  await console.log('Code is uploaded to Cloning');
});