import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { API_URL } from '../app.constants';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
tokens : any
  constructor(private httpClient : HttpClient) { }

 
  authenticate(login){
    return this.httpClient.post<any>(`${API_URL}/authenticate`,login).pipe(
      map(
        userData=>{
        let tokenStr= 'Bearer '+userData.token;
      sessionStorage.setItem('authenticateuser',login.username);
      sessionStorage.setItem('token', tokenStr);
      return userData
    }
      )
    );
  }
  userRegistration(login){
    return this.httpClient.post<any>(`${API_URL}/register`,login).pipe(
      map(
        userData=>{
      return userData
    }
      )
    );
  }
 
  isUserLoggedIn(){
    var user=sessionStorage.getItem('authenticateuser');
    return !(user===null)
  }
  logout(){
    sessionStorage.removeItem("authenticateuser");
    sessionStorage.removeItem("token")

  }
}
