import { Injectable } from '@angular/core';
import Collegue from '../models/Collegue';
import {matricules} from '../mock/liste-matricules.mock';
import { collegueMock } from '../mock/collegues.mocks';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  rechercherParNom(nom: string): string[] {
    // TODO retourner une liste de matricules fictifs à partir du fichier
    //src/app/mock/matricules.mock.ts.
    let listeMatricule:string[] = [];
    Object.keys(matricules).forEach( key=> {
      if (key===nom) listeMatricule = matricules[key];
    }
    );

    return listeMatricule
  }
  recupererCollegueCourant(): Collegue {
    // TODO retourner le collègue fictif à partir du fichier
    //src/app/mock/collegues.mock.ts.


    return collegueMock[5];
  }
}
