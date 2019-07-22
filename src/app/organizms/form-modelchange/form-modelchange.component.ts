import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-form-modelchange',
  templateUrl: './form-modelchange.component.html',
  styleUrls: ['./form-modelchange.component.scss']
})
export class FormModelchangeComponent implements OnInit {

  @Input() section;
  @Input() formInputs;

  @Output() onFormChange: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  changeTextFromNavInput(value, index){
    this.formInputs[index].value = value;
    this.onFormChange.emit(value) 
    console.log(value, index)
  }

}
