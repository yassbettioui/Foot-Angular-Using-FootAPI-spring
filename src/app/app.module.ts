import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoootComponent } from './fooot/fooot.component';
import {HttpClientModule} from '@angular/common/http';
import { StadiumComponent } from './components/stadium/stadium.component';
import { DetailStadeComponent } from './components/detail-stade/detail-stade.component';
import { FormsModule } from '@angular/forms';
import { CompetitionComponent } from './components/competition/competition.component';

@NgModule({
  declarations: [
    AppComponent,
    FoootComponent,
    StadiumComponent,
    DetailStadeComponent,
    CompetitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
