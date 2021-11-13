import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CentreRoutingModule } from './centre-routing.module';
import { CentreComponent } from './centre.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CentreComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CentreRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CentreModule { }
