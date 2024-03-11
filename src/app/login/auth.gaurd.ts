import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (state.url === '/login' && !this.loginService.isAuthenticated) {
      return true;
    } else if (state.url !== '/login' && this.loginService.isAuthenticated) {
      return true;
    } else {
      this.router.navigate([this.loginService.isAuthenticated ? '/contacts' : '/login']);
      return false;
    }
  }
}
