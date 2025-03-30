import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { HabitoService } from '../service/habito.service';
import { Habito } from '../model/habito';
import { of } from 'rxjs';

export const habitoResolver: ResolveFn<Habito> = (route, state) => {
    const habitoService = inject(HabitoService);

    if (route.params && route.params['id']) {
        return habitoService.loadById(route.params['id']);
    }
    return of({
        _id: null,
        nomeHabito: '',
        frequencia: '',
        periodo: '',
        userId: null,
    });
};
