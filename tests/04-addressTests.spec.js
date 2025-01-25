const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/Login");
const { MyAdressesPage } = require("../pages/MyAdressesPage");
const { MyAccountPage } = require("../pages/MyAccount");
const datasetUser = JSON.parse(JSON.stringify(require("../utils/user.json")));




test.describe('004 Address Tests', () => {
    test('004_001 @AddNewAddress Cadastrar um novo endereço', async ({ page }) => {
        const login = new LoginPage(page);
        const myAddresses = new MyAdressesPage(page);
        const myAccount = new MyAccountPage(page);
        const user = datasetUser.userEmail;
        const password = datasetUser.userPassword;
        const dataRun = Date.now();
        const hoje = new Date(dataRun).toISOString();
        await page.goto("http://www.automationpractice.pl/index.php");

        await Promise.all([
            login.linkSignIn.click(),
            login.doLogin(datasetUser.userEmail, datasetUser.userPassword),
            
            page.waitForURL('/index.php?controller=my-account')
        
          ]);
        if(await myAccount.addMyFirstAddress.isVisible())
            await myAccount.addMyFirstAddress.click()
        else {
            await myAccount.myAdresses.click();
            await myAddresses.btnAddANewAdress.click();
        };
        await myAddresses.edtAdress.fill("1428 Elm Street");
        await myAddresses.edtCity.fill("SpringWood");
        await Promise.all([
            await myAddresses.selectState.click(),
            await myAddresses.selectState.selectOption('35')
        ])
        await myAddresses.edtZipCode.fill("43230");
        await myAddresses.edtHomePhone.fill("5550123");
        await myAddresses.edtMobilePhone.fill("07700900461");
        await myAddresses.edtAddressTitle.fill("Address" +hoje);
        await myAddresses.btnSaveAddress.click();
        await expect(myAddresses.btnAddANewAdress).toBeVisible();
    });
    
});
