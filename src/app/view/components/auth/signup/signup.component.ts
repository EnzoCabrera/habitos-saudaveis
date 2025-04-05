import { Component } from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { AuthService } from '../services/auth.service';
@Component({
    selector: 'app-signup',
    standalone: true,
    imports: [
        ButtonModule,
        CheckboxModule,
        FormsModule,
        PasswordModule,
        InputTextModule,
        RouterModule,
        ToastModule,
        ProgressSpinnerModule,
        ReactiveFormsModule,
    ],
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    providers: [MessageService],
})
export class SignupComponent {
    nome: string = '';
    email: string = '';
    senha: string = '';

    loading: boolean = false;

    usuarioForm = new FormGroup({
        nome: new FormControl('', [
            Validators.required,
            Validators.pattern('[a-zA-Z ]*'),
        ]),
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
    ) {}

    signup() {
        this.loading = true;

        this.authService.signup(this.usuarioForm.value).subscribe({
            next: (response) => {
                this.loading = false;

                this.messageService.add({
                    severity: 'success',
                    summary: 'Sucesso',
                    detail: response.message,
                });
                console.log('Cadastro realizado com sucesso', response);
                setTimeout(() => {
                    this.router.navigate(['auth/login']); // Redireciona após cadastro
                }, 1000);
            },
            error: (err) => {
                this.loading = false;

                this.messageService.add({
                    severity: 'error',
                    summary: 'Erro',
                    detail: err.error.message,
                });
                console.error('Erro ao realizar cadastro', err);
            },
        });
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
