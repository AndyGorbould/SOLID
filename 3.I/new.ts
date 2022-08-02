interface PasswordAuth {            // DietInterface || InterfaceLite
    checkPassword(password: string) : boolean;
    resetPassword(prompt : string) : string;
}

interface GoogleAuth {
    checkGoogleLogin(token : string) : boolean;
    setGoogleToken(token : string) : string;
}

interface FBAuth {
    getFacebookLogin(token : string) : boolean;
    setFacebookToken(token : string) : string;
}

class User implements PasswordAuth, GoogleAuth, FBAuth {
    private _password : string = 'user';
    private _googleToken : string = 'secret_token_google';
    private _facebookToken : string = 'secret_token_fb';

    checkPassword(password: string) : boolean {
        return (password === this._password);
    }

    resetPassword() : string {
        this._password = prompt('What is your new password?');
        return this._password;
    }

    checkGoogleLogin(token: string) {
        // return "this will not work";
        return (token === this._googleToken);
    }

    setGoogleToken(token : string) {
        this._googleToken = token;
    }

    getFacebookLogin(token : string) : boolean {
        return (token === this._facebookToken);
    }

    setFacebookToken(token : string) : void {
        this._facebookToken = token;
    }

}

//admin cannot use google or facebook token
class Admin implements PasswordAuth {
    private _password : string = 'admin';

    checkPassword(password: string): boolean {
        return (password === this._password);
    }

    resetPassword() {
        this._password = prompt('What is your new password?');
    }
}

// class GoogleBot implements GoogleAuth {}

const passwordElement = <HTMLInputElement>document.querySelector('#password');
const typePasswordElement = <HTMLInputElement>document.querySelector('#typePassword');
const typeGoogleElement = <HTMLInputElement>document.querySelector('#typeGoogle');
const typeFacebookElement = <HTMLInputElement>document.querySelector('#typeFacebook');
const loginAsAdminElement = <HTMLInputElement>document.querySelector('#loginAsAdmin');
const resetPasswordElement = <HTMLAnchorElement>document.querySelector('#resetPassword');

let guest = new User; /// this needs fixed for future errors
let admin = new Admin;

document.querySelector('#login-form').addEventListener('submit', (event) => {
    event.preventDefault();

    let user = loginAsAdminElement.checked ? admin : guest;    /// remember me

    if(!loginAsAdminElement.checked) {              // errors incoming (needed set to User)
        User.setGoogleToken('secret_token_google');
        User.setFacebookToken('secret_token_fb');
    }

    let auth = false;
    switch(true) {
        case typePasswordElement.checked:
            auth = user.checkPassword(passwordElement.value);
            break;
        case typeGoogleElement.checked:
            auth = user.checkGoogleLogin('secret_token_google');
            break;
        case typeFacebookElement.checked:
            debugger;
            auth = user.getFacebookLogin('secret_token_fb');
            break;
    }
    // if password (auth) is true > success, else > fail
    if(auth) {
        alert('login success');
    } else {
        alert('login failed');
    }
});

resetPasswordElement.addEventListener('click', (event) => {
   event.preventDefault();

   let user = loginAsAdminElement.checked ? admin : guest;
   user.resetPassword();
});