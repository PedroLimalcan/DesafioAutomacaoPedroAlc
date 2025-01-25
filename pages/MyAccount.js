class MyAccountPage{
    constructor(page){
        this.page = page;
        this.addMyFirstAddress = page.getByRole('link', { name: ' Add my first address' });
        this.orderHistoryAndDetails = page.getByRole('link', { name: ' Order history and details' });
        this.credits = page.getByRole('link', { name: ' My credit slips' });
        this.myAdresses = page.getByRole('link', { name: ' My addresses' });
        this.myPersonalInformation = page.getByRole('link', { name: ' My personal information' });
        



    }


}module.exports = {MyAccountPage}