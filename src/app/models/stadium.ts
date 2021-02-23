import { Club } from "./club";

export interface Stadium {
   
    id?:number;
    name:string;
    city:string;
    attendence:number;
    clubs:Club[];
 

}