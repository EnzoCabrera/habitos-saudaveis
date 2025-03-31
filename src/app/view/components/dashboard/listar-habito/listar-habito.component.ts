import { Component, OnInit } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { Habito } from '../model/habito';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { HabitoService } from '../service/habito.service';
import { catchError, Observable, of } from 'rxjs';

@Component({
    selector: 'app-listar-habito',
    standalone: true,
    imports: [
        CardModule,
        ToastModule,
        ToolbarModule,
        TableModule,
        ButtonModule,
        PaginatorModule,
    ],
    templateUrl: './listar-habito.component.html',
    styleUrl: './listar-habito.component.scss',
    providers: [MessageService],
})
export class ListarHabitoComponent implements OnInit {
    habitos!: Habito[];
    loading: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private messageService: MessageService,
        private habitoService: HabitoService
    ) {}

    ngOnInit() {
        this.habitoService.list().subscribe((habits) => {
            const habitosArray = this.valuesToArray(habits);

            this.habitos = habitosArray[0];
        });
    }

    editarHabito(id: any) {
        console.log(id);
        this.router.navigate(['dashboard/editar-habito', id]);
    }

    novoHabito() {
        this.router.navigate(['dashboard/novo-habito']);
    }

    deletarHabito() {}

    valuesToArray(obj) {
        return Object.keys(obj).map(function (key) {
            return obj[key];
        });
    }
}
