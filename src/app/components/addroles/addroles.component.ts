import { Component } from '@angular/core';
import { Roles } from 'src/app/models/roles/roles';
import { GetservicesService } from 'src/app/services/getService/getservice.service';
import { PostServiceService } from 'src/app/services/postService/post-service.service';

@Component({
  selector: 'app-addroles',
  templateUrl: './addroles.component.html',
  styleUrls: ['./addroles.component.css']
})
export class AddrolesComponent {

  role : Roles = new Roles (0,"");
  message : string = ""
  error : string = ""
  constructor(private apiService: PostServiceService , private getService : GetservicesService) {}

  roles : Roles [] = []
  
  ngOnInit(): void {
    this.fetchRoles();
  }

  onSubmit(form: any){ 
        this.apiService.addRole(this.role.roleName).subscribe(
        (response) => 
          {
          this.message = "Successfully added  ";  // Set the response message
        },
        (error) => {          
          this.error = "Not Successful try again " // Handle error
        }
      );    
   
    form.reset()  
    window.location.reload();

  }


  fetchRoles(): void {
    this.getService.getRoles().subscribe(
      (data) => {
        this.roles = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}
