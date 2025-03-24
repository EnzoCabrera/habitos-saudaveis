import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  onLogin() {
    if (!this.email || !this.password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    console.log('Email:', this.email);
    console.log('Senha:', this.password);
    console.log('Lembrar-me:', this.rememberMe);
  }
}
