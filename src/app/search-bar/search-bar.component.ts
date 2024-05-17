import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() searchEvent = new EventEmitter<string>();

  constructor() { }

  search() {
    // Récupère la valeur de la recherche depuis l'entrée de texte
    const searchTerm = (document.getElementById('searchInput') as HTMLInputElement).value;
    // Émet l'événement de recherche avec le terme de recherche
    this.searchEvent.emit(searchTerm);
  }
}
