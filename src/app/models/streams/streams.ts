import { Form } from "@angular/forms";
import { Forms } from "../class_levels/forms";

export class Streams {
    stream_id : number;   
    stream_name : string;
    level: Forms;
  
    constructor(stream_id: number, stream_name: string,level : Forms) {
      this.stream_id =  stream_id;
      this.stream_name = stream_name;
      this.level = level;
    }
  }
  