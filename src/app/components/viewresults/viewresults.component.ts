import { Component } from '@angular/core';
import { Forms } from 'src/app/models/class_levels/forms';
import { Exams } from 'src/app/models/exams/exams';
import { Streams } from 'src/app/models/streams/streams';
import { GetservicesService } from 'src/app/services/getService/getservice.service';
import { PostServiceService } from 'src/app/services/postService/post-service.service';
import { PdfServiceService } from 'src/app/services/pdfService/pdf-service.service';
import { StuderesultDTO } from 'src/app/models/studeresultDTO/studeresult-dto';

@Component({
  selector: 'app-viewresults',
  templateUrl: './viewresults.component.html',
  styleUrls: ['./viewresults.component.css']
})
export class ViewresultsComponent {

  constructor(private apiService: PostServiceService , private getService : GetservicesService , private pdfservice : PdfServiceService ) {}

  streams : Streams[] = []
  levels : Forms [] = []
  exams : Exams [] = []
  level : string = ""
  stream : number  = 0
  exam : number = 0
  ResultList: StuderesultDTO[] = [];

  ngOnInit(){
    this.getClasses()
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
    this.getService.getClassStreams(Number(this.level)).subscribe(
      (data) => {
        this.streams = data;
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

  onSubmit(form : any){
    this.apiService.generateScoreSheet(this.exam , this.stream).subscribe(
      (data) => {
        this.ResultList = data;
        console.log(this.ResultList.length)
        this.pdfservice.generatePdfWithTable(this.ResultList)       

      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  }


