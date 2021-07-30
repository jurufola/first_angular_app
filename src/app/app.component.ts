import { Component } from '@angular/core';
import Collegue from './models/Collegue';
import { collegueMock } from './mock/collegues.mocks';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bonjour-angular';

  unObjetColleguefourni: Collegue = this._dataService.recupererCollegueCourant();//= collegueMock[5];
  constructor(private _dataService: DataService) { }

}
