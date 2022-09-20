import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes.component';

//Components
import { NewNotePageComponent } from '../../../pages/notes-pages/new-note-page/new-note-page.component';
import { InfoNotePageComponent } from '../../../pages/notes-pages/info-note-page/info-note-page.component';
import { EditNotePageComponent } from '../../../pages/notes-pages/edit-note-page/edit-note-page.component';

const routes: Routes = [
  { path: 'note/:id' , component: InfoNotePageComponent },
  { path: 'new' , component: NewNotePageComponent },
  { path: 'edit/:id' , component: EditNotePageComponent },
  { path: '', component: NotesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
