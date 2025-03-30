import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

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
})
export class LoginComponent {
    email: string = '';
    senha: string = '';

    constructor(private AuthService: AuthService, private router: Router) {
    }

    login() {
        const userData = {email: this.email, senha: this.senha};

        this.AuthService.login(userData).subscribe({
            next: response => {
                console.log('Login realizado com sucesso', response);
                console.log(response);
                localStorage.setItem('token', response.token);
                this.router.navigate(['dashboard']); // Redireciona após login
            },
            error: err => {
                console.error('Erro ao realizar login', err);
            }
        });
    }
}
