import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            //{ path: 'signup', component: SignupComponent, pathMatch: 'full'},
            {
                path: 'error',
                loadChildren: () =>
                    import('./error/error.module').then((m) => m.ErrorModule),
            },
            {
                path: 'access',
                loadChildren: () =>
                    import('./access/access.module').then(
                        (m) => m.AccessModule
                    ),
            },
            {
                path: 'login',
                loadChildren: () =>
                    import('./login/login.module').then((m) => m.LoginModule),
            },
            { path: 'signup', component: SignupComponent },
            { path: '', redirectTo: 'signup', pathMatch: 'full'},
            { path: '**', redirectTo: '/notfound' },
        ]),
    ],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
