class SignUpPage {

    signup = () => cy.contains('Signup / Login');
    usersignup = () => cy.get('h2').contains('New User Signup!');
    name = () => cy.get('input[data-qa="signup-name"]');
    email = () => cy.get('input[data-qa="signup-email"]');
    signupbutton = () => cy.get('button[data-qa="signup-button"]');
    usersignup = () => cy.get('h2').contains('New User Signup!');
    radioButton = () => cy.get('input#id_gender1');
    password = () => cy.get('input[data-qa="password"]');
    dateOfBirth = () => cy.get('select[data-qa="days"]');
    monthOfBirth = () => cy.get('select[data-qa="months"]');
    yearOfBirth = () => cy.get('select[data-qa="years"]');
    firstName = () => cy.get('input[data-qa="first_name"]');
    lastName = () => cy.get('input[data-qa="last_name"]')
    company = () => cy.get('input[data-qa="company"]');
    address1 = () => cy.get('input[data-qa="address"]')
    address2 = () => cy.get('input[data-qa="address2"]');
    country = () => cy.get('select[data-qa="country"]');
    state = () => cy.get('input[name="state"]');
    city = () => cy.get('input[name="city"]');
    zipcode = () => cy.get('input[data-qa="zipcode"]');
    mobileNumber = () => cy.get('input[name="mobile_number"]');
    clickCreateAccount = () => cy.get('button[data-qa="create-account"]');
    continueButton = () => cy.get('a[data-qa="continue-button"]');



    ButtonSign(){
        this.signup().click();
    }

    usersignup(){
        return this.usersignup();
    }

    fillupform(name, email){
        this.name().type(name);
        this.email().type(email);
    }

    SignUpbutton(){
        this.signupbutton().click();
    }

    selectGender(){
        this.radioButton().check();
    }

    enterPassword(password){
        this.password().type(password);
    }

    enterDateOfBirth(day, month, year){
        this.dateOfBirth().select(day);
        this.monthOfBirth().select(month);
        this.yearOfBirth().select(year);    
    }

    enterAddressDetails(firstName, lastName, company, address1, address2, country, state, city, zipcode, mobileNumber){
        this.firstName().type(firstName);
        this.lastName().type(lastName);
        this.company().type(company);
        this.address1().type(address1);
        this.address2().type(address2);
        this.country().select(country);
        this.state().type(state);
        this.city().type(city);
        this.zipcode().type(zipcode);
        this.mobileNumber().type(mobileNumber);
    }

    clickCreateAccountButton(){
        this.clickCreateAccount().click();
    }

    clickContinueButton(){
        this.continueButton().click();
    }

}

export default SignUpPage;
