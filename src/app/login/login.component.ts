import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { Login } from '../model/login';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { RegistrationComponent  } from '../registration/registration.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserName = ''
  Password = ''
  errorMessage='invalid credentials'
  InvalidLogIn = false
  login : Login
  constructor(private route : Router,private hardcodedAuthenticationService : HardcodedAuthenticationService,public dialog: MatDialog) { }

  ngOnInit() {
    this.login=new Login();
  }
  handleLogIn(){
    // console.log(this.UserName);
    // if (this.UserName==='Suvendu' && this.Password==="samal") 
    (this.hardcodedAuthenticationService.authenticate(this.login).subscribe(
   data=> {
      this.UserName=this.login.username;
      this.route.navigate(["welcome",this.UserName]);
      this.InvalidLogIn=false
    } ,error=> {
      this.InvalidLogIn=true
    }
    )
    );
  }
  onClickMe(){
    const dialogRef = this.dialog.open(RegistrationComponent, {
      width: '500px',
      height: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  }

