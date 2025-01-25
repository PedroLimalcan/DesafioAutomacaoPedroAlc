const { expect } = require('@playwright/test')

class LoginPage {

    constructor(page){
        this.page = page;
        this.edtCreateEmail = page.locator('#email_create')
        this.btnCreateEmail = page.getByRole('button', { name: ' Create an account' });
        this.edtPassword = page.getByLabel('Password')
        this.edtUser = page.locator('#email');
        this.btnSignIn = page.getByRole('button', { name: ' Sign in' })
        this.signOut = page.getByTitle('Log me out');
        this.forgotYourPassword = page.locator('p').filter({ hasText: 'Forgot your password?' });
        this.msgAuthenticationFailed = page.getByText('Authentication failed.')
        this.linkSignIn = page.getByRole('link', { name: 'Sign in' });
    }

    async doLogin(user, password){
        await this.edtUser.fill(user);
        await this.edtPassword.fill(password);
        await this.btnSignIn.click();
        
        
      
    }

    async forgotYourPassword(){
        await this.page.forgotYourPassword;
    }

    async edtCreateEmail(){
        await this.page.edtCreateEmail;
    }

    async btnCreateEmail(){
        await this.page.btnCreateEmail;
    }

    async edtPassword(){
        await this.page.edtPassword;
    }

    async edtUser(){
        await this.page.edtUser;
    }

    async btnSignIn(){
        await this.page.btnSignIn;
    }

    async signOut(){
        await this.page.signOut;
    }

    async forgotYourPassword(){
        await this.page.forgotYourPassword;
    }

    async msgAuthenticationFailed(){
        await this.page.msgAuthenticationFailed;
    }
}
module.exports = { LoginPage };