import {until, WebElement} from "selenium-webdriver";
import { Builder, Capabilities, WebDriver ,By,WebElementCondition} from 'selenium-webdriver';
import {Constants} from "./Constants";
import chrome from 'selenium-webdriver/chrome';
import {Utils} from './utils'

export class BasePage{

    public driver = new Builder().forBrowser('chrome').build();

    async openPage (url:string){
        Utils.delay(Constants.delay)
        await this.driver.get(url)
    }

    async findThisElement(locator:By){ 
        Utils.delay(Constants.delay)
        return this.driver.wait(until.elementLocated(locator),5000);
    }

    async clickElement(locator:By) { 
        Utils.delay(Constants.delay)
        await this.driver.wait(until.elementLocated(locator)).click();
    }

    async sendMeaning(meaning:string,locator:any) {
        Utils.delay(Constants.delay)
        let box = this.driver.wait(until.elementLocated(locator), 5000);
        await box.sendKeys(meaning)
    }



}
