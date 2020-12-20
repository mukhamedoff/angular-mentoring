import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreloadingService {
  
  private loadingStatusSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loadingStatusObs: Observable<boolean> = this.loadingStatusSubject.asObservable();

  constructor() { }

  setLoginStatus(value: boolean): void {
    this.loadingStatusSubject.next(value);
  }
}
