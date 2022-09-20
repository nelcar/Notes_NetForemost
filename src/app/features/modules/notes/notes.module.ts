import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Modules
import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';

//Components
import { ListNotesComponent } from '../../components/list-notes/list-notes.component';
import { InfoNoteComponent } from '../../components/info-note/info-note.component';
import { AddNoteComponent } from '../../components/add-note/add-note.component';
import { EditNoteComponent } from '../../components/edit-note/edit-note.component';
import { NotePageComponent } from '../../../pages/notes-pages/note-page/note-page.component';
import { NewNotePageComponent } from '../../../pages/notes-pages/new-note-page/new-note-page.component';
import { InfoNotePageComponent } from '../../../pages/notes-pages/info-note-page/info-note-page.component';
import { EditNotePageComponent } from '../../../pages/notes-pages/edit-note-page/edit-note-page.component';

//forms
import { NoteFormComponent } from '../../../features/components/forms/note-form/note-form.component';
import { EditNoteFormComponent } from '../../../features/components/forms/edit-note-form/edit-note-form.component';


@NgModule({
  declarations: [
    NotesComponent,
    ListNotesComponent,
    InfoNoteComponent,
    AddNoteComponent,
    EditNoteComponent,
    NotePageComponent,
    NoteFormComponent,
    NewNotePageComponent,
    InfoNotePageComponent,
    EditNotePageComponent,
    EditNoteFormComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class NotesModule { }
