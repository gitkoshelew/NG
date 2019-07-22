import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.scss']
})
export class FormModelComponent implements OnInit {

  @Input() section;
  @Input() formInputs;

  constructor() { }

  ngOnInit() {
  }

  log(e){
    console.dir(e.target.parentElement)
  }
}
