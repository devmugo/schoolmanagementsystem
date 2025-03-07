import { Component } from '@angular/core';
import { Forms } from 'src/app/models/class_levels/forms';
import { Exams } from 'src/app/models/exams/exams';
import { Marksdto } from 'src/app/models/marksdto/marksdto';
import { Streams } from 'src/app/models/streams/streams';
import { Student } from 'src/app/models/student/student';
import { Studmarks } from 'src/app/models/Studmarks/studmarks';
import { Subject } from 'src/app/models/subject/subject';
import { GetservicesService } from 'src/app/services/getService/getservice.service';
import { PostServiceService } from 'src/app/services/postService/post-service.service';


@Component({
  selector: 'app-addmarks',
  templateUrl: './addmarks.component.html',
  styleUrls: ['./addmarks.component.css']
})
export class AddmarksComponent {
  constructor(private apiService: PostServiceService , private getService : GetservicesService) {}

  levels : Forms [] = []
  streams : Streams [] = []
  subjects : Subject[] = []
  students : Studmarks[] = []
  exams : Exams [] = []
  marksdto : Marksdto = new Marksdto(0,0,"",0)  
  
 
  level : Forms  = new Forms (0,"")
  stream : Streams = new Streams(0,"",this.level)

  ngOnInit() : void {
    this.getClasses()
    this.getSubjects()
    this.getActiveExams()
  }

  getClasses() : void {
    this.getService.getClasses().subscribe(
      (data) => {
        this.levels = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  onSelectChange(event: Event): void { 
    
    this.getService.getClassStreams(Number(this.level.levelName)).subscribe(
      (data) => {
        this.streams = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
    
  }

  getSubjects (): void {
    this.getService.getSubjects().subscribe(
      (data) => {
        this.subjects = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  getActiveExams () : void {
    this.getService.getActiveExams().subscribe(
      (data) => {
        this.exams = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
 

  onSubmit(form : any ):void {

    this.getService.getStudentByStream( Number(this.stream.stream_name)).subscribe(
      (data) => {
        this.students = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );

  }

  addmarksandGrade(student : Studmarks) {   
    this.marksdto.marks = student.marks
    this.marksdto.student = student.studentId    
    
    this.apiService.addmarksandGrade(this.marksdto ).subscribe( {
      next: (response) => {        
        student.grade = response; // Save the response in a variable
        console.log(student.grade)
        
    },
    error: (err) => {
        
    }

  }
    );
    

  }

}
