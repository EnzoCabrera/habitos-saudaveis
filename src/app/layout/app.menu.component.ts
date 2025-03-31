import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { AuthService } from '../view/components/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];
    bottomModel: any[] = [];

    constructor(
        public layoutService: LayoutService,
        private authService: AuthService,
        private router: Router
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
                        routerLink: ['#'],
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
        localStorage.removeItem('token');
    }

    deletarConta() {
        this.authService.deletarConta(this.authService.getToken()).subscribe({
            next: (response) => {
                this.logout();
                this.router.navigate(['/signup']);
            },
        });
    }
}
