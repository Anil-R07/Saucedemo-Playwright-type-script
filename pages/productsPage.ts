import { Page, expect } from '@playwright/test';

export class ProductsPage {
    private selectedProductName: string;
    constructor(private page: Page) {}

    async verifyLoginSucces() {
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await expect(this.page.locator('.title')).toHaveText('Products');
    }
    async addProducts(product: string) {
        await this.page
        .locator('.inventory_item')
        .filter({ hasText: product })
        .getByText('Add to cart')
        .click();
    }
    async verifyCartCount(count: string) {
        await expect(this.page.locator('.shopping_cart_badge')).toHaveText(count);
    }
    async openCart() {
        await this.page.locator('.shopping_cart_badge').click()
    }
    async sortProduct(value: string) {
        await this.page.waitForSelector('.product_sort_container')
        await this.page.locator('.product_sort_container').selectOption(value);
    }
    async addLowestPriceProduct(){
        const first_item = await this.page.locator('.inventory_item').first();
        this.selectedProductName = await first_item
        .locator('.inventory_item_name ')
        .innerText();
        await (first_item).getByText('Add to cart').click();
    }
    async verifySort() {
        const pricetext = await this.page.locator('.inventory_item_price').allTextContents()
        const prices = pricetext.map(p => parseFloat(p.replace('$', '')))
        const sortedPrices = [...prices].sort((a,b) => a - b);
        expect(prices).toEqual(sortedPrices);
    }
    getSelectedProductName() {
        return this.selectedProductName;
    }
}