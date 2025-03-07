export class Student {
    studentId : string;
    firstName: string;
    lastName: string;
    stream: string;
    classLevel: string; // Renamed 'class' to 'classLevel' since 'class' is a reserved keyword in JavaScript/TypeScript
    admissionDate: String;
    gender: string;
    dateOfBirth: string;
    healthConditions: string;
    parentName: string;
    homeContact: string;
    altContact: string;
    admissionType: string;
    previousSchool: string;
  
    constructor(
      studentId :string,
      firstName: string,
      lastName: string,
      stream: string,
      classLevel: string,
      admissionDate: string,
      gender: string,
      dateOfBirth: string,
      healthConditions: string,
      parentName: string,
      homeContact: string,
      altContact: string,
      admissionType: string,
      previousSchool: string
    ) {
      this.studentId = studentId,
      this.firstName = firstName;
      this.lastName = lastName;
      this.stream = stream;
      this.classLevel = classLevel;
      this.admissionDate = admissionDate;
      this.gender = gender;
      this.dateOfBirth = dateOfBirth;
      this.healthConditions = healthConditions;
      this.parentName = parentName;
      this.homeContact = homeContact;
      this.altContact = altContact;
      this.admissionType = admissionType;
      this.previousSchool = previousSchool;
    }
  }
  