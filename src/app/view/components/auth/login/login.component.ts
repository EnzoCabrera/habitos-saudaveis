import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

            :host ::ng-deep small {
                min-width: 299.05px !important;
            }
        `,
    ],
    providers: [MessageService],
})
export class LoginComponent {
    email: string = '';
    senha: string = '';
    loading: boolean = false;

    usuarioForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        senha: new FormControl('', [
            Validators.required,
            Validators.minLength(8),
        ]),
    });

    constructor(
        private authService: AuthService,
        private router: Router,
        private messageService: MessageService
    ) {
        this.authService.deleteToken();
    }

    login() {
        this.loading = true;

        this.authService.login(this.usuarioForm.value).subscribe(
            (result) => {
                this.authService.setToken(result.token);
                setTimeout(() => {
                    this.loading = false;
                    this.router.navigate(['dashboard']); // Redireciona após login
                }, 200);
            },
            (err) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Erro',
                    detail: 'Email ou senha incorretos!',
                });
                this.loading = false;
                console.error('Erro ao realizar login', err);
            }
        );
    }

    getErrorMessage(fieldName: string) {
        const field = this.usuarioForm.get(fieldName);

        if (field?.hasError('required')) {
            return 'Campo obrigatório';
        }
        if (field?.hasError('minlength')) {
            const requiredLength = field.errors
                ? field.errors['minlength']['requiredLength']
                : 8;
            return `Tamanho mínimo precisa ser de ${requiredLength} caracteres`;
        }
        if (field?.hasError('email')) {
            return 'E-mail inválido';
        }

        return 'Campo inválido';
    }
}
