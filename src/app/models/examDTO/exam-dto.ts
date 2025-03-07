export class ExamDTO { 
        
        examName: string
        examTerm: string
        examYear: string
        beginDate: string
        submissionDate: string
      
      
        constructor( examName: string,examTerm: string,examYear: string, 
            beginDate: string,submissionDate: string) {              
              this.examName = examName
              this.examTerm = examTerm
              this.examYear = examYear
              this.beginDate = beginDate
              this.submissionDate = submissionDate
        }
      }

