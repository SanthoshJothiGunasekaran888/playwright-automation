// tests/loginTest.spec.js
import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage.js';

test('Test 1: Successful login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    
    // Valid credentials for SauceDemo
    await loginPage.login('standard_user', 'secret_sauce');
    
    // Verify successful login (redirects to inventory page)
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Show error with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    
    await loginPage.login('wrong_user', 'wrong_password');
    
    // Verify error message appears
    const errorMsg = await loginPage.getErrorMessage();
    expect(errorMsg).toContain('Username and password do not match');
});

// Goto Saucedemo Site
test('3: simple goto', async({page})=> {

    await page.goto('https://www.saucedemo.com/')

});