import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { League } from '../models/league';
import { Club } from '../models/club';
import { Player } from '../models/player';
import { Stadium } from '../models/stadium';

@Injectable({
  providedIn: 'root'
})
export class FoootService {

  private host:string="http://localhost:8081";

  constructor(private http:HttpClient) {}

  public getResources(url: string){
    return this.http.get(this.host+url);
  }
  public getLeagues(){
    return this.http.get<League[]>(this.host+"/leagues");
  }

 public getAllStadiums(){
    return this.http.get<Stadium[]>(this.host+"/stadiums");
  }
  getAllConfs(){
    return this.http.get(this.host+"/confederations");
  }
  getAllComps(cf){
    return this.http.get(cf._links.competitions.href);
  }
  getAllTours(cp){
    return this.http.get(cp._links.tournements.href);
  }
  getClubs(l) {
    return this.http.get<Club[]>(l._links.clubs.href);
  }
  getPlayers(c) {
    return this.http.get<Player[]>(c._links.players.href);
  }
 getPhotosResources(url){
   return this.http.get(url);
 }
}
