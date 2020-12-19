import { BrowserStorageService } from './../storage.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private storageService: BrowserStorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const userToken = this.storageService.get('token');
        if (userToken) {
            const modifiedReq = req.clone({ 
                headers: req.headers.set('Authorization', `Bearer ${userToken}`),
            });
            return next.handle(modifiedReq);
        }
    }
}
