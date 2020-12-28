import { PreloadingService } from './../preloading.service';
import { BrowserStorageService } from './../storage.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private storageService: BrowserStorageService, private preloading: PreloadingService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const userToken = this.storageService.get('token');
        this.preloading.setLoginStatus(true);
        req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') })
        return next.handle(
            userToken ? 
            req.clone({ headers: req.headers.set('Authorization', `Bearer ${userToken}`) }) :
            req)
            .pipe(
                finalize(() => {
                    this.preloading.setLoginStatus(false);
                })
            );
    }
}
