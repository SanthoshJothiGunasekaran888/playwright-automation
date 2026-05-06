// tests/homeTest.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { HomePage } = require('../pages/homePage');
const { yourCart } = require('../pages/yourCart');
const { CheckoutStepOne } = require('../pages/checkoutStepone');  
const { CheckoutStepTwo } = require('../pages/checkoutSteptwo');  

test.skip('Test case 1: Verify logo appears after login', async ({ page }) => {
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

// adding a testcase to automate adding & removing a product from cart in swag labs page

test('Test case 2: Add a product to cart and navigate to checkout page', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const cartPage = new yourCart(page);
    const checkoutSteponePage = new CheckoutStepOne(page);  
    const checkoutSteptwoPage = new CheckoutStepTwo(page);  


    // login into swag labs site
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    // selecting a cart and navigating to cart page 
    await homePage.addToCartAndGoToCheckout('Sauce Labs Backpack');
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

    //selecting the checkout and proceeding to checkout page one 

    await cartPage.clickCheckout()  
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

    // Filling the card information in checkout page one 

    await checkoutSteponePage.fillCheckoutInfo('Ryan', 'Joe', '1234' );
    await expect(page.locator('[data-test="firstName"]')).toHaveValue('Ryan');
    await expect(page.locator('[data-test="lastName"]')).toHaveValue('Joe');
    await expect(page.locator('[data-test="postalCode"]')).toHaveValue('1234');

    // clicking continue to navigate checkout page two 

    await checkoutSteponePage.clickContinue()
     await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

    // finishing the payment 

    await checkoutSteptwoPage.clickFinish();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
    await expect(page.locator('.pony_express')).toBeVisible(); // The pony delivery image
    
    
});