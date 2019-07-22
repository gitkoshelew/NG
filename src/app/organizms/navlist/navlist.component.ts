import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navlist',
  templateUrl: './navlist.component.html',
  styleUrls: ['./navlist.component.scss']
})
export class NavlistComponent implements OnInit {



  public nav = {text: "about", link: "/"}
  public isNavMain = true
  public inputValue = ''
  

  @Input("secProp") section;
  @Input("isNavOpen") isNavOpen;
  @Input() list;

  constructor() { }

  ngOnInit() {
  }





}
