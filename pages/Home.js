class HomePage{

    constructor(page){
        this.page = page;
        this.btnLogout = page.locator('nav[role="navigation"] span:has-text("Logout")');
        this.confirmarLogout = page.locator("//div['sweet-alert showSweetAlert visible']//button[@class='confirm']");
        this.version = page.locator("//b[contains(text(),'Version')]");
    }

    async version(){
        await this.page.version;
    }

    async btnLogout(){
        await this.page.btnLogout;
    }

    async confirmarLogout(){
        await this.page.confirmarLogout;
    }

    async logout(){

        const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

        await this.btnLogout.click();
        await delay(1000);
        await this.confirmarLogout.click();
    }
}
module.exports = {HomePage};