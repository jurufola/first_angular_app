import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue-par-nom',
  templateUrl: './collegue-par-nom.component.html',
  styleUrls: ['./collegue-par-nom.component.css']
})
export class CollegueParNomComponent implements OnInit {
  nom:string;
  listMatricule: string[] = new Array();
  @Output() callEvent: EventEmitter<string> = new EventEmitter<string>(); // emetteur d'evenement
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
  }
/**
 * recupère la liste des matricules qui macthent avec le nom recherché et valorise l'attribut listMatricule
 */
  recherche() {
    //On vide la liste des matricule avent la recherche pour ne plas poluer les futur recherches
     this._dataService.rechercherParNom(this.nom)
     .subscribe((data: string[]) => {
          this.listMatricule = data;
          console.log(this.listMatricule);
     });
  }
/**
 * Envoie le matricule du collègué à charger au composant parent c'est à dire AppComponant
 * afin de valoriser l'attribut un unObjetColleguefourni qui sera à son tour passé au composant CollegueComponent
 * @param matricule
 */
  sendMatricule(matricule: string) {
    this.callEvent.emit(matricule);
  }
}
