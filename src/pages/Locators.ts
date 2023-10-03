import  webdriver  from "selenium-webdriver";

export class LoginLocators {
    LOGIN_EMAIL_FIELD = webdriver.By.xpath("//input[@placeholder=\"Email address\"]")
    LOGIN_PASSWORD_FIELD = webdriver.By.xpath("//input[@placeholder=\"Password\"]")
    LOGIN_BTN_SUBMIT = webdriver.By.xpath("//div[@class=\"button\"]//button")
    LOGIN_BTN_LOGOUT = webdriver.By.xpath("//div[@class=\"footer\"]//div[@class=\"button\"]")
    LOGIN_BTN_ERROR = webdriver.By.xpath("//div[@class=\"Toastify__toast-body\"]")
}