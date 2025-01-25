const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/Login");
const { CreateAccountPage } = require("../pages/CreateAccount");
const datasetUser = JSON.parse(JSON.stringify(require("../utils/user.json")));

test.beforeEach(async ({ page }) => {
    await page.goto("http://www.automationpractice.pl/");
  });

  test.describe('002 Insert User ', () => {
    test('002_001 @InsertNewUser Cadastrar usuário', async ({ page }) => {
        const login = new LoginPage(page);
        const createAccount = new CreateAccountPage(page);
        const newEmail = datasetUser.userEmail;
        await login.linkSignIn.click();
        await login.edtCreateEmail.fill(newEmail);
        await login.btnCreateEmail.click();
        await createAccount.rdbMr.click();
        await createAccount.edtFirstName.fill("John");
        await createAccount.edtLastName.fill ("Doe");
        await createAccount.edtPassword.fill(datasetUser.userPassword);
        await Promise.all([
            await createAccount.selectBirthDay.click(),
            await createAccount.selectBirthDay.selectOption('8')
          ]);
          await Promise.all ([
            await createAccount.selectBirthYear.click(),
            await createAccount.selectBirthYear.selectOption('1994')

          ]);
          await Promise.all([
            await createAccount.selectBirthMonth.click(),
            await createAccount.selectBirthMonth.selectOption('12')
          ]);
        await createAccount.btnRegister.click();
        await expect(createAccount.msgAccountCreated).toBeVisible();
        await login.signOut.click();

    });
    
    
  }
)

  
