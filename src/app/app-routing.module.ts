import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionComponent } from './components/competition/competition.component';
import { StadiumComponent } from './components/stadium/stadium.component';
import {FoootComponent} from './fooot/fooot.component';

const routes: Routes = [
  {path: "index",component:FoootComponent},
  {path: "stadiums",component:StadiumComponent},
  {path: "competitions",component:CompetitionComponent},
  {path:"",component:FoootComponent,pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
