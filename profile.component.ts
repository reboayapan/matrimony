import { Component, OnInit } from '@angular/core';
import {  FormGroup,  FormControl } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  basicProfileDetail: FormGroup;

  constructor() { }

  ngOnInit() {
    this.basicProfileDetail = new FormGroup({
      country: new FormControl(),
      state:new FormControl(),
      district:new FormControl(),
      education: new FormControl(),
      private: new FormControl(),
      government:new FormControl(),
      business:new FormControl(),
      workingfield:new FormControl(),
      designation: new FormControl(),
      businesstype: new FormControl(), 
      income: new FormControl(),
      weight:new FormControl(),
      height:new FormControl(),
      bodyType: new FormControl(),
      complexion:new FormControl(),
      eatingHabit: new FormControl(),
      drinkingHabit: new FormControl(),
      smokingHabit: new FormControl(),
      dosham:new FormControl()
      
    })
  }

  onSubmit(){
    console.log(this.basicProfileDetail.value);
    
  }

}
