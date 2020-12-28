import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreloadingService {
  
  private loading$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loading$: Observable<boolean> = this.loading$$.asObservable();

  constructor() { }

  setLoginStatus(value: boolean): void {
    this.loading$$.next(value);
  }
}
