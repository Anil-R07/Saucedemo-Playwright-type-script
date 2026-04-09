import { Page } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page){}

    async navigate() {
        await this.page.goto("https://www.saucedemo.com/");
    }
    async login(username: string, password: string) {
        await this.page.fill('#user-name', username);
        await this.page.fill('#password', password);
        await this.page.click('#login-button');
    }
}

/* Notes:
1. OOP – Class & Object
    export class LoginPage   --- Creating a class (POM)

2. import { Page } from '@playwright/test';
    Page is a type interface from playwright 
    Ensures - Intellisense, Compile-time error checking 

3. Constructor 
    constructor(private page: Page){}  
    const loginPage = new LoginPage(page);-- Object creation on any step-definition file
    page is passed and stored inside a class 

   Why Private keyword ?
   This is a Encapsulation concept 
        page can not be accesses out side the class

4. constructor(private page: Page){} -- This is a shortform of 
    private page: Page;
    constructor(page: Page){
        this.page = page;    
    }

5. this keyword
    this.page -- Refers to current object instance
    Ex:
    const loginPage1 = new LoginPage(page1);  -- this.page inside loginPage1 is page1
    const loginPage2 = new LoginPage(page2);  -- this.page inside loginPage2 is page2

    page.goto() -- Error page not defined in method scope
    this.page.goto() -- Refers to class properly
*/
