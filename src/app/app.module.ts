import { reducers, metaReducers } from './store/index';
import { AddCourseModule } from './courses/add-course/add-course.module';
import { AuthGuardService } from './shared/auth/auth-guard.service';
import { CourseModule } from './courses/course/course.module';
import { LoginPageModule } from './login-page/login-page.module';
import { FirstLetterCasePipe } from './first-letter-case.pipe';
import { CoursesModule } from './courses/courses.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AppRoutingModule } from './app-routing.module';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';
import { MainComponent } from './main/main.component';
import { TokenInterceptor } from './shared/auth/auth.inceptor';
import { PreloadingComponent } from './preloading/preloading.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AppEffects } from './app.effects';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    FirstLetterCasePipe,
    MainComponent,
    PreloadingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoursesModule,
    CourseModule,
    AppRoutingModule,
    LoginPageModule,
    AddCourseModule,
    HttpClientModule,
    ReactiveFormsModule,
    McBreadcrumbsModule.forRoot(),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    FirstLetterCasePipe,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
