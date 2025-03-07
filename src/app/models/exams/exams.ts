export class Exams {

  examId: Number
  examName: string
  examTerm: string
  examYear: string
  beginDate: string
  submissionDate: string
  examKeyIdentifier:string
  active : boolean


  constructor(  examId: Number ,examName: string,examTerm: string,
    examYear: string, beginDate: string,submissionDate: string,
    examKeyIdentifier : string , active : boolean
  ) {
        this.examId = examId
        this.examName = examName
        this.examTerm = examTerm
        this.examYear = examYear
        this.beginDate = beginDate
        this.submissionDate = submissionDate
        this.examKeyIdentifier = examKeyIdentifier
        this.active = active
  }
}