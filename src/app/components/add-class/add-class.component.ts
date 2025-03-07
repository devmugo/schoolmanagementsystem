import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Forms } from 'src/app/models/class_levels/forms';
import { GetservicesService } from 'src/app/services/getService/getservice.service';
import { PostServiceService } from 'src/app/services/postService/post-service.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent {

  constructor(private apiService: PostServiceService , private getService : GetservicesService) {}

  class_list :Forms[] = []
  class_name = new Forms(0 , '');
  message : string = ''
  error : string = ''

  ngOnInit(): void {
    this.getClasses();
  }


  onSubmit(form : any) : void {
    
    this.apiService.addClass(this.class_name.levelName).subscribe(
      (response) => 
        {
        this.message = "Successfully added  "; 
        form.reset()  
        window.location.reload(); // Set the response message
      },
      (error) => {          
        this.error = "Not Successful try again " // Handle error
      }
    );    
 
  
  }

  getClasses() : void {
    this.getService.getClasses().subscribe(
      (data) => {
        this.class_list = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }


}
