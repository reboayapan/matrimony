import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-profile',
  templateUrl: './full-profile.component.html',
  styleUrls: ['./full-profile.component.css']
})
export class FullProfileComponent implements OnInit {

  width:any;
  constructor() { }

  ngOnInit() {
    this.width =25;
  }

}
