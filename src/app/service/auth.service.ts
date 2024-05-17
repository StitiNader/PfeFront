import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url="Http://localhost:8090/auth"
  constructor(private http:HttpClient) { }
  login(loginReq:any){
    return this.http.post(this.url+"/login",loginReq);
    }
    registry(user:any){
      return this.http.post(this.url+"/register",user);
    }

}
