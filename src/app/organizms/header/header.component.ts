import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public section = "header";
  public list: any[];
  public searchWord: string = "";
  public isNavOpen=true;

  constructor() {
    setTimeout(()=>{
      this.list = [
        {
          text: "home",
          link: "/pages/home"
        },
        {
          text: "about",
          link: "/pages/about"
        },
        {
          text: "news",
          link: "/pages/news"
        },
        {
          text: "price",
          link: "/pages/price"
        },
        {
          text: "login",
          link: "/auth"
        },
      ]
    })
  }


  ngOnInit() {

  }

  changeSearchWord(e){
    this.searchWord = e.target.value

  }

  alertMessage(value, refElement ){
    console.log(value, refElement)
    console.dir(refElement)
  }

  toggleNav(){
    console.log(this.isNavOpen)
    this.isNavOpen = !this.isNavOpen
  }


}
