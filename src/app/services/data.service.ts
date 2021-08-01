import { Injectable } from '@angular/core';
import Collegue from '../models/Collegue';
import {matricules} from '../mock/liste-matricules.mock';
import { collegueMock } from '../mock/collegues.mocks';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  uri = environment.backendUrl;
  constructor(private _http: HttpClient) { }
  rechercherParNom(nom: string): Observable<string[]> {
    // TODO retourner une liste de matricules fictifs à partir du fichier
    //src/app/mock/matricules.mock.ts.
    /*let listeMatricule:string[] = [];
      Object.keys(matricules).forEach( key=> {
      if (key===nom) listeMatricule = matricules[key];
    }
    );*/

    return this._http.get<string[]>(`${this.uri}collegues/?nom=${nom}`);
  }
  recupererCollegueCourant(): Collegue {
    // TODO retourner le collègue fictif à partir du fichier
    //src/app/mock/collegues.mock.ts.


    return collegueMock[0];
  }
}
