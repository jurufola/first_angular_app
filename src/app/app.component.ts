import { Component } from '@angular/core';
import Collegue from './models/Collegue';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Administration Collègue';

  unObjetColleguefourni: Collegue //= collegueMock[5];
  constructor(private _dataService: DataService) {
    //au chargement du composant on recupere le collegue de matricule 001
    this._dataService.recupererCollegueCourant('001').subscribe(data =>{
      console.log("constructeur App : data.nom " + data.nom);
      this.unObjetColleguefourni = data;
    });
   }
   /**
    *
    * @param mat  Met à jour le collegue passé au composant CollegueComponent
    * grace à la soubscription de l'oberservable de type collegue retoruné
    * par la methode de service recupererCollegueCourant
    */
   affichCollegue(mat: string){
      this._dataService.recupererCollegueCourant(mat).subscribe(data => {
        this.unObjetColleguefourni = data;
      });
   }
}
