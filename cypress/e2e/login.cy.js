import Loginpage from "../pages/LoginPages";

describe('Login Functionality', () => {
    const loginpage = new Loginpage();

    beforeEach(() => {
        cy.visit('https://automationexercise.com/');
    });

    it('login with valid credentials', () => {
        cy.fixture('user').then((user) => {
            loginpage.clickLogin();
            loginpage.enterLoginCredentials(user.email, user.password);
            loginpage.clickLoginButton();
            cy.contains(`Logged in as ${user.username}`).should('be.visible');
        });
    });

    it('login with invalid credentials', () => {
        loginpage.clickLogin();
        loginpage.enterLoginCredentials('jimin11@gmail.com', 'password');
        loginpage.clickLoginButton();
        cy.contains('Your email or password is incorrect!').should('be.visible');
    });

});