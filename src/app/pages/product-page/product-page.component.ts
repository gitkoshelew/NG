import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  public pagePath = "/pages/product"
  public queryParams = {q: 111};
  public id;

  constructor(private idRoute: ActivatedRoute) {
    this.idRoute.params.subscribe(params=> this.id = params.id)
   }

  ngOnInit() {
  }

}
