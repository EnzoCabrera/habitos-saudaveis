import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { AuthService } from '../view/components/auth/services/auth.service';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    styles: [
        `
            :host ::ng-deep .layout-menu {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
        `,
    ],
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];
    bottomModel: any[] = [];

    constructor(
        public layoutService: LayoutService,
        private authService: AuthService,
        private router: Router,
        private confirmationService: ConfirmationService,
        private messageService: MessageService
    ) {}

    ngOnInit() {
        this.model = [
            {
                label: 'Dashboard',
                items: [
                    {
                        label: 'Home',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/dashboard'],
                    },
                    {
                        label: 'Novo hábito',
                        icon: 'pi pi-plus',
                        routerLink: ['dashboard/novo-habito'],
                    },
                ],
            },
        ];

        this.bottomModel = [
            {
                items: [
                    {
                        label: 'Deletar conta',
                        icon: 'pi pi-user-minus',
                        command: () => {
                            this.confirmarDelecaoConta();
                        },
                    },
                    {
                        label: 'Sair',
                        icon: 'pi pi-sign-out',
                        routerLink: ['auth/login'],
                        command: () => {
                            this.logout();
                        },
                    },
                ],
            },
        ];
    }

    logout() {
        this.authService.logout();
    }

    deletarConta() {
        this.authService.deletarConta(this.authService.getToken()).subscribe({
            next: (response) => {
                console.log(response);
                this.authService.logout();
                this.router.navigate(['auth/signup']);
            },
        });
    }

    confirmarDelecaoConta() {
        this.confirmationService.confirm({
            //target: event.target as EventTarget,
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
