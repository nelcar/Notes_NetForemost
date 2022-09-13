import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListNotesComponent } from './components/list-notes/list-notes.component';

const routes: Routes = [
  { path: 'home'     , component: ListNotesComponent },
  { path: '**'                , redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
