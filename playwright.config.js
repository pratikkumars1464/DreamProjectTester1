// @ts-check
import { defineConfig, devices } from '@playwright/test';

const browser = process.env.BROWSER || 'chromium';
const baseURL = process.env.BASE_URL || 'https://demo.applitools.com/app.html#';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  use: {
    browserName: browser,
    headless: true,
    trace: 'on-first-retry',
    screenshot: 'on',
    baseURL: baseURL,
  },
});

