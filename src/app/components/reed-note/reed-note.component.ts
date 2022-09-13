import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


//Models
import { Notes } from '../../models/notes.model';

@Component({
  selector: 'app-reed-note',
  templateUrl: './reed-note.component.html',
  styleUrls: ['./reed-note.component.css']
})
export class ReedNoteComponent implements OnInit {

  note:Notes;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.note = {
      title: 'Hola',
      body: 'Mundo',
      date:  new Date(),
      key$:"1"
    };
  }

  editNote(){
    this.router.navigate( ['/edit', this.note.key$] );
  }

}
