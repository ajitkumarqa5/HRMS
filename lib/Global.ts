//To provide Test DAta & objects / elemetns related to whole application

import { Page } from '@playwright/test';
export class global {
    constructor (public page : Page ) {

    }
//************************Test Data************************* */
public url : string = "https://sureshitacademy.in/hrms/login.php";
public username : string ="sureshit";
public password : string ="sureshit";
public emplastname : string = "kumar";
public empfirstname : string = "Ajit";
//************************objects/elements************************* */
public textbox_loginname : string = "//input[@name='txtUserName']";
public textbox_password : string = "//input[@name='txtPassword']";
public button_login : string = "//input[@name='Submit']";
public link_logout : string = "//a[text()='Logout']";
//add 
public empinfo_frame : string ="//iframe[@id='rightMenu']";
public button_add : string ="//input[@value='Add']";
public textbox_lastname : string ="//input[@id='txtEmpLastName']";
public textbox_firstname : string ="//input[@id='txtEmpFirstName']";
public button_save : string ="//input[@value='Save']";


}