import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ //allow inject dependencys into service
  providedIn: 'root'
})
export class UsersServiceService {
  private users = [
    {
      name: "Petro",
      age: 40
    },
    {
      name: "Petya",
      age: 28
    },
    {
      name: "Pasha",
      age: 28
    },
  ]

  private responseUser;

  private API = 'https://api.github.com/users/'

  constructor(private _http: HttpClient) { }

  public getUsers(){
    return this.users
  }

  public searchUser(userName){
    return this._http.get(`${this.API}${userName}`)
  }

  public subscribeSearchUser(userName){
    this.searchUser(userName).subscribe((response)=>{
      console.log(response)
      this.responseUser = response
    })
  }

  public getUser(){
    return this.responseUser;
  }
}
