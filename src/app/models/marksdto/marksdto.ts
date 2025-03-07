import { Student } from "../student/student";

export class Marksdto {

    subject: number  
    exam : number 
    student: string  
    marks : number 
    

    constructor(  subject: number  , exam : number  , student: string  ,marks : number  ) {
        this.subject = subject;
        this.exam = exam;
        this.student = student ;
        this.marks = marks;
        
    }
}
