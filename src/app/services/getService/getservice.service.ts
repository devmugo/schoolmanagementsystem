import { Injectable } from '@angular/core';
import { HttpClient  , HttpParams,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Forms } from 'src/app/models/class_levels/forms';
import { Streams } from 'src/app/models/streams/streams';
import { Grades } from 'src/app/models/grades/grades';
import { Subject } from 'src/app/models/subject/subject';
import { Exams } from 'src/app/models/exams/exams';
import { Student } from 'src/app/models/student/student';
import { Studmarks } from 'src/app/models/Studmarks/studmarks';

@Injectable({
  providedIn: 'root'
})
export class GetservicesService {
  apiUrl : string = ""

  constructor(private http: HttpClient) { }

  getRoles(): Observable<any[]> {
    this.apiUrl = "http://localhost:8080/api/v1/users/viewRoles"
    return this.http.get<any[]>(this.apiUrl);
  }
  getClasses() : Observable<any []> {
    this.apiUrl = "http://localhost:8080/api/v1/students/getClasses"
    return this.http.get<any[]> (this.apiUrl);
  }

  getStreams() : Observable< Streams[]> {
    this.apiUrl = "http://localhost:8080/api/v1/students/getStreams"
    return this.http.get<Streams[]> (this.apiUrl);
  }

  getGradingSystem(): Observable<Grades []> {
    this.apiUrl = "http://localhost:8080/api/v1/students/getGrades"
    return this.http.get<Grades[]> (this.apiUrl)
  }

  getSubjects(): Observable<Subject []> {
    this.apiUrl = "http://localhost:8080/api/v1/students/getSubjects"
    return this.http.get<Subject[]> (this.apiUrl)
  }

   getClassStreams (Id:number ): Observable< Streams []> {
      let params = new HttpParams().set('Id', Id );
      this.apiUrl = "http://localhost:8080/api/v1/students/getClassStreams"
      return this.http.get<Streams []>(this.apiUrl, { params: params} );

   }

   getExams (): Observable< Exams []> {    
    this.apiUrl = "http://localhost:8080/api/v1/students/getExams"
    return this.http.get<Exams []>(this.apiUrl);

 }
 getActiveExams(): Observable<Exams []> {
  this.apiUrl = "http://localhost:8080/api/v1/students/getActiveExams"
    return this.http.get<Exams []>(this.apiUrl);
 }

 getStudentByStream(streamId : number) : Observable <Studmarks []> {
  let params = new HttpParams().set('streamId', streamId );
  this.apiUrl = "http://localhost:8080/api/v1/students/getStudentsByStream"
  return this.http.get<Studmarks []>(this.apiUrl , { params: params});
 }
}
