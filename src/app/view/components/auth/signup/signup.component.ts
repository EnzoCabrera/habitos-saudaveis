import {Component} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {FormsModule} from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';

@Component({
    selector: 'app-signup',
    standalone: true,
    imports: [
        ButtonModule,
        CheckboxModule,
        FormsModule,
        PasswordModule,
        InputTextModule,
        RouterModule
    ],
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
    nome: string = '';
    email: string = '';
    senha: string = '';

    constructor(private authService: AuthService, private router: Router) {
    }

    signup() {
        const userData = {nome: this.nome, email: this.email, senha: this.senha};

        this.authService.signup(userData).subscribe({
            next: response => {
                console.log('Cadastro realizado com sucesso', response);
                this.router.navigate(['auth/login']); // Redireciona após cadastro
            },
            error: err => {
                console.error('Erro ao realizar cadastro', err);
            }
        });
    }
}
