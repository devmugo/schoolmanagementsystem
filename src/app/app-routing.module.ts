import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { authGuard } from './guards/AuthGuard/guard.guard';
import { roleGuard } from './guards/roleGuard/roleguard.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent  },   
  { path: 'dashboard', component: DashboardComponent, canActivate:[authGuard ]},
  { path: 'addgrade', component: SetgradeComponent ,canActivate:[authGuard , roleGuard],data: {expectedRole: 'admin' }},
  { path: 'addclass', component: AddClassComponent ,canActivate:[authGuard , roleGuard],data: {expectedRole: 'admin' } },
  { path: 'addstream', component: AddStreamComponent ,canActivate:[authGuard , roleGuard],data: {expectedRole: 'admin' }},
  { path: 'addsubject', component: AddSubjectComponent ,canActivate:[authGuard , roleGuard],data: {expectedRole: 'admin' } },
  { path: 'addstudent', component: AddstudentComponent ,canActivate:[authGuard , roleGuard],data: {expectedRole: 'admin' } },
  { path: 'viewstudents', component: ViewstudentsComponent, canActivate:[authGuard ]},
  { path: 'addworker', component: AddWorkersComponent ,canActivate:[authGuard , roleGuard],data: {expectedRole: 'admin' }},
  { path: 'viewworkers', component: ViewworkersComponent,canActivate:[authGuard , roleGuard],data: {expectedRole: 'admin' } },
  { path: 'addroles', component: AddrolesComponent ,canActivate:[authGuard , roleGuard],data: {expectedRole: 'admin' }},
  { path: 'createexam', component: AddexamComponent ,canActivate:[authGuard , roleGuard],data: {expectedRole: 'admin' }},
  { path: 'addmarks', component: AddmarksComponent ,canActivate:[authGuard , roleGuard],data: {expectedRole: 'teacher' }},
  { path: 'viewresults', component: ViewresultsComponent ,canActivate:[authGuard , roleGuard],data: {expectedRole: 'teacher' }},
  { path: 'resetuserpassword', component: ResetuserpasswordsComponent ,canActivate:[authGuard , roleGuard],data: {expectedRole: 'admin' }},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
