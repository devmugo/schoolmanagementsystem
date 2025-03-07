import { Component } from '@angular/core';
import { Forms } from 'src/app/models/class_levels/forms';
import { Streams } from 'src/app/models/streams/streams';
import { GetservicesService } from 'src/app/services/getService/getservice.service';
import { PostServiceService } from 'src/app/services/postService/post-service.service';

@Component({
  selector: 'app-add-stream',
  templateUrl: './add-stream.component.html',
  styleUrls: ['./add-stream.component.css']
})
export class AddStreamComponent {
  constructor(private apiService: PostServiceService , private getService : GetservicesService) {}
  form : Forms = new Forms(0,"")
  stream : Streams = new Streams(0,"",this.form);
  streams : Streams[] = [] ;
  classes : Forms [] = []  ;
  message: string = "";
  error : string = "";

  ngOnInit(): void {
    this.getClasses();
    this.getStreams();
  
  }

  onSubmit(form : any ):void {    
    this.apiService.addStream(this.stream.level.levelId, this.stream.stream_name).subscribe(
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

  getClasses() : void {
    this.getService.getClasses().subscribe(
      (data) => {
        this.classes = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  getStreams() : void {
    this.getService.getStreams().subscribe(
      (data) => {
        this.streams = data;       
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  



}
