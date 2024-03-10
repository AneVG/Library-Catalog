const { expect, test } = require('@playwright/test');

test("Verify all Books is visible", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector("nav.navbar");
    const allBooksLink = await page.$('a[href="/catalog"]');
    const isAllBooksLinkVisible =  await allBooksLink.isVisible()
    expect(isAllBooksLinkVisible).toBe(true);
});


test("Verify login Button is visible", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector("nav.navbar");
    const loginButton = await page.$('a[href="/catalog"]');
    const isLoginButtonVisible =  await loginButton.isVisible()
    expect(isLoginButtonVisible).toBe(true);
});