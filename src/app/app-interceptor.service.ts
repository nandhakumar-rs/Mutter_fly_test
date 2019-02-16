import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
let clone_req =  req.clone({headers:req.headers.append('Authorization','Client-ID db5a9cfa6065813e3b0eefab7b2d011cdb5526f5d8894b838805a3b00a40221e')})
return next.handle(clone_req)
  }

  constructor() { }

  
}
