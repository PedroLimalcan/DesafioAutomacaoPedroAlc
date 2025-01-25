const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/Login");
const datasetUser = JSON.parse(JSON.stringify(require("../utils/user.json")));

test.beforeEach(async ({ page }) => {
    await page.goto("http://www.automationpractice.pl/");
  });

test.describe('003 Login Tests', () => {
    test('003_001 @ValidLogin Realizar login com credenciais válidas', async ({ page }) => {
      const login = new LoginPage(page);
      const user = datasetUser.userEmail;
      const password = datasetUser.userPassword;
      login.linkSignIn.click();

      await Promise.all([
        login.doLogin(user, password),
        
        page.waitForURL('/index.php?controller=authentication&back=my-account'),
        await expect(login.signOut).toBeVisible()
      ]);
    
});
test('003_002 @InvalidLogin Realizar login com credenciais inválidas', async ({ page }) => {
    const login = new LoginPage(page);
    await Promise.all([
      login.linkSignIn.click(),
      login.doLogin(datasetUser.invalidUser, datasetUser.invalidUser),
      
      page.waitForURL('/index.php?controller=authentication&back=my-account'),
      await expect(login.msgAuthenticationFailed).toBeVisible()
    ]);

});



});
