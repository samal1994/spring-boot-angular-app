import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Details } from 'src/app/model/details';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/app.constants';


@Injectable({
  providedIn: 'root'
})
export class APICallService {

  constructor(private httpClient : HttpClient) { }

  get_products():Observable<Details>{
    return this.httpClient.get<Details>(`${API_URL}/helloworldBean`);
 }

 get_productsWithPathVariable(name):Observable<Details>{
  // let basicAuthHeaderstring=this.createBasicAuthHttpHeader();
  // let headers= new HttpHeaders({
  //   Authorization: basicAuthHeaderstring,
  //   'Access-Control-Allow-Origin': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'}
  // )
  //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('suvendu:Suvu@1994') });
    return this.httpClient.get<Details>(`${API_URL}/pathvariable/${name}`);
}
createBasicAuthHttpHeader(){
let username='suvendu'
let password='Suvu@1994'
let basicAuthHeader="Basic "+window.btoa(' ' + username + ':' + password);
return basicAuthHeader
}
}
