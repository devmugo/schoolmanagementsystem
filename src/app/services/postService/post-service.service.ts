import { Injectable } from '@angular/core';
import { HttpClient , HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grades } from 'src/app/models/grades/grades';
import { Subject } from 'src/app/models/subject/subject';
import { StudentDTO } from 'src/app/models/studentDTO/student-dto';
import { Exams } from 'src/app/models/exams/exams';
import { ExamDTO } from 'src/app/models/examDTO/exam-dto';
import { Marksdto } from 'src/app/models/marksdto/marksdto';
import { HumanResource } from 'src/app/models/hr/human-resource';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  private apiUrl = '';  // Replace with your backend API URL
 

  constructor(private http: HttpClient) { }

  // POST request method
  addRole(role: string ): Observable<any> {
    let params = new HttpParams().set('role', role);
    this.apiUrl = "http://localhost:8080/api/v1/users/addRole"  

    return this.http.post<any>(this.apiUrl, role , { params: params} );  // Send a POST request with data
  }

  addClass (level:string): Observable<any> {
    let params = new HttpParams().set('levelName', level);
    this.apiUrl = "http://localhost:8080/api/v1/students/addLevel"
    return this.http.post<any>(this.apiUrl, null , { params: params} );


  }

  addStream (classId:number , streamName:string ): Observable<any> {
    let params = new HttpParams().set('classId', classId ).set('streamName',streamName);
    this.apiUrl = "http://localhost:8080/api/v1/students/addStream"
    return this.http.post<any>(this.apiUrl, null , { params: params} );


  }

  addGrading (grade: Grades): Observable <any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json' });
    this.apiUrl = "http://localhost:8080/api/v1/students/addGrade"    
    return this.http.post(this.apiUrl,grade)
  }

  addSubject (subject : Subject) : Observable <any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json' });
    this.apiUrl = "http://localhost:8080/api/v1/students/addSubject"  
    return this.http.post(this.apiUrl,subject)

    
  }

  addStudent (student : StudentDTO) : Observable <any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json' });
    this.apiUrl = "http://localhost:8080/api/v1/students/addStudent"  
    return this.http.post(this.apiUrl,student)

  }

  addExam (examdto : ExamDTO) : Observable <any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json' });
    this.apiUrl = "http://localhost:8080/api/v1/students/addExam"  
    return this.http.post(this.apiUrl,examdto)

  }

  addmarksandGrade(marksdto : Marksdto): Observable< string > {
    const headers = new HttpHeaders({'Content-Type': 'application/json' });
    this.apiUrl = "http://localhost:8080/api/v1/students/addMarks"  
    return this.http.post<string>(this.apiUrl,marksdto,{ responseType: 'text' as 'json' })

  }

  generateScoreSheet(examCode : number , streamCode : number ): Observable<any[]> {
    let params = new HttpParams().set('examCode', examCode ).set('streamCode',streamCode);
    this.apiUrl = "http://localhost:8080/api/v1/students/generateResult" 
    return this.http.get< any []>(this.apiUrl,{ params: params});
  }

  adduser(worker  : HumanResource) : Observable <any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json' });
    this.apiUrl = "http://localhost:8080/api/v1/users/register"  
    return this.http.post(this.apiUrl,worker)

  }
}

