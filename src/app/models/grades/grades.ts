export class Grades {

    gradeId:number ;
    fromMarks : number ; 
    toMarks : number ;
    gradeValue : string
    points: number


    constructor(gradeId:number , fromMarks:number , toMarks:number ,gradeValue : string ,points:number ){
        this.gradeId = gradeId;
        this.fromMarks = fromMarks;
        this.toMarks = toMarks;
        this.gradeValue = gradeValue;
        this.points = points

    }
   
}
