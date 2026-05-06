import { expect } from '@playwright/test';

export class CheckoutStepOne {
  constructor(page) {
    this.page = page;
    // Locators
    this.firstNameInput = '#first-name';
    this.lastNameInput = '#last-name';
    this.postalCodeInput = '#postal-code';
    this.continueButton = '#continue';
    this.cancelButton = '#cancel';
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/checkout-step-one.html');
  }

  async fillCheckoutInfo(firstName, lastName, postalCode) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.postalCodeInput, postalCode);
  }

  async clickContinue() {
    await this.page.click(this.continueButton);
    
  }

  async clickCancel() {
    await this.page.click(this.cancelButton);
  }
}

module.exports = { CheckoutStepOne };