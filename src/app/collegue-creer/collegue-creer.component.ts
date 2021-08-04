import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue-creer',
  templateUrl: './collegue-creer.component.html',
  styleUrls: ['./collegue-creer.component.css']
})
export class CollegueCreerComponent implements OnInit {
  createComponentForm: FormGroup;
  constructor(private _fb: FormBuilder, private _dataService: DataService) {
    this.createComponentForm = this._fb.group({
      nom: ['', Validators.required],
      prenoms: ['', Validators.required],
      dateDeNaissance: ['', Validators.required],
      email: ['', Validators.required],
      photoUrl: ['', [Validators.required, Validators.minLength(7)]],
    });
  }

  ngOnInit(): void {
  }

  addCollegue() {
    this._dataService.ajouterCollegue(this.createComponentForm)
  }
}
