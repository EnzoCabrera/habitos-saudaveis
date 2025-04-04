import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HabitosFormComponent } from './habitos-form/habitos-form.component';

import { ListarHabitoComponent } from './listar-habito/listar-habito.component';
import { habitoResolver } from 'src/app/guards/habito.resolver';

@NgModule({
    imports: [
        RouterModule.forChild([
            //{ path: '', component: DashboardComponent },
            { path: '', redirectTo: 'listar-habito', pathMatch: 'full' },
            { path: 'listar-habito', component: ListarHabitoComponent },
            {
                path: 'novo-habito',
                component: HabitosFormComponent,
                resolve: { habito: habitoResolver },
            },
            {
                path: 'editar-habito/:id',
                component: HabitosFormComponent,
                resolve: { habito: habitoResolver },
            }
        ]),
    ],
    exports: [RouterModule],
})
export class DashboardsRoutingModule {}
