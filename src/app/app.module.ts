import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BonjourComponent } from './bonjour/bonjour.component';
import { BonjourAvecPrenomComponent } from './bonjour-avec-prenom/bonjour-avec-prenom.component';
import { CollegueComponent } from './collegue/collegue.component';
import { CollegueParNomComponent } from './collegue-par-nom/collegue-par-nom.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    BonjourComponent,
    BonjourAvecPrenomComponent,
    CollegueComponent,
    CollegueParNomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
