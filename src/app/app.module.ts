import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SetgradeComponent } from './components/setgrade/setgrade.component';
import { AddClassComponent } from './components/add-class/add-class.component';
import { AddStreamComponent } from './components/add-stream/add-stream.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
import { ViewstudentsComponent } from './components/viewstudents/viewstudents.component';
import { AddWorkersComponent } from './components/add-workers/add-workers.component';
import { ViewworkersComponent } from './components/viewworkers/viewworkers.component';
import { AddrolesComponent } from './components/addroles/addroles.component';
import { AddexamComponent } from './components/addexam/addexam.component';
import { AddmarksComponent } from './components/addmarks/addmarks.component';
import { ViewresultsComponent } from './components/viewresults/viewresults.component';
import { ResetuserpasswordsComponent } from './components/resetuserpasswords/resetuserpasswords.component';
import { InterceptorInterceptor } from './interceptor/interceptor.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,  HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SetgradeComponent,
    AddClassComponent,
    AddStreamComponent,
    AddSubjectComponent,
    AddstudentComponent,
    ViewstudentsComponent,
    AddWorkersComponent,
    ViewworkersComponent,
    AddrolesComponent,
    AddexamComponent,
    AddmarksComponent,
    ViewresultsComponent,
    ResetuserpasswordsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true  // Important: Allows multiple interceptors
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
