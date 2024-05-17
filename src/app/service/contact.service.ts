import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
private url="Http://localhost:8090/contact"
  constructor(private http:HttpClient) { }
  getAllContact(){
    return this.http.get(this.url+"/getAll");
  }
  addContact(contact:any){
    return this.http.post(this.url+"/add",contact);
    }
  updateContact(id:number,contact:any){
    return this.http.put(this.url+"/update/"+id,contact);
  }
  deleteContact(id:number){
    return this.http.delete(this.url+"/delete/"+id)
  }
  getContactById(id:number){
    return this.http.get(this.url+"/contacts/"+id)
  }
  searcheContact(nom:string){
      return this.http.get(this.url+"/search/"+nom);
  }
}
