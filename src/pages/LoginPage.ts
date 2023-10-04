import { BasePage } from "./BasePage";
import { LoginLocators } from "./Locators";


export class LoginPage extends BasePage {

    async login(login:string, password:string) {
        let EmailBox = await this.findThisElement(LoginLocators.LOGIN_EMAIL_FIELD);
        await this.sendMeaning(login,EmailBox)
        let PasswordBox = await this.findThisElement(LoginLocators.LOGIN_PASSWORD_FIELD)
        await this.sendMeaning(password,PasswordBox)
        await this.clickElement(LoginLocators.LOGIN_BTN_SUBMIT);
    }

    async checkLogout(){
        await this.findThisElement(LoginLocators.LOGIN_BTN_LOGOUT);
    }

    //нет ЕРрора
}


