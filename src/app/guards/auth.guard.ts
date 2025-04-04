import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../view/components/auth/services/auth.service';


export const authGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const authService = inject(AuthService);

    if (authService.getToken()) {
        return true;
    } else {
        router.navigate(['auth/login']);
        return false;
    }
};
