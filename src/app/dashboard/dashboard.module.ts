import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashComponent } from './dash/dash.component';
import { AjoutercontactComponent } from './ajoutercontact/ajoutercontact.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [
    DashComponent,
    AjoutercontactComponent,
    ContactsListComponent,
    EditContactComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ]
})
export class DashboardModule { 

  

}
