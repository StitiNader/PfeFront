import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ManagmentTokenService } from './managment-token.service';
const TOKEN_HEADER_KEY='Authorization'
@Injectable()
export class IntercptorInterceptor implements HttpInterceptor {

  constructor(private tokenMaagement:ManagmentTokenService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = request;
    const token =this.tokenMaagement.getToken();
    
    if(token != null){
      authReq = request.clone({headers : request.headers.set(TOKEN_HEADER_KEY,'Bearer '+token)});
    }
    return next.handle(authReq);
  }
}
export const authInterceptorProviders = [
  { provide:HTTP_INTERCEPTORS,useClass:IntercptorInterceptor ,multi :true}
]
