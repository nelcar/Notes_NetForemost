import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { ListNotesComponent } from './components/list-notes/list-notes.component';
import { ReedNoteComponent } from './components/reed-note/reed-note.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';

const routes: Routes = [
  { path: 'home'     , component: ListNotesComponent },
  { path: 'note/:id' , component: ReedNoteComponent },
  { path: 'new' , component: AddNoteComponent },
  { path: 'edit/:id' , component: EditNoteComponent },
  { path: '**'                , redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
