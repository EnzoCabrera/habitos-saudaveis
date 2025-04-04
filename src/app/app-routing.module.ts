import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './layout/app.layout.component';
import { authGuard } from './guards/auth.guard';


@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                {
                    path: '',
                    component: AppLayoutComponent,
                    children: [
                        {
                            path: 'dashboard',
                            loadChildren: () =>
                                import(
                                    './view/components/dashboard/dashboard.module'
                                ).then((m) => m.DashboardModule),
                        }
                    ],
                    canActivate: [authGuard],
                },
                {
                    path: 'auth',
                    loadChildren: () =>
                        import('./view/components/auth/auth.module').then(
                            (m) => m.AuthModule
                        ),
                },
            ],
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
            }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
