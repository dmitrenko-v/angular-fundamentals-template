import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {SessionStorageService} from "@app/auth/services/session-storage.service";
import {UserDto} from "@app/types/UserDto";

interface LoginResult {
    successful: boolean,
    result: string,
    user: {
        email: string,
        name : string | null
    }
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private url = "http://localhost:4000";
    private isAuthorized$$ = new BehaviorSubject<boolean>(false);
    public isAuthorized$ = this.isAuthorized$$.asObservable();

    constructor(
        private httpClient: HttpClient,
        private sessionStorageService: SessionStorageService) {
    }

    login(user: UserDto) {
        this.httpClient.post<LoginResult>(this.getLoginUrl(), user).subscribe((res) => {
            if (res.successful) {
                this.isAuthorised = true
                const token = res.result.split(" ")[1]
                this.sessionStorageService.setToken(token)
            }
        });
    }

    logout() {
        this.httpClient.delete(`${this.url}/logout`)
        this.sessionStorageService.deleteToken();
        this.isAuthorised = false;
    }

    register(user: UserDto) {
        this.httpClient.post(`${this.url}/register`, user);
    }

    get isAuthorised() {
        return this.sessionStorageService.getToken() != null
    }

    set isAuthorised(value: boolean) {
        this.isAuthorized$$.next(value);
    }

    getLoginUrl() {
        return `${this.url}/login`;
    }
}
