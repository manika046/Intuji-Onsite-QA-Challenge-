import Logoutpage from "../pages/LogoutPages";
import Loginpage from "../pages/LoginPages";

describe('Logout functionality', () => {
    const logoutpage = new Logoutpage();

    it('login before logout', () => {
        cy.visit('https://automationexercise.com/');

        const loginpage = new Loginpage();
        cy.fixture('user').then((user) => {
            loginpage.clickLogin();
            loginpage.enterLoginCredentials(user.email, user.password);
            loginpage.clickLoginButton();
            cy.contains(`Logged in as ${user.username}`).should('be.visible');

            logoutpage.clickLogout();
            logoutpage.verifyLogout();
        });
    });
});