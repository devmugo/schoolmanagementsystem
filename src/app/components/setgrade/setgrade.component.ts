import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Grades } from 'src/app/models/grades/grades';
import { GetservicesService } from 'src/app/services/getService/getservice.service';
import { PostServiceService } from 'src/app/services/postService/post-service.service';

@Component({
  selector: 'app-setgrade',
  templateUrl: './setgrade.component.html',
  styleUrls: ['./setgrade.component.css']
})
export class SetgradeComponent  {
  constructor(private apiService: PostServiceService , private getService : GetservicesService) {}

  grades: Grades[] = [];
  grade = new Grades(0,0,0,"",0)
  message : string = ""
  error : string = ""

  ngOnInit(): void {
    this.getGradingSystem();    
  }
  
  getGradingSystem() : void {
    this.getService.getGradingSystem().subscribe(
      (data) => {
        this.grades = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  onSubmit( form : any): void {
    console.log(this.grade)
      this.apiService.addGrading(this.grade).subscribe(
      (response) => 
          {
            this.message = "Successfully added  ";          
            window.location.reload(); // Set the response message
          },
            (error) => 
          {          
              this.error = "Not Successful try again "
              console.log("Error happened ") // Handle error
          }
          ); 

    }

  }
