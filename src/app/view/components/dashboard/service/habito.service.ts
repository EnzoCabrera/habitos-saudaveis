import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { Habito } from '../model/habito';

@Injectable({
    providedIn: 'root',
})
export class HabitoService {
    private readonly _baseUrl: string = 'http://localhost:8080/habits';

    constructor(private http: HttpClient) {}

    list(): Observable<Habito[]> {
        return this.http.get<Habito[]>(`${this._baseUrl}/list`).pipe(first());
    }

    loadById(id: number): Observable<Habito> {
        return this.http
            .get<Habito>(`${this._baseUrl}/${id}`)
            .pipe(first());
    }

    save(habito: Partial<Habito>): Observable<Habito> {
        if (habito.id) {
            return this.update(habito);
        }
        return this.create(habito);
    }

    remove(id: string) {
        return this.http.delete(`${this._baseUrl}/delete/${id}`).pipe(first());
    }

    private create(habito: Partial<Habito>): Observable<Habito> {
        return this.http
            .post<Habito>(`${this._baseUrl}/create`, habito)
            .pipe(first());
    }

    private update(habito: Partial<Habito>): Observable<Habito> {
        return this.http
            .put<Habito>(`${this._baseUrl}/update/${habito.id}`, habito)
            .pipe(first());
    }
}
