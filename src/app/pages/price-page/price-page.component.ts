import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-price-page',
  templateUrl: './price-page.component.html',
  styleUrls: ['./price-page.component.scss']
})

export class PricePageComponent implements OnInit{

  private API = 'https://api.github.com/search/users';
  private ForOhOne = 'https://api.github.com/user';
  private productsPage = "pages/product"

  public queries;
  public data;

  constructor(_http: HttpClient, private idRoute: ActivatedRoute, private _router: Router) {
    this.idRoute.queryParams.subscribe(queries=> {
      console.log(queries)
      this.queries = queries
    });
    this.idRoute.data.subscribe(data=> {
      console.log("staticData", data)
      this.data = data
    });

    _http.get(`${this.ForOhOne}`/* interceptParams */).subscribe(result => {
      console.log(result)
    })
   }

  goToProduct(value){
    this._router.navigate([this.productsPage, value])
  }

   

  ngOnInit() {
  }

}
