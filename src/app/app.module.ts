import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CongesListComponent } from './conges-list/conges-list.component';
import { CongeService } from './service/conge.service';
import { CongeFormComponent } from './conge-form/conge-form.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RecapCongeComponent } from './recap-conge/recap-conge.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  CongesListComponent,
  CongeFormComponent,
  HeaderComponent,
  RecapCongeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [CongeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
