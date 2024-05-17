import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { ContactService } from 'src/app/service/contact.service';
import { ManagmentTokenService } from 'src/app/service/managment-token.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent {
  id!:number;
  form = new FormGroup({
    prenom: new FormControl("", [Validators.required]),
    nom: new FormControl("", [Validators.required]),
    entreprise: new FormControl(null, [Validators.required]),
    service: new FormControl(null, [Validators.required]),
    fonction: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    num_tel: new FormControl(null, [Validators.required]),
    datedenaissance: new FormControl(null, [Validators.required]),
    commentaire: new FormControl(null, [Validators.required]),

  });
  constructor(private tokenManagement:ManagmentTokenService,private contactService:ContactService , private route:ActivatedRoute,private router:Router,private toastService:ToastrService){
    this.route.params.subscribe(params => {
      this.id=params['id'];

   this.getContactbyId(this.id);
  });


  }
  logout(){
    this.tokenManagement.signOut();
  }
  modifierContact() {
    console.log(this.form.value)
    // Votre logique d'ajout de contact ici
    this.contactService.updateContact( this.id,this.form.value ).subscribe({next: (data: any) => {//resultat lié b backend(api répondu avec succés)
      this.toastService.success("ajouter avec suce")
      this.router.navigate(["/dashboard/contacts"])
    },
    error: (err: any) => {
      this.toastService.error("quelque chose s'est mal passé, réessayez plus tard");
    },})
    // Afficher un message de confirmation
 

}
getContactbyId(id:number){
  this.contactService.getContactById(id).subscribe({next: (data: any) => {
    this.toastService.success("ajouter avec suce")
    this.form.patchValue(data);      
  },
  error: (err: any) => {
    
  },})
}

}
