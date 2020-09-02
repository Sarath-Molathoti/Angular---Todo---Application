import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "sarath"
  password = ""
  errorMessage = "Invalid Credentials"
  invalidLogin = false
  

  constructor(private route: Router, private hardcodedAuthentication: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.hardcodedAuthentication.authenticate(this.username,this.password)){
      this.route.navigate(["welcome",this.username])
      this.invalidLogin=false
    }else{
      this.invalidLogin=true
    }
    
  }

}
