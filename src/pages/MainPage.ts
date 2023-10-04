import {Constants} from "./Constants";
import {BasePage} from "../Pages/BasePage";
import { LoginLocators, CummunityLocators } from "./Locators";
import {until, WebElement} from "selenium-webdriver";
import { Builder, Capabilities, WebDriver ,By,WebElementCondition} from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import { Utils } from "./utils";
import {LoginPage} from "./LoginPage"
import { CommandExecutor } from "selenium-webdriver/safari";


export class MainPage extends LoginPage{

   async addCommunity() {
    await this.clickElement(CummunityLocators.COMMUNITY_BTN)
   }

}