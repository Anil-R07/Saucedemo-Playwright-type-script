import { Given, When, Then } from '@cucumber/cucumber';
import { page } from '../utils/hooks';

import { ProductsPage } from '../pages/productsPage';
import { CartPage } from '../pages/cartPage';


let productsPage: ProductsPage;
let cartPage: CartPage;

When('I sort the product by {string} high to low', async function(value) {
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);
    await productsPage.sortProduct(value);
});
Then('user validate the sorting order', async function() {
    await productsPage.verifySort();
});
Then('user add the lowest priced product to cart and get the name of product', async function() {
    await productsPage.addLowestPriceProduct()
});
Then('I validate lowest price product in cart', async function () {
    const productName = productsPage.getSelectedProductName();
    await cartPage.lowestPricedProductValidation(productName);
});