import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url="Http://localhost:8090/users/"

  constructor(private http:HttpClient ) {
   }
   login(){

   }
   registre(user:any){
      return this.http.post(this.url+"add",user);
   }
}
