export class SubjresultDTO {
    subjectName: string 
    marks: string 
    points: number 

    constructor( subjectName: string , marks: string , points: number, )  {
        this.subjectName  = subjectName
        this.marks = marks
        this.points = points
    }
}
