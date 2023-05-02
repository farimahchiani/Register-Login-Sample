import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


  export const validpassword : ValidatorFn = (control: AbstractControl):ValidationErrors|null =>{
    
     let passwordLogin = control.get('PasswordLogin');

      if(passwordLogin?.value == "" || passwordLogin?.value == null ){
        return { passworderror : true }
       }
    return null; 
   }