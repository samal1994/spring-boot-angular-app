import { Component, OnInit } from '@angular/core';
import { Login } from '../model/login';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  UserName = ''
  Password = ''
  login : Login
  sucessfullregistration = false
  sucessMessage=`Registration of user ${this.UserName} sucessfull`
  unsucessfullregistration = false;
  errorMessage='user registration failed'
  existingUser=false;
  constructor(private hardcodedAuthenticationService : HardcodedAuthenticationService) { }

  ngOnInit() {
    this.login=new Login();
  }

  userRegistration(){ 
  console.log(this.login);
  (this.hardcodedAuthenticationService.userRegistration(this.login).subscribe(
    data=> {
       this.UserName=this.login.username;
       this.sucessfullregistration=true
     } ,error=> {
      this.UserName=this.login.username;
      if (error.error.status==500) {
        this.existingUser=true;
      } else{
       this.unsucessfullregistration=true}
     }
     )
     );
     console.log("hii ");
}
}
