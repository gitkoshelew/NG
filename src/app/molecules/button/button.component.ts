import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() clickEventProps;
  @Output() clickEvent: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  clicker(){
    if (this.clickEventProps){
      this.clickEventProps()
      console.log(this.clickEventProps, this) 
      return
    }
    this.clickEvent.emit()
  }

}
