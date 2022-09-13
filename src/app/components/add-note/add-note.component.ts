import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Notes } from '../../models/notes.model';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  note:Notes;

  constructor() { }

  ngOnInit(): void {
    this.note = new Notes();
  }

  onSubmit(form:NgForm){
    
  }

}
