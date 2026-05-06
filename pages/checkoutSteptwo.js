export class CheckoutStepTwo {
  constructor(page) {
    this.page = page;
    // Locators
    this.cartItems = '.cart_item';
    this.itemTotal = '.summary_subtotal_label';
    this.tax = '.summary_tax_label';
    this.total = '.summary_total_label';
    this.finishButton = '#finish';
    this.cancelButton = '#cancel';
  }

  
    async goto() {
        await this.page.goto('https://www.saucedemo.com/checkout-step-two.html');
    }

  async getCartItemCount() {
    return await this.page.$$(this.cartItems).length;
  }

  async getTotalAmount() {
    const totalText = await this.page.textContent(this.total);
    return parseFloat(totalText.replace('Total: $', ''));
  }

  async clickFinish() {
    await this.page.click(this.finishButton);

  }

  async clickCancel() {
    await this.page.click(this.cancelButton);
  }
}

module.exports = { CheckoutStepTwo };