import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
  @Input() host_name
  @Output() onFetchName = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  fireSendNameEvent(e){
    let name = prompt('Enter your name');
    this.onFetchName.emit({e,name});
  }

}
