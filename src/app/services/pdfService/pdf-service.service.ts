import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Injectable({
  providedIn: 'root'
})
export class PdfServiceService {
      pdftitle :string = " Form 1 North Score Sheet "
      subjects : string [] = []

  constructor() { }


  generatePdfWithTable(ResultList: any[]) {
    const doc = new jsPDF({
      orientation: 'landscape', 
      unit: 'mm',
      format: 'a4'
    });;



    const pageWidth = doc.internal.pageSize.getWidth();
    const textWidth = doc.getTextWidth(this.pdftitle);
    const x = (pageWidth - textWidth) / 2;
    doc.text(this.pdftitle, x, 8);      
    
    this.subjects = ResultList
    .map(student => student.subjects.map((subject: { subjectName: any; }) => subject.subjectName))  // Get array of arrays
    .flat();

    this.subjects = Array.from(new Set(this.subjects));
    const headerRow = ["Name","Adm No" ,...this.subjects , "Total", "Points" , "Grade"];
    

    const bodyRows = ResultList.map(student => {
      const row = [student.name];
      row.push([student.id ])
      this.subjects.forEach(subject => {
        const foundSubject = student.subjects.find((s: { subjectName: string; }) => s.subjectName === subject);
        row.push(foundSubject ? foundSubject.marks : '-');
      });
      return row;
    });

    autoTable(doc, {
      head: [headerRow],
      body:bodyRows       
      
    });


    doc.save('table-sample.pdf');
  }
  
}
