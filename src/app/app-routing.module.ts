import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { ListNotesComponent } from './components/list-notes/list-notes.component';
import { ReedNoteComponent } from './components/reed-note/reed-note.component';
import { AddNoteComponent } from './components/add-note/add-note.component';

const routes: Routes = [
  { path: 'home'     , component: ListNotesComponent },
  { path: 'note/:id' , component: ReedNoteComponent },
  { path: 'new' , component: AddNoteComponent },
  { path: '**'                , redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
