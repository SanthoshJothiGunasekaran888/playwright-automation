// tests/homeTest.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { HomePage } = require('../pages/homePage');

test('Test case 1: Verify logo appears after login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    
    // Login first
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    
    // Check logo is visible (means logged in)
    const isLoggedIn = await homePage.isLoggedIn();
    expect(isLoggedIn).toBeTruthy();
    
    // Check logo text is correct
    const logoText = await homePage.getWelcomeText();
    expect(logoText).toBe('Swag Labs');
    
    // Alternative: use the verify method
    const isValidLogo = await homePage.verifyLogoText();
    expect(isValidLogo).toBeTruthy();
});

test('Test case 2: Add a product to cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await homePage.addToCart('Sauce Labs Backpack');
    await homePage.removeFromCart('Sauce Labs Backpack');

   // const cartCount = await homePage.getCartCount();
   // expect(cartCount).toBe(1);
});