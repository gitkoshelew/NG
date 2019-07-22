import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound-page',
  // templateUrl: './notfound-page.component.html',
  template: `
  <h1>404</h1>
  `,
  styleUrls: ['./notfound-page.component.scss']
})
export class NotfoundPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
