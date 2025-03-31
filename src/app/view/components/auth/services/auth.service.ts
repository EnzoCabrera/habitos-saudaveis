import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly _baseUrl: string = 'http://localhost:8080/auth'
    private sessionToken;


    constructor(private http: HttpClient) {
    }

    signup(userData: any): Observable<any> {
        return this.http.post(`${this._baseUrl}/register`, userData);
    }

    login(userData: any): Observable<any> {
        return this.http.post(`${this._baseUrl}/login`, userData);
    }

    getToken() {
        return this.sessionToken = localStorage.getItem('token');
    }

    deletarConta(token) {
        return this.http.delete(`${this._baseUrl}/delete`, token);
    }
}
