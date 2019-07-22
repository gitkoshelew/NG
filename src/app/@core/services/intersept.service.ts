import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class InterceptService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
    const request = req.clone({ params: req.params.set('intercept', '5') });
    return next.handle(request).catch(error =>{
      if(error.status === 401){
        console.log('redirect to login')
      }
      return Observable.throw(error)
    });
  }
}
