import { Component, OnInit } from '@angular/core';
import { collegueMock } from '../mock/collegues.mocks';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue-par-nom',
  templateUrl: './collegue-par-nom.component.html',
  styleUrls: ['./collegue-par-nom.component.css']
})
export class CollegueParNomComponent implements OnInit {
  nom:string;
  listMatricule: string[] = new Array();
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

}
