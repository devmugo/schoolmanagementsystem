import { Component } from '@angular/core';
import { ExamDTO } from 'src/app/models/examDTO/exam-dto';
import { Exams } from 'src/app/models/exams/exams';
import { GetservicesService } from 'src/app/services/getService/getservice.service';
import { PostServiceService } from 'src/app/services/postService/post-service.service';

@Component({
  selector: 'app-addexam',
  templateUrl: './addexam.component.html',
  styleUrls: ['./addexam.component.css']
})
export class AddexamComponent {
  constructor(private apiService: PostServiceService , private getService : GetservicesService) {}

  exams: Exams  [] = []
  examdto : ExamDTO = new ExamDTO ("","","","","");
  message:string = ""
  error : string = ""

  ngOnInit(): void {
    this.getExams();  
  }

  onSubmit(form : any):void {
    this.apiService.addExam(this.examdto).subscribe(
      (response) => 
        {
        this.message = "Successfully added  ";          
        window.location.reload(); // Set the response message
      },
      (error) => {          
        this.error = "Not Successful try again " // Handle error
      }
    );
    
  }

  getExams (): void {
    this.getService.getExams().subscribe(
      (data) => {
        this.exams = data;
        console.log("exam status .........." + this.exams[0].active)
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}
