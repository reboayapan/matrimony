import { Component, OnInit } from '@angular/core';
import {  FormGroup,  FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      gender:new FormControl(),
      profilefor:new FormControl(),
      dob:new FormControl(),
      number: new FormControl(),
      password: new FormControl(),
      
      cpassword: new FormControl()
    })
  }

  onSubmit(){
    console.log(this.registerForm.value);
  }

}
