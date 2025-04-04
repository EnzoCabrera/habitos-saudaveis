import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import {
    FormControl,
    FormGroup,
    Validators,
    ReactiveFormsModule,
} from '@angular/forms';
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

    /* usuarioForm = new FormGroup({
        nome: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        senha: new FormControl('', [
            Validators.required,
            Validators.minLength(8),
        ]),
    }); */

    constructor(
        private authService: AuthService,
        private router: Router,
        private messageService: MessageService
    ) {}

    signup() {
        const userData = {
            nome: this.nome,
            email: this.email,
            senha: this.senha,
        };

        this.authService.signup(userData).subscribe({
            next: (response) => {
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
                this.messageService.add({
                    severity: 'error',
                    summary: 'Erro',
                    detail: err.error.message,
                });
                console.error('Erro ao realizar cadastro', err);
            },
        });
    }
}
