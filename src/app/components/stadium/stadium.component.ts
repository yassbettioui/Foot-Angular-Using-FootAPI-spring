import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/models/club';
import { Stadium } from 'src/app/models/stadium';
import { FoootService } from 'src/app/services/fooot.service';

@Component({
  selector: 'app-stadium',
  templateUrl: './stadium.component.html',
  styleUrls: ['./stadium.component.css']
})
export class StadiumComponent implements OnInit {

  resSearch:any;
  stadiums:any;
  stade:Stadium;
  clubs:Club[]=[];
  public searchText='';

  constructor(private foootServ:FoootService) { }

  ngOnInit(): void {
    this.getStadiums();
  }
  getDetailStade(s:Stadium){
     this.stade=s;
    }
   searchStadium(){  
   this.resSearch=this.stadiums._embedded.stadiums.filter((s)=>s.name.toLowerCase().includes(this.searchText.toLowerCase())
 );   } 
getStadiums(){
this.foootServ.getAllStadiums()
.subscribe(data=> {this.resSearch= this.stadiums=data}
  )
}

}

