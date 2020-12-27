import { PreloadingService } from './shared/preloading.service';
import { Observable } from 'rxjs';
import { AuthService } from './shared/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AuthState } from './store/auth/auth.reducer';
import { selectIsLogin } from './store/auth/auth.selectors';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'my-app';
  isLoggedIn$: Observable<boolean> = this.authService.loginStatusObs;
  isLogin$: Observable<boolean> = this.store$.pipe(select(selectIsLogin));
  isLoading$: Observable<boolean> = this.preloadingService.loading$;

  constructor(
    public authService: AuthService,
    public preloadingService: PreloadingService,
    private store$: Store<AuthState>,
    private translateService: TranslateService
  ){}

  ngOnInit(): void {
    this.translateService.use(environment.defaultLocale);
  }
}
