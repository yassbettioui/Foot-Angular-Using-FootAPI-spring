import { League } from "./league";
import { Player } from "./player";
import { Stadium } from "./stadium";

export interface Club {

    _embedded: {
        clubs: [
        {
             id?:number;
             name:string;
             coach:string;
             country:string;
             players:Player[];
             league:League;
             stadium:Stadium;

         }         ]
}}