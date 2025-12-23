class ProductPage {

    producttext = () => cy.contains('Products');
    categorySidebar = () => cy.get('.left-sidebar');
    categoryWomen = () => cy.get('a[href="#Women"]');
    dressCategory = () => cy.xpath('//a[contains(text(),"Dress")]');
    firstproduct = () => cy.get('.productinfo > p');



    verifyProductsPage(){
        this.producttext().click();
    }

    verifyCategorySidebar(){
        this.categorySidebar().should('be.visible');
        this.categoryWomen().click();
        this.dressCategory().contains('Dress').click();
    }

    // verifydressCategory(){
    //     this.dressCategory().click();
    // }

    verifyFirstProduct(){
        this.firstproduct().should('contain.text', 'Sleeveless Dress');
    }

}

export default ProductPage;