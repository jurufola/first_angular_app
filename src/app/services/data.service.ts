import { Injectable } from '@angular/core';
import Collegue from '../models/Collegue';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
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

  ajouterCollegue(myForm: FormGroup) {
    const collegue = {
      nom: myForm.get('nom').value,
      prenoms: myForm.get('prenoms').value,
      dateDeNaissance: myForm.get('dateDeNaissance').value,
      email: myForm.get('email').value,
      photoUrl: myForm.get('photoUrl').value,
      matricule: Math.random().toString(20).substr(2, 6)
    }
    console.log(collegue);
    this._http.post(`${this.uri}collegues`, collegue, {responseType: 'text'}).subscribe((data: any) => {
      console.log('data => ' + data);
      myForm.reset();
      },(error: HttpErrorResponse) => {
      console.log("error", error);
      });
  }
}
