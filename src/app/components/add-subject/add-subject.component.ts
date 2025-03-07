import { Component } from '@angular/core';
import { Subject } from 'src/app/models/subject/subject';
import { GetservicesService } from 'src/app/services/getService/getservice.service';
import { PostServiceService } from 'src/app/services/postService/post-service.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent {
   constructor(private apiService: PostServiceService , private getService : GetservicesService) {}

  subject : Subject = new Subject('','');
  subjects : Subject[] = []
  message:string = ""
  error : string = ""

  ngOnInit(): void {
    this.getSubjects();  
  }


  

  
  onSubmit(form : any):void {
    this.apiService.addSubject(this.subject).subscribe(
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

  
}
