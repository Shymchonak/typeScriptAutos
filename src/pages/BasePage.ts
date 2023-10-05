import {until, WebElement} from "selenium-webdriver";
import { Builder, Capabilities, WebDriver ,By,WebElementCondition} from 'selenium-webdriver';
import {Constants} from "./Constants";
import chrome from 'selenium-webdriver/chrome';
import {Utils} from './utils'


const options = new chrome.Options();
options.addArguments('--disable-notifications');
options.addArguments('start-maximized');
options.addArguments('--log-level=DEBUG');
options.addArguments('--disable-gpu');
options.addArguments('--no-sandbox');
options.addArguments('--headless');
options.addArguments('--disable-dev-shm-usage');



export class BasePage{

    public driver: WebDriver;

    constructor() {
     this.driver = new Builder().withCapabilities(Capabilities.chrome()).build();
    }
    //public driver = new Builder().forBrowser('chrome').build();
     //public driver = new Builder().withCapabilities(Capabilities.chrome()).build(); 

     async createDriver(){
        this.driver = new Builder().withCapabilities(Capabilities.chrome()).build();
            return this.driver
     }

    async openPage (url:string){
        Utils.delay(Constants.delay)
        await this.driver.get(url)
    }

    async findThisElement(locator:any){ 
        Utils.delay(Constants.delay)
        return this.driver.wait(until.elementLocated(locator),5000);
    }

    async clickElement(locator:any) { 
        Utils.delay(Constants.delay)
        await this.driver.wait(until.elementLocated(locator)).click();
    }

    async sendMeaning(meaning:string,locator:any) {
        Utils.delay(Constants.delay)
        let box = this.driver.wait(until.elementLocated(locator), 5000);
        await box.sendKeys(meaning)
    }

    async validationField(locator:any,meaning:string) {
        await Utils.delay(Constants.delay)
        let inputField = await this.findThisElement(locator)
            const givenValue = await inputField.getAttribute('value')
            if (givenValue !== meaning) {
                throw new Error('Field value does not match expected value');
        }
    }  


}
