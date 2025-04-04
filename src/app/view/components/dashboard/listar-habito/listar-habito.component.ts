import { Component, OnInit } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { Habito } from '../models/habito';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { HabitoService } from '../services/habito.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

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
        ConfirmDialogModule,
    ],
    templateUrl: './listar-habito.component.html',
    styleUrl: './listar-habito.component.scss',
    providers: [MessageService, ConfirmationService],
})
export class ListarHabitoComponent implements OnInit {
    habitos!: Habito[];
    loading: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private messageService: MessageService,
        private habitoService: HabitoService,
        private confirmationService: ConfirmationService
    ) {}

    ngOnInit() {
        this.carregarDados();
    }

    carregarDados() {
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

    deletarHabito(id: any) {
        this.habitoService.remove(id).subscribe({
            next: (res) => {
                console.log(res);
                this.messageService.add({
                    severity: 'success',
                    summary: 'Confirmed',
                    detail: 'Hábito deletado com sucesso',
                });
                this.carregarDados();
            },
            error: (err) => console.log(err),
        });
    }

    confirmarDelecao(event: Event, id: any) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Tem certeza que deseja deletar este hábito?',
            header: 'Deletar hábito',
            icon: 'pi pi-exclamation-triangle',
            acceptIcon: 'none',
            acceptLabel: 'Sim',
            rejectIcon: 'none',
            rejectLabel: 'Não',
            rejectButtonStyleClass: 'p-button-outlined',
            accept: () => {
                this.deletarHabito(id);
            },
            reject: () => {
            },
        });
    }

    valuesToArray(obj) {
        return Object.keys(obj).map(function (key) {
            return obj[key];
        });
    }
}
