import { SubjresultDTO } from "../subjresultDTO/subjresult-dto"

export class StuderesultDTO {
    id:string 
    name:string 
    subjects: SubjresultDTO

    constructor( id:string , name:string ,  subjects: SubjresultDTO){
        this.id = id
        this.name = name 
        this.subjects = subjects
    }
     


}
