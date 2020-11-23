import { FirstLetterCasePipe } from './first-letter-case.pipe';
import { CoursesModule } from './courses/courses.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AppRoutingModule } from './app-routing.module';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    FirstLetterCasePipe,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoursesModule,
    AppRoutingModule,
    McBreadcrumbsModule.forRoot()
  ],
  providers: [FirstLetterCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
