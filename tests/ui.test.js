const { expect, test } = require('@playwright/test');
const baseUrl = "http://localhost:3000";

test("Verify all Books is visible", async ({ page }) => {
    await page.goto(baseUrl);
    await page.waitForSelector("nav.navbar");
    const allBooksLink = await page.$('a[href="/catalog"]');
    const isAllBooksLinkVisible =  await allBooksLink.isVisible()
    expect(isAllBooksLinkVisible).toBe(true);
});


test("Verify Login Button is visible", async ({ page }) => {
    await page.goto(baseUrl);
    await page.waitForSelector("nav.navbar");
    const loginButton = await page.$('a[href="/login"]');
    const isLoginButtonVisible =  await loginButton.isVisible()
    expect(isLoginButtonVisible).toBe(true);
});

test("Verify Register Button is visible", async ({ page }) => {
    await page.goto(baseUrl);
    await page.waitForSelector("nav.navbar");
    const registerButton = await page.$('a[href="/register"]');
    const isRegisterButtonVisible =  await registerButton.isVisible()
    expect(isRegisterButtonVisible).toBe(true);
});

test.only("Verify all Books is visible after user is logged in", async ({ page }) => {
    await page.goto(baseUrl);
    await page.waitForSelector("nav.navbar");
    await page.click('a[href="/login"]');
    await page.fill('input#email', "peter@abv.bg");
    await page.fill('input#password', "123456");
    await page.click('#login-form > fieldset > input');

    const logoutButton = await page.$('#logoutBtn');
    const isLogoutButtonVisible =  await logoutButton.isVisible()
    expect(isLogoutButtonVisible).toBe(true);

    const allBooksLink = await page.$('a[href="/catalog"]');
    const isAllBooksLinkVisible =  await allBooksLink.isVisible()
    expect(isAllBooksLinkVisible).toBe(true);
});