import { Author } from './authors.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ROOT_URL } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';

const AUTHOR_URL = `${ROOT_URL}authors/`;

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  authors: Author[] = [];
  constructor(private http: HttpClient) { }

  getAll(options?: object): Observable<object> {
    let url = AUTHOR_URL;
    if(options && Object.entries(options).length > 0) {
        url += `?${Object.entries(options).map(item => item.join('=')).join('&')}`;
    }

    return this.http.get(url);
}
}
