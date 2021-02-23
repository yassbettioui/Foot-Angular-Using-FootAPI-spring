import { Component, OnInit } from '@angular/core';
import { FoootService } from 'src/app/services/fooot.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {
  public confederations;
  public competitions;
  public tournements;
  public currentConf;
  public currentComp;


  constructor(private foootServ:FoootService) { }

  ngOnInit(): void {
    this.getConf();
  }

  public getConf(){
  
    this.foootServ.getAllConfs().
    subscribe(data=>{
      this.confederations=data;
    },error => console.log(error))
}

  onGetComp(cf) {
    this.currentConf=cf;
    this.foootServ.getAllComps(cf).
    subscribe(data=>{
      this.competitions=data;
      this.tournements=null
    },error => console.log(error))
  }

  onGetTourn(cp) {
    this.currentComp=cp;
    this.foootServ.getAllTours(cp).
    subscribe(data=>{
      this.tournements=data;
    },error => console.log(error))
  }
}
