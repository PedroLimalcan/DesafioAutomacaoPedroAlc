class MyAdressesPage {
    constructor(page){
        this.btnAddANewAdress = page.getByRole('link', { name: 'Add a new address ' });
        this.edtAdress = page.locator('//*[@id="address1"]');
        this.edtCity = page.getByLabel('City *');
        this.selectState = page.locator('#id_state');
        this.edtZipCode = page.getByLabel('Zip/Postal Code *');
        this.edtHomePhone = page.getByLabel('Home phone **')
        this.edtMobilePhone = page.getByLabel('Mobile phone **');
        this.edtAdditionalInformation = page.getByLabel('Additional information');
        this.edtAddressTitle = page.getByLabel('Please assign an address');
        this.btnSaveAddress = page.getByRole('button', { name: 'Save ' });
        this.backToAddressList = page.getByRole('link', { name: ' Back to your addresses' });
        this.btnDeleteFirstAddress = page.getByRole('link', { name: 'Delete ' }).first();

    }
    async edtAdress(){
        await this.page.edtAdress;
    }


}module.exports = {MyAdressesPage}