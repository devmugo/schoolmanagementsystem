import { Component, OnInit } from '@angular/core';
import { HumanResource } from 'src/app/models/hr/human-resource';
import { GetservicesService } from 'src/app/services/getService/getservice.service';
import { PostServiceService } from 'src/app/services/postService/post-service.service';

@Component({
  selector: 'app-add-workers',
  templateUrl: './add-workers.component.html',
  styleUrls: ['./add-workers.component.css']
})
export class AddWorkersComponent implements OnInit{

  constructor(private apiService: PostServiceService , private getService : GetservicesService) {}
  worker : HumanResource = new HumanResource("","","","","","","","","","","","")
  message : string = ""
  error : string  = ""

  ngOnInit(): void {
    
  }

onSubmit (form : any) {
  this.apiService.adduser(this.worker).subscribe(
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

}
