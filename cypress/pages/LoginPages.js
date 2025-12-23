class Loginpage {

    login = () => cy.contains('Signup / Login');
    loginEmail = () => cy.get('input[data-qa="login-email"]');
    loginPassword = () => cy.get('input[data-qa="login-password"]');
    loginButton = () => cy.get('button[data-qa="login-button"]');

    clickLogin(){
        this.login().click();
    }

    enterLoginCredentials(email, password){
        this.loginEmail().type(email);
        this.loginPassword().type(password);
    }

    clickLoginButton(){
        this.loginButton().click();
    }

}

export default Loginpage;