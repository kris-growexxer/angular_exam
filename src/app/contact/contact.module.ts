import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactComponent} from "./contact.component";
import {AgePipe} from "./age.pipe";
import {GenderStyleDirective} from "./gender-style.directive";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AuthGuard} from "../login/auth.gaurd";



@NgModule({
  declarations: [
    ContactComponent,
    AgePipe,
    GenderStyleDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'',component:ContactComponent,canActivate:[AuthGuard]}
    ])
  ],
  exports:[
    ContactComponent,
    AgePipe,
    GenderStyleDirective,
  ]
})
export class ContactModule { }
