import { AuthGuardService } from './shared/auth/auth-guard.service';
import { FormCourseModule } from './courses/form-course/form-course.module';
import { CourseModule } from './courses/course/course.module';
import { LoginPageModule } from './login-page/login-page.module';
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
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    FirstLetterCasePipe,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoursesModule,
    CourseModule,
    AppRoutingModule,
    LoginPageModule,
    McBreadcrumbsModule.forRoot()
  ],
  providers: [FirstLetterCasePipe, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
