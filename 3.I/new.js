"use strict";
class User {
    constructor() {
        this._password = 'user';
    }
    checkPassword(password) {
        return (password === this._password);
    }
    resetPassword() {
        this._password = prompt('What is your new password?');
    }
    checkGoogleLogin(token) {
        // return "this will not work";
        return (token === this._googleToken);
    }
    setGoogleToken(token) {
        this._googleToken = token;
    }
    getFacebookLogin(token) {
        return (token === this._facebookToken);
    }
    setFacebookToken(token) {
        this._facebookToken = token;
    }
}
//admin cannot use google or facebook token
class Admin {
    constructor() {
        this._password = 'admin';
    }
    checkPassword(password) {
        return (password === this._password);
    }
    resetPassword() {
        this._password = prompt('What is your new password?');
    }
}
// class GoogleBot implements GoogleAuth {}
const passwordElement = document.querySelector('#password');
const typePasswordElement = document.querySelector('#typePassword');
const typeGoogleElement = document.querySelector('#typeGoogle');
const typeFacebookElement = document.querySelector('#typeFacebook');
const loginAsAdminElement = document.querySelector('#loginAsAdmin');
const resetPasswordElement = document.querySelector('#resetPassword');
let guest = new User(); /// this needs fixed for future errors
let admin = new Admin();
document.querySelector('#login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    let user = loginAsAdminElement.checked ? admin : guest; /// remember me
    if (!loginAsAdminElement.checked) { // errors incoming (needed set to User)
        user.setGoogleToken('secret_token_google');
        user.setFacebookToken('secret_token_fb');
    }
    let auth = false;
    switch (true) {
        case typePasswordElement.checked:
            auth = user.checkPassword(passwordElement.value);
            break;
        case typeGoogleElement.checked:
            auth = user.checkGoogleLogin('secret_token_google');
            break;
        case typeFacebookElement.checked:
            // debugger;     // GO AWAY!
            auth = user.getFacebookLogin('secret_token_fb');
            break;
    }
    // if password (auth) is true > success, else > fail
    if (auth) {
        alert('login success');
    }
    else {
        alert('login failed');
    }
});
resetPasswordElement.addEventListener('click', (event) => {
    event.preventDefault();
    let user = loginAsAdminElement.checked ? admin : guest;
    user.resetPassword();
});
