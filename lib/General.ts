//*********To provide all re-usable functions / methods related to the whole application
import { global } from "./Global"
export class general extends global {

//***********User-define Resuable Functions / Methods */

async openapplication (){
    await this.page.goto(this.url);
    console.log("Application opened successful");

}

async login (){
    await this.page.locator(this.textbox_loginname).fill(this.username);
    await this.page.locator(this.textbox_password).fill(this.password);
    await this.page.locator(this.button_login).click();
    console.log("Login Completed");
}

async logout (){
    await this.page.locator(this.link_logout).click();
    console.log("Logout Completed");

}
async addnewEmployee (){
    const frame = this.page.frameLocator(this.empinfo_frame);
    await frame.locator(this.button_add).click();
    await frame.locator(this.textbox_lastname).fill(this.emplastname);
        await frame.locator(this.textbox_firstname).fill(this.empfirstname);
        await frame.locator(this.button_save).click();
        console.log("Employee added successfully")

}
async waitStmt (){
    await this.page.waitForTimeout(3000);
    console.log("waited for 3 seconds");
}

}