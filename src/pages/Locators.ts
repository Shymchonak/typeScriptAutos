import  webdriver  from "selenium-webdriver";
import {By} from "selenium-webdriver";

export class LoginLocators {

    static readonly LOGIN_EMAIL_FIELD: By = By.xpath("//input[@placeholder=\"Email address\"]")
    static readonly LOGIN_PASSWORD_FIELD: By = By.xpath("//input[@placeholder=\"Password\"]")
    static readonly LOGIN_BTN_SUBMIT:By = By.xpath("//div[@class=\"button\"]//button")
    static readonly LOGIN_BTN_LOGOUT: By = By.xpath("//div[@class=\"footer\"]//div[@class=\"button\"]")
    static readonly LOGIN_BTN_ERROR:By = By.xpath("//div[@class=\"Toastify__toast-body\"]")
    
}

export class CommunityLocators {
    static readonly COMMUNITY_BTN: By = By.xpath("//button[text()=\"Communities\"]/../.")
    static readonly COMMUNITY_BTN_ADD: By = By.xpath("//div[@class=\"add\"]//i[@class=\"material-icons\"]")
    static readonly COMMUNITY_NAME_ENTER: By = By.xpath("//input[@placeholder=\"Enter a name for the community\"]")
    static readonly COMMYNITY_NAME_ENTER_CHECK: By= By.name("name")
    static readonly COMMUNITY_PRIVACY:By = By.xpath("//p[text()=\"Privacy\"]//..//input[@class=\"rw-dropdownlist-search\"]")
    static readonly COMMUNITY_PRIVACY_SELECT:By = By.xpath("//div[text()=\"Public\"]")
    static readonly COMMUNITY_STATUS:By = By.xpath("//p[text()=\"Status\"]//..//input[@class=\"rw-dropdownlist-search\"]")
    static readonly COMMYNITY_STATUS_SELECT:By = By.xpath("//div[text()=\"Inactive\"]")
    static readonly COMMUNITY_BTN_CREATE:By = By.xpath("//div[@class=\"button cyan\"]")
    static readonly COMMUNITY_BTN_SELECT:By =By.xpath("//div[@class=\"item active\"]//div[text()=\"JavaScript3 Community\"]")
    static readonly COMMUNITY_BTN_MANAGE:By =By.xpath("//div[@class=\"button\"]//button[text()=\"Manage\"]")
}