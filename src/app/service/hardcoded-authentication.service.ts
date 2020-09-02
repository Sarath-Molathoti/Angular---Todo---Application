import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username,password){
   // console.log("before " + this.isUserLoggedIn());
    if(username==="sarath" && password==="1234"){
      sessionStorage.setItem("authenticaterUser",username);
     // console.log("before " + this.isUserLoggedIn());
      return true;
    }
      return false;
    
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem("authenticaterUser")
    return !(user==null)
  }

  logout(){
    sessionStorage.removeItem("authenticaterUser")
  }
}
