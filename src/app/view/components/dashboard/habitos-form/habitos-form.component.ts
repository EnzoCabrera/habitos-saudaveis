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
import { HabitoService } from '../service/habito.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

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
        ProgressSpinnerModule,
    ],
    templateUrl: './habitos-form.component.html',
    styleUrl: './habitos-form.component.scss',
    providers: [MessageService],
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
        private messageService: MessageService,
        private habitoService: HabitoService
    ) {
        const habito: Habito = this.route.snapshot.data['habito'];

        if (habito.id == null) {
            this.header = 'Novo hábito';
        } else {
            this.header = 'Editar hábito';
        }
    }

    voltar() {
        this.router.navigate(['/dashboard'], { relativeTo: this.route });
    }

    onSubmit() {
        this.habitoService.save(this.habitoForm.value).subscribe({
            next: (response) => {
                console.log(this.habitoForm.value);

                this.messageService.add({
                    severity: 'success',
                    summary: 'Sucesso',
                    detail: 'Hábito criado!',
                });
                console.log('Hábito criado com sucesso.', response);

                setTimeout(() => {
                    this.router.navigate(['dashboard']);
                }, 1000);
            },
            error: (err) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Erro',
                    detail: 'Erro ao cadastrar hábito.',
                });
                console.log('Erro ao realizar cadastro', err);
            },
        });
    }
}
