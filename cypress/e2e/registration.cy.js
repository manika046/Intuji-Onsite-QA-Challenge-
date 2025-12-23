import SignUpPage from '../pages/SignupPages';

describe('User Registration', () => {
    const signuppage = new SignUpPage();

    it ('registera a new user successfully', () => {
        cy.visit('https://automationexercise.com/');

        const randomString = Math.random().toString(36).substring(2, 10);
        const randomEmail = `${randomString}@gmail.com`;
        const randomname = `${randomString}`;
        const randomPassword = `p@${randomString}`;

        signuppage.ButtonSign();
        signuppage.usersignup().should('be.visible');
        signuppage.fillupform(randomname, randomEmail);
        signuppage.SignUpbutton();

        signuppage.selectGender();
        signuppage.enterPassword(randomPassword);
        signuppage.enterDateOfBirth('10', 'May', '1990');
        signuppage.enterAddressDetails(
            randomname,
            'Lastname',
            'TestCompany',
            '123 Test St',
            'Apt 4',
            'Canada',
            'TestState',
            'TestCity',
            'A1B2C3',
            '1234567890'
        );

        signuppage.clickCreateAccountButton();
        cy.contains('Account Created!').should('be.visible');
        signuppage.clickContinueButton();
        cy.contains(`Logged in as ${randomname}`).should('be.visible');


    });
});