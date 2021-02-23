import { Club } from "./club";

export interface Player {

    _embedded: {
        players: [
        {
    id?:number;
    fullName:string;
    nationality:string;
    country:string;
    club:Club;
    

}]}}