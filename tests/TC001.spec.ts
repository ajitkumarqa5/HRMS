//--To provide actual automation test scripts / steps 
import {test } from "@playwright/test";
import { general } from "../lib/General";
test('@Smoke-Login and logout', async ({ page}) =>{
    //test steps
    let obj= new general (page);
    await obj.openapplication();
    await obj.login();
    await obj.logout();


}
);