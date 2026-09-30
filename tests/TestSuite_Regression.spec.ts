import {test} from '@playwright/test'
import { general } from '../lib/General';
test.describe('Regression Test suite',() => {

    test('Login and logout', async ({ page}) =>{
        //test steps
        let obj= new general (page);
        await obj.openapplication();
        await obj.login();
        await obj.logout();
    });

test('Add employee', async ({ page}) =>{
    //test steps
    let obj= new general (page);
    await obj.openapplication();
    await obj.login();
    await obj.addnewEmployee();
    await obj.waitStmt();
    await obj.logout();
    await obj.waitStmt();
    


});

});