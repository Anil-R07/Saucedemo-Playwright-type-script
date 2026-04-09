import { Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';

export let page: Page;
let browser: Browser;

Before(async function() {
    browser = await chromium.launch({
        headless: false,
        slowMo: 300 });
    page = await browser.newPage();
});

After(async function() {
    await browser.close();
});