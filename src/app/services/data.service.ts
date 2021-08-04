import { Injectable } from '@angular/core';
import Collegue from '../models/Collegue';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  uri = environment.backendUrl;
  constructor(private _http: HttpClient) { }
  /**
   * Retourne un Obersable de tableau de string
   * sur une liste de matricules matchantes avec le nom
   * @param nom
   * @returns
   */
  rechercherParNom(nom: string): Observable<string[]> {

    /*let listeMatricule:string[] = [];
      Object.keys(matricules).forEach( key=> {
      if (key===nom) listeMatricule = matricules[key];
    }
    );*/

    return this._http.get<string[]>(`${this.uri}collegues/?nom=${nom}`);
  }
  /**
   *
   * @param mat  Retourne un observable de type Collegue
   * sur le collègue matchant avec la matricule
   * @returns
   */
  recupererCollegueCourant(mat: string): Observable<Collegue> {
    return this._http.get<Collegue>(`${this.uri}collegues/${mat}`);
  }
}
