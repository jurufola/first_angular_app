import { CollegueComponent } from './collegue/collegue.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollegueCreerComponent } from './collegue-creer/collegue-creer.component';

const routes: Routes = [
  {
    path: 'collegue/create',
    component: CollegueCreerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
