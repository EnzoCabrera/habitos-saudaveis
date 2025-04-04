import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, EMPTY, map, Observable } from 'rxjs';

export interface UserData {
    email: string;
    token: string;
}

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private readonly _baseUrl: string = 'http://localhost:8080/auth';

    constructor(private http: HttpClient) {}

    signup(userData: any): Observable<any> {
        return this.http.post(`${this._baseUrl}/register`, userData);
    }

    login(userData: any): Observable<any> {
        return this.http.post(`${this._baseUrl}/login`, userData);/* .pipe(
            map((response: UserData) => {

                this.deleteToken();

                this.sessionToken = response.token;

                this.setToken(this.sessionToken);

                this.isAuthenticated = true;
            }),
            catchError((e) => {
                console.log(e);
                return EMPTY;
            })
        );*/
    }

    logout() {
        this.deleteToken();
    }

    setToken(token: string) {
        localStorage.setItem('token', token);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    deleteToken() {
        localStorage.removeItem('token');
    }

    deletarConta(token) {
        return this.http.delete(`${this._baseUrl}/delete`, token);
    }
}
