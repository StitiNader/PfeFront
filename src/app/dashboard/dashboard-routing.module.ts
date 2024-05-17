import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { AjoutercontactComponent } from './ajoutercontact/ajoutercontact.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const routes: Routes = [
  { path: '', component: DashComponent },
  { path: 'ajouter', component: AjoutercontactComponent },
  { path: 'contacts', component: ContactsListComponent },
  { path: 'contacts/:id/edit', component: EditContactComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
