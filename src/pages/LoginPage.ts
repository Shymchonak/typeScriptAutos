import { BasePage } from "./BasePage";
import { LoginLocators } from "./Locators";



export class LoginPage extends BasePage {

    async login(login:string, password:string) {
       
        await this.sendMeaning(login,LoginLocators.LOGIN_EMAIL_FIELD)
        
        await this.sendMeaning(password,LoginLocators.LOGIN_PASSWORD_FIELD)
        
        await this.clickElement(LoginLocators.LOGIN_BTN_SUBMIT);
    }

    async checkLogout(){
        await this.findThisElement(LoginLocators.LOGIN_BTN_LOGOUT);
    }

    async checkInvalidInput(){
        await this.findThisElement(LoginLocators.LOGIN_BTN_ERROR)
    }
}


