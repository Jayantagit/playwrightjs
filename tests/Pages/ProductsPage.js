export class ProductsPage {
    constructor(page) {
        this.page = page;
        this.productsList = page.locator(".inventory_item_label a");


    }

    async selectProduct(productName) {
        const prodCount = await this.productsList.count();
        for (let i = 0; i < prodCount; i++) {
            let prodName = await this.productsList.nth(i).textContent();
            if (prodName === productName) {
               await  this.productsList.nth(i).click();
                break;

            }
        }
        await this.page.pause()

    }
}