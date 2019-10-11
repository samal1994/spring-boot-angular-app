import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{
  intercept(request: HttpRequest<any>, next: HttpHandler) {
  //let username='suvendu'
  //let password='Suvu@1994'
 // let basicAuthHeader="Basic "+window.btoa(' ' + username + ':' + password);
//  let basicAuthHeader='Basic ' + btoa('suvendu:Suvu@1994')
//   request=request.clone({
//   setHeaders:{
//   Authorization : basicAuthHeader
//     }
//  })
if (sessionStorage.getItem('authenticateuser') && sessionStorage.getItem('token')) {
  request = request.clone({
    setHeaders: {
      Authorization: sessionStorage.getItem('token')
    }
  })
}
  return next.handle(request)
}
  constructor() { }
}
