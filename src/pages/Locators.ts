import  webdriver  from "selenium-webdriver";
import {By} from "selenium-webdriver";

export class LoginLocators {

    static readonly LOGIN_EMAIL_FIELD: By = By.xpath("//input[@placeholder=\"Email address\"]")
    static readonly LOGIN_PASSWORD_FIELD: By = By.xpath("//input[@placeholder=\"Password\"]")
    static readonly LOGIN_BTN_SUBMIT:By = By.xpath("//div[@class=\"button\"]//button")
    static readonly LOGIN_BTN_LOGOUT: By = By.xpath("//div[@class=\"footer\"]//div[@class=\"button\"]")
    static readonly LOGIN_BTN_ERROR:By = By.xpath("//div[@class=\"Toastify__toast-body\"]")
    
}

export class CummunityLocators {
    static readonly COMMUNITY_BTN: By = By.xpath("//button[text()=\"Communities\"]/../.")
    static readonly COMMUNITY_BTN_ADD: By = By.xpath("//div[@class=\"add\"]//i[@class=\"material-icons\"]")
    static readonly COMMUNITY_NAME_ENTER: By = By.xpath("//input[@placeholder=\"Enter a name for the community\"]")
    static readonly COMMUNITY_PRIVACY:By = By.xpath("//p[text()=\"Privacy\"]//..//input[@class=\"rw-dropdownlist-search\"]")
}