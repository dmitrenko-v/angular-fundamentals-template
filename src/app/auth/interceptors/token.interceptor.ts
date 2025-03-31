import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";
import {AuthService} from "@app/auth/services/auth.service";
import {SessionStorageService} from "@app/auth/services/session-storage.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private sessionService: SessionStorageService) {
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.sessionService.getToken();
        
        return next.handle(req.clone({headers: req.headers.set("Authorization", `Bearer ${token}`)}));
    }
}
