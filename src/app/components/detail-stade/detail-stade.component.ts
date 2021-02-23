import { Component, OnInit } from '@angular/core';
import { FoootService } from 'src/app/services/fooot.service';

@Component({
  selector: 'app-detail-stade',
  templateUrl: './detail-stade.component.html',
  styleUrls: ['./detail-stade.component.css']
})
export class DetailStadeComponent implements OnInit {
stade:any;
  constructor(private foootServ:FoootService) { }

  ngOnInit(): void {

  }
 
}
