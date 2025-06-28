//Author : Saurabh Pokharkar
import { test, Page } from '@playwright/test';
import { chromium } from '@playwright/test';

    test.describe.serial("Fetching the Worl population count updates upto 20 sec", () => {
        let page: Page;

        test.beforeAll(async ({  }) => {
            const browser = await chromium.launch({headless : false});
            page = await browser.newPage();
        }); 

        test('Navigate to URL ', async () => {

            await page.goto('https://www.worldometers.info/world-population/');
            await page.waitForLoadState('domcontentloaded', { timeout: 40000 });
            await page.waitForSelector("//p[contains(text(),'Current World Population')]", { timeout: 40000 });
        });

        test('Verify population count', async () => {
            const startTime = Date.now();
            const duration = 20000; // 20 seconds
            var i=1;
            while (Date.now() - startTime < duration) {
                await console.log( "Births today for iteration "+i+" is : "+ await page.locator("//div[contains(text(),'Births today')]/following-sibling::span").innerText());
                await console.log( "Deaths today for iteration "+i+" is : "+ await page.locator("//div[contains(text(),'Deaths today')]/following-sibling::span").innerText());
                await console.log( "Population Growth today for iteration "+i+" is : "+ await page.locator("//div[contains(text(),'Population Growth today')]/following-sibling::span").innerText());
                await console.log( "Births this year for iteration "+i+" is : "+ await page.locator("//div[contains(text(),'Births this year')]/following-sibling::span").innerText());
                await console.log( "Deaths this year for iteration "+i+" is : "+ await page.locator("//div[contains(text(),'Deaths this year')]/following-sibling::span").innerText());
                await console.log( "Population Growth this year for iteration "+i+" is : "+ await page.locator("//div[contains(text(),'Population Growth this year')]/following-sibling::span").innerText());
                i++;
            }
        });

    });