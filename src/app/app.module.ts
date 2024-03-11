import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthGuard} from "./login/auth.gaurd";
import {AgePipe} from "./contact/age.pipe";
import {GenderStyleDirective} from "./contact/gender-style.directive";
import {ContactModule} from "./contact/contact.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
