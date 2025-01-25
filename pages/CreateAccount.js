class CreateAccountPage{

    constructor (page){
        this.page = page;
        this.rdbMr = page.getByLabel('Mr.');
        this.rdbMrs = page.getByLabel('Mrs.');
        this.edtFirstName = page.getByLabel('First name *');
        this.edtLastName = page.getByLabel('Last name *');
        this.edtEmail = page.getByLabel('Email *');
        this.edtPassword = page.getByLabel('Password *');
        this.selectBirthDay = page.locator("//*[@id='days']")
        this.selectBirthMonth = page.locator("//*[@id='months']")
        this.selectBirthYear = page.locator('#years');
        this.checkNewsletter = page.getByLabel('Sign up for our newsletter!');
        this.btnRegister = page.getByRole('button', { name: 'Register ' });
        this.msgAccountCreated = page.getByText('Your account has been created.');
    }
}module.exports = {CreateAccountPage}