import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'status',
    standalone: true,
})
export class StatusPipe implements PipeTransform {
    transform(status: string): string {
        if (status == 'Verdadeiro') {
            return 'Concluído';
        }

        return 'Pendente';
    }
}
