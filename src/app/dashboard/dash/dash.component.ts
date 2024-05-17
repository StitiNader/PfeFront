import { Component,EventEmitter, Output } from '@angular/core';
import { ManagmentTokenService } from 'src/app/service/managment-token.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  @Output() searchEvent = new EventEmitter<string>();

  constructor(private tokenManagement:ManagmentTokenService) { }

  search() {
    // Récupère la valeur de la recherche depuis l'entrée de texte
    const searchTerm = (document.getElementById('searchInput') as HTMLInputElement).value;
    // Émet l'événement de recherche avec le terme de recherche
    this.searchEvent.emit(searchTerm);
  }
  logout(){
    this.tokenManagement.signOut();
  }
}
