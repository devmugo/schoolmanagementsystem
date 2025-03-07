export class HumanResource {   
  nationalId: string
  firstName: string
  lastName: string
  email: string
  empNo: string
  role: string
  admDate: string
  gender: string
  dateOfBirth: string
  homeAddress: string
  mainContact: string
  otherContact: string

  constructor(nationalId: string , firstName: string,  lastName: string,  email: string,
     empNo: string,role: string, admDate: string, gender: string, dateOfBirth: string,
      homeAddress: string, mainContact: string,  otherContact: string ){
        this.nationalId = nationalId 
        this.firstName = firstName
        this.lastName = lastName 
        this.email = email 
        this.empNo = empNo 
        this.role = role; 
        this.admDate = admDate 
        this.gender = gender 
        this.dateOfBirth = dateOfBirth 
        this.homeAddress = homeAddress 
        this.mainContact = mainContact 
        this.otherContact = otherContact 

      }
}
