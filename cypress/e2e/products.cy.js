import ProductPage from "../pages/ProductsPages";

describe('Products Browsing and Filtering ', () => {
    const productpage = new ProductPage();

    beforeEach(() => {
        cy.visit('https://automationexercise.com/');
    });

    it('browse products and apply filters', () => {
        productpage.verifyProductsPage();
        productpage.verifyCategorySidebar();
        // productpage.verifydressCategory();
        productpage.verifyFirstProduct();
    });

});