import { Component, ElementRef, ViewChild } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { AuthService } from '../view/components/auth/services/auth.service';
import { LayoutService } from './service/app.layout.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent {
    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(
        public layoutService: LayoutService,
        private authService: AuthService,
        private router: Router,
        private confirmationService: ConfirmationService,
        private messageService: MessageService
    ) {}

    logout() {
        this.authService.logout();
    }

    deletarConta() {
        this.authService.deletarConta(this.authService.getToken()).subscribe({
            next: (response) => {
                this.authService.logout();
                this.router.navigate(['auth/signup']);
            },
        });
    }

    confirmarDelecaoConta(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Tem certeza que deseja deletar sua conta?',
            header: 'Deletar conta',
            icon: 'pi pi-exclamation-triangle',
            acceptIcon: 'none',
            acceptLabel: 'Sim',
            rejectIcon: 'none',
            rejectLabel: 'Não',
            rejectButtonStyleClass: 'p-button-outlined',
            accept: () => {
                this.deletarConta();
            },
            reject: () => {},
        });
    }
}
