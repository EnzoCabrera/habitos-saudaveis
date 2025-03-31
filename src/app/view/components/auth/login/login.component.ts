import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
        `
            :host ::ng-deep .pi-eye,
            :host ::ng-deep .pi-eye-slash {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }

            :host ::ng-deep {
                .p-button,
                .p-password,
                label,
                input {
                    width: 100%;
                }
            }
        `,
    ],
    providers: [MessageService],
})
export class LoginComponent {
    email: string = '';
    senha: string = '';

    constructor(
        private AuthService: AuthService,
        private router: Router,
        private messageService: MessageService
    ) {}

    login() {
        const userData = { email: this.email, senha: this.senha };

        this.AuthService.login(userData).subscribe({
            next: (response) => {
                console.log('Login realizado com sucesso', response);
                console.log(response);
                localStorage.setItem('token', response.token);
                this.router.navigate(['dashboard']); // Redireciona após login
            },
            error: (err) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Erro',
                    detail: 'Email ou senha incorretos!',
                });
                console.error('Erro ao realizar login', err);
            },
        });
    }
}
