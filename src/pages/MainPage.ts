import {Constants} from "./Constants";
import {BasePage} from "../Pages/BasePage";
import { LoginLocators } from "./Locators";
import {until, WebElement} from "selenium-webdriver";
import { Builder, Capabilities, WebDriver ,By,WebElementCondition} from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import { Utils } from "./utils";


export class MainPage extends BasePage{

    async login(email: string, password: string) {
        await this.sendMeaning(email, LoginLocators.LOGIN_EMAIL_FIELD)
        await Utils.delay(Constants.check)
        await this.sendMeaning(password, LoginLocators.LOGIN_PASSWORD_FIELD)
        await Utils.delay(Constants.check)
    }   

}