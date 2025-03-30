import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HabitosFormComponent } from './habitos-form/habitos-form.component';
import { habitoResolver } from './guards/habito.resolver';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: DashboardComponent },
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
