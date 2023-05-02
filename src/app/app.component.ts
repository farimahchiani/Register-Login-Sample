import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { matchpassword } from './matchpassword.validator';
import { validpassword } from './password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  classApplied = false;

  toggleClass() {
    this.classApplied = !this.classApplied;
  }
  title = 'به احراز هویت متمرکز تابان خوش آمدید';

  registerForm : FormGroup; 
  loginForm : FormGroup; 

  constructor(){

    this.registerForm = new FormGroup({
      Mobile : new FormControl(null,[Validators.required , Validators.maxLength(11) , Validators.minLength(11)]),
      Password : new FormControl(null,[Validators.required]),
      ConfirmPassword : new FormControl(null)
    },
    {
      validators:matchpassword
    })

    this.loginForm = new FormGroup({
      Mobile : new FormControl(null,[Validators.required , Validators.maxLength(11) , Validators.minLength(11)]),
      PasswordLogin : new FormControl(null,[Validators.required])
    },
    {
      validators:validpassword
    })
  }
  login(){
    console.log(this.loginForm.value);
  }
  register(){
    console.log(this.registerForm.value);
  }
  ngOnInit(): void {}
  
}