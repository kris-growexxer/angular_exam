import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private users:{email:string,password:string}[] = [
    { email: 'kris@gmail.com', password: '12345678' },
  ];

  isAuthenticated = false;

  login(email: string, password: string): boolean {
    const user = this.users.find(user => user.email === email && user.password === password);
    if (user) {
      this.isAuthenticated = true;
      return true;
    } else {
      return false;
    }
  }

}
