import { Component } from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { Habito } from '../model/habito';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-habitos-form',
    standalone: true,
    imports: [
        CardModule,
        InputTextModule,
        ButtonModule,
        DropdownModule,
        ReactiveFormsModule,
        ToastModule,
    ],
    templateUrl: './habitos-form.component.html',
    styleUrl: './habitos-form.component.scss',
    providers: [MessageService]
})
export class HabitosFormComponent {
    header = '';

    frequenciaOpcoes: any[] = [
        { value: 'Diário' },
        { value: 'Semanal' },
        { value: 'Mensal' },
    ];

    periodoOpcoes: any[] = [
        { value: 'Manhã' },
        { value: 'Tarde' },
        { value: 'Noite' },
    ];

    habitoForm = new FormGroup({
        nomeHabito: new FormControl('', [Validators.required]),
        frequencia: new FormControl('', [Validators.required]),
        periodo: new FormControl('', [Validators.required]),
    });

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private messageService: MessageService
    ) {
        const habito: Habito = this.route.snapshot.data['habito'];

        if (habito._id == null) {
            this.header = 'Novo hábito';
        } else {
            this.header = 'Editar hábito';
        }
    }

    voltar() {
        this.router.navigate(['/dashboard'], { relativeTo: this.route });
    }

    onSubmit() {
        this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Hábito criado!'})
        console.log(this.habitoForm.value);
    }
}
