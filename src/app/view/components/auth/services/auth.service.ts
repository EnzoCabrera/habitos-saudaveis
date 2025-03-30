import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrlRegister = 'http://localhost:8080/auth/register';
    private apiUrlLogin = 'http://localhost:8080/auth/login';

    constructor(private http: HttpClient) {
    }

    signup(userData: any): Observable<any> {
        return this.http.post(this.apiUrlRegister, userData);
    }

    login(userData: any): Observable<any> {
        return this.http.post(this.apiUrlLogin, userData);
    }
}
