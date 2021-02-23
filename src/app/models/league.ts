import { Club } from "./club";

export interface League {
    _embedded: {
        leagues: [
        {
    id?:number;
    name:string;
    numberOfTeams:number;
    clubs:Club[];

    

        }]}}