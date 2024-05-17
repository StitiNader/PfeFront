import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { ContactService } from 'src/app/service/contact.service';
@Component({
  selector: 'app-ajoutercontact',
  templateUrl: './ajoutercontact.component.html',
  styleUrls: ['./ajoutercontact.component.css']
})
export class AjoutercontactComponent {
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
  
  constructor(private contactService:ContactService,private router:Router,private toastService:ToastrService){}
  ajouterContact() {

    // Votre logique d'ajout de contact ici
    if(this.form.valid){
    this.contactService.addContact(this.form.value).subscribe(
      {next: (data: any) => {
      //resultat lié b backend(api répondu avec succés)
      this.toastService.success("ajouter avec succés")
            
    },
    error: (err: any) => {
      this.toastService.error("quelque chose s'est mal passé, réessayez plus tard");
    }})
    this.router.navigate(["/dashboard/contacts"])
  }
    // Afficher un message de confirmation
   

}


}

