import { Component, OnInit } from '@angular/core';
import { collegueMock } from '../mock/collegues.mocks';

@Component({
  selector: 'app-collegue-par-nom',
  templateUrl: './collegue-par-nom.component.html',
  styleUrls: ['./collegue-par-nom.component.css']
})
export class CollegueParNomComponent implements OnInit {
  nom:string;
  listMatricule:string[] = new Array();
  constructor() { }

  ngOnInit(): void {
  }
/**
 * recupère la liste des matricules qui macthent avec le nom recherché et valorise l'attribut listMatricule
 */
  recherche() {
    //On vide la liste des matricule avent la recherche pour ne plas poluer les futur recherches
    this.listMatricule = [];
    collegueMock.forEach(collegue => {
      //console.log(this);
      console.log(collegue);
      if (collegue.nom.toUpperCase()===this.nom.toUpperCase()) {
        console.log(collegue);
        this.listMatricule.push(collegue.matricule);
      }
    });
    console.log(this.listMatricule);
  }

}
