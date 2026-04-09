import { Given, When, Then } from '@cucumber/cucumber';
import { page } from '../utils/hooks';

import { LoginPage } from '../pages/loginPage';
import { ProductsPage } from '../pages/productsPage';
import { CartPage } from '../pages/cartPage';

let loginPage: LoginPage;
let productsPage: ProductsPage;
let cartPage: CartPage;

Given('I launch the application', async function() {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);

    await loginPage.navigate();
});
When('I login with username {string} and password {string}', async function(username, password) {
    await loginPage.login(username, password);
});
Then('I should be logged in successfully', async function() {
    await productsPage.verifyLoginSucces();
});
When('I add product {string} to cart', async function(product) {
    await productsPage.addProducts(product);
});
Then('cart count should be {string}', async function (items) {
    await productsPage.verifyCartCount(items);
});
When('I open the cart', async function() {
    await productsPage.openCart();
});
Then('I should see {int} items in cart', async function(count) {
    await cartPage.verifyItemCount(count);
});
When('I remove product {string}', async function(product) {
    await cartPage.removeProduct(product);
});