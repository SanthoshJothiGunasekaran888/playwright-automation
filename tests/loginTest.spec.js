// tests/loginTest.spec.js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js';
import { HomePage } from '../pages/homePage.js';

test('Test 1: Successful login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    
    // Valid credentials for SauceDemo
    await loginPage.login('problem_user', 'secret_sauce');
    
    // Verify successful login (redirects to inventory page)
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

//added smoke tags
test('Test 2: Show error with invalid credentials @smoke', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    
    await loginPage.login('wrong_user', 'wrong_password');
    
    // Verify error message appears
    const errorMsg = await loginPage.getErrorMessage();
    expect(errorMsg).toContain('Username and password do not match any user in this service');
});

// Go to Saucedemo Website
test('Test 3: simple goto test', async({page})=> {

    await page.goto('https://www.saucedemo.com/')

});

test.skip('Test 4: Successful logout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    await loginPage.goto();
    await loginPage.login('problem_user', 'secret_sauce');

     // Verify successful login (redirects to inventory page)
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    
    // Click logout button
    await homePage.logout();
    
    // Verify redirect to login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');
});