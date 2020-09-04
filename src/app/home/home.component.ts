import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ang_name: string;
  guest = '';

  constructor() { }

  ngOnInit() {
    this.ang_name = "Angular"
  }

  getName(e){
    this.guest = e.name
  }

}
