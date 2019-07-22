import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { UsersServiceService } from '../../@core/services/users-service.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  userName: string ='';
  gitHubUser: any;
  API = 'https://api.github.com/users/';
  users = null

  // constructor(usersSvc:UsersServiceService, private http: HttpClient) {
  //   this.users = usersSvc.getUsers();
  // }

  constructor(private _usersSvc:UsersServiceService) {
    this.users = _usersSvc.getUsers();
  }

  ngOnInit() {
  }

  search(){
    console.log(this.userName)
    this._usersSvc.searchUser(this.userName).subscribe(user => {
      console.log(user)
      this.gitHubUser = user
    })
  }

}
