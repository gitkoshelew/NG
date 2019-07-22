import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/@core/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public objectKeys = Object.keys

  public section = "main";

  public heading;

  public technologiesList = {
    js: "ES7",
    css: "css3",
    html: "html5",
    react: "react16",
    vue: "vue2",
    angular: "angular8",
    webpack: "webpack4",
  }

  public meritsList;

  public skillsList;

  public formInputs = [
    {
      type: "text",
      name: "name",
      value: "",
      valid: false,
    },
    {
      type: "text",
      name: "surname",
      value: "",
      valid: false,
    },
    {
      type: "email",
      name: "email",
      value: "",
      valid: false,
    },
    {
      type: "tel",
      name: "tel",
      value: "",
      valid: false,
    }
  ]

  public formInputs2 = [
    {
      type: "text",
      name: "name",
      value: "",
      valid: false,
    },
    {
      type: "text",
      name: "surname",
      value: "",
      valid: false,
    },
    {
      type: "email",
      name: "email",
      value: "",
      valid: false,
    },
    {
      type: "tel",
      name: "tel",
      value: "",
      valid: false,
    }
  ]

  public inputText = "dfsdf"

  // private _dataServiceInstance;
  // constructor(dataServiceInstance: DataService) {
  //   this._dataServiceInstance = dataServiceInstance;
  // }

  constructor(private _dataServiceInstance: DataService) { }

  ngOnInit() {
    this.meritsList = this._dataServiceInstance.getMerits();
    this.skillsList = this._dataServiceInstance.getSkills();
    // this.heading = this._dataServiceInstance.heading;
  }

  addMerit(name, text, value){
    console.log("addMerit",name, text, value)
    this._dataServiceInstance.addMerit(name, text, value)
    this.meritsList = this._dataServiceInstance.getMerits();
  }

  removeMerit(name){
    console.log(name)
    this._dataServiceInstance.removeMerit(name);
    this.meritsList = this._dataServiceInstance.getMerits();
  }

  changeForm({value, index}){
    this.formInputs[index].value = value
  }

  emitHandler(e){
    console.log("emittedEvent", e)
  }



}
