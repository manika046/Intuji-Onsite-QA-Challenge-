class Logoutpage {

    logoutbutton = () => cy.contains('Logout');
    userlogin = () => cy.get('h2').contains('Login to your account');


    clickLogout(){
        this.logoutbutton().click();
    }

    verifyLogout(){
        this.userlogin().should('be.visible');
    }

}

export default Logoutpage;