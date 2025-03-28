import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'app-signup',
    standalone: true,
    imports: [
        ButtonModule,
        CheckboxModule,
        FormsModule,
        PasswordModule,
        InputTextModule,
    ],
    templateUrl: './signup.component.html',
    styleUrl: './signup.component.scss',
})
export class SignupComponent {
    valCheck: string[] = ['remember'];

    password!: string;

    constructor(public layoutService: LayoutService) {}
}
