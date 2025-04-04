import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { of } from 'rxjs';
import { Habito } from '../view/components/dashboard/models/habito';
import { HabitoService } from '../view/components/dashboard/services/habito.service';

export const habitoResolver: ResolveFn<Habito> = (route, state) => {
    const habitoService = inject(HabitoService);

    if (route.params && route.params['id']) {
        return habitoService.loadById(route.params['id']);
    }
    return of({
        id: null,
        nome_habito: '',
        frequencia: '',
        periodo: '',
        completed: '',
        criado_em: '',
        user: null,
    });
};
