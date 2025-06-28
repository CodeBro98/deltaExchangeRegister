import { chromium, PlaywrightTestConfig } from '@playwright/test';
 const config: PlaywrightTestConfig = {
  timeout : 45000*1000,
  use:{
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    acceptDownloads: true,
    actionTimeout : 120000,
    navigationTimeout : 1200000
  },
  retries :0,
  reporter : [
    ['list'],
    ['html', {
      open: 'never',
      outputFolder: 'test-results',
      outputFile: 'report.html'}],
    ]
    }

    export default config;