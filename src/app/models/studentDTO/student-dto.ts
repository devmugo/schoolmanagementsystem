export class StudentDTO {
        studentId : string 
        firstName : string
        lastName : string
        level :string  
        stream: string 
        dateOfAdmission : string 
        dateOfBirth : string
        gender:string 
        healthConditions : string 
        parentName: string ;
        parentNumber1 : string ;
        parentNumber2: string 
        admType : string 
        prevSchool: string 

    constructor (studentId: string , firstName : string , lastName : string , 
        level:string ,stream :string ,dateOfAdmission : string ,dateOfBirth : string ,gender : string,
        healthConditions : string , parentName : string , parentNumber1 : string ,parentNumber2 : string, 
        admType :string , prevSchool :string ) {
            this.studentId = studentId;
            this.firstName = firstName;
            this.lastName = lastName;
            this.level = level;
            this.stream = stream ;
            this.dateOfAdmission = dateOfAdmission;
            this.dateOfBirth = dateOfBirth;
            this.gender = gender;
            this.healthConditions = healthConditions;
            this.parentName = parentName;
            this.parentNumber1 = parentNumber1;
            this.parentNumber2 = parentNumber2;
            this.admType = admType;
            this.prevSchool = prevSchool;




        }



}
