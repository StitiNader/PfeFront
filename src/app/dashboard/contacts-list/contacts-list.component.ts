import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/service/contact.service';
import { ToastrService } from "ngx-toastr";
import { ManagmentTokenService } from 'src/app/service/managment-token.service';


@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit{
  idToDelete!:number;
  contactsList: any[]=[];
  nom!:string;
  constructor(private router:Router,private tokenManagement:ManagmentTokenService,private contactService:ContactService,private toastService:ToastrService){

  }
  ngOnInit(): void {
      this.getAllContact();
  }
  logout(){
    this.tokenManagement.signOut();
  }
  search(){
    if(this.nom!=null&&this.nom!=""){
      this.contactService.searcheContact(this.nom).subscribe(
        { next: (data: any) => {
        this.contactsList = data ;
        console.log(this.contactsList)
              
      },
      error: (err: any) => {
        
      },complete() {
          
      },})
    }else{
      this.getAllContact()
    }
  
  }

  

  onEditButtonPressed(id: string): void {
    this.router.navigateByUrl('/dashboard/contacts/' + id + '/edit');
  }
  getAllContact(){
    this.contactService.getAllContact().subscribe(
      { next: (data: any) => {
      this.contactsList = data ;
      console.log(this.contactsList)
            
    },
    error: (err: any) => {
      
    },complete() {
        
    },})

    }  
    deleteContact(){
      this.contactService.deleteContact(this.idToDelete).subscribe(
        {next: (data: any) => {
        this.toastService.success("Supprimer avec succés")
          this.getAllContact();  
           
      },
      error: (err: any) => {
        this.toastService.error("quelque chose s'est mal passé, réessayez plus tard");
      },complete() {
          
      },})
    }
}
