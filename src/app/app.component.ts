import { Component } from '@angular/core';
import Collegue from './models/Collegue';
import { collegueMock } from './mock/collegues.mocks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bonjour-angular';
  unObjetColleguefourni: Collegue = collegueMock[5];
}
