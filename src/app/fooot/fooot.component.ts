import { Component, OnInit } from '@angular/core';
import { Club } from '../models/club';
import { League } from '../models/league';
import { Player } from '../models/player';
import {FoootService} from '../services/fooot.service';

@Component({
  selector: 'app-fooot',
  templateUrl: './fooot.component.html',
  styleUrls: ['./fooot.component.css']
})
export class FoootComponent implements OnInit {
  public ligues:League[];
  public clubs:Club[];
  public players:Player[];
  public player;
  public currentLeague:League;
  public currentClub:Club;
  public currentPlayer:Player;
  constructor(private foootServ:FoootService) { }

  ngOnInit(): void {
   this.getLeagues();
  }
public getLeagues(){
  
    this.foootServ.getLeagues().
    subscribe(data=>{
      this.ligues=data;
      this.player=null;
    },error => console.log(error))
}

  onGetClubs(l:League) {
    this.currentLeague=l;
    this.foootServ.getClubs(l).
    subscribe(data=>{
      this.clubs=data;
      this.players=null
      this.player=null
    },error => console.log(error))
  }

  onGetPlayers(c:Club) {
    this.currentClub=c;
    this.player=null;
    this.foootServ.getPlayers(c).
    subscribe(data=>{
      this.players=data;
    },error => console.log(error))
  }
  getDetailPlayer(p){
    this.currentPlayer =p;
    this.player=p;
  }
}
