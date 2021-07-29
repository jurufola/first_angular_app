import { Component, Input, OnInit } from '@angular/core';
import Collegue from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  showEmailInputfield: boolean = false;
  @Input() col:Collegue;
  constructor() { }

  ngOnInit(): void {
  }

  modif(): void{
    console.log("Je modifie le college");
    this.showEmailInputfield = true;
  }

  creerNouvCollegue(){
    console.log('Je crée un nouveau collègue');
  }

}
