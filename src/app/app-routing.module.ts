import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ContactComponent} from "./contact/contact.component";
import {AuthGuard} from "./login/auth.gaurd";

const routes: Routes = [
  {path:'login',component:LoginComponent,canActivate:[AuthGuard]},
  {path:'contacts',loadChildren:()=>import('./contact/contact.module').then(m=>m.ContactModule),canActivate:[AuthGuard]},
  {path:'',redirectTo:'/login',pathMatch:'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
