import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() section;
  @Input() formInputs;
  @Output() onFormChange: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  changeTextFromNavInput(e, index:number){
    const value = e.target.value;
    this.onFormChange.emit({value, index}) 
  }

}
