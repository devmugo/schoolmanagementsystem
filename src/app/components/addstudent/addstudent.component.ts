import { Component } from '@angular/core';
import { Forms } from 'src/app/models/class_levels/forms';
import { Streams } from 'src/app/models/streams/streams';
import { Student } from 'src/app/models/student/student';
import { StudentDTO } from 'src/app/models/studentDTO/student-dto';
import { GetservicesService } from 'src/app/services/getService/getservice.service';
import { PostServiceService } from 'src/app/services/postService/post-service.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent {

  constructor(private apiService: PostServiceService , private getService : GetservicesService) {}
  studentModel = new Student("","","","","","","","","","","","","","")
  studDTO : StudentDTO = new StudentDTO ("","","","","","","","","","","","","","")
  classList : Forms[] =  []
  streamList : Streams[] = []
  message : string = ""
  error : string = ''

  ngOnInit(): void {
    this.getClasses();
  }
  onSelectChange(event: Event): void {    
    this.getService.getClassStreams(Number(this.studDTO.level)).subscribe(
      (data) => {
        this.streamList = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
    
  }

  onSubmit(form : any): void {
    this.apiService.addStudent(this.studDTO).subscribe(
      (response) => 
        {
        this.message = "Successfully added  ";       
         // Set the response message
      },
      (error) => {          
        this.error = "Not Successful try again " // Handle error
      }
    );

  }

  getClasses() : void {
    this.getService.getClasses().subscribe(
      (data) => {
        this.classList = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}
