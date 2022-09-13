import { Component, OnInit } from '@angular/core';

//Models
import { Notes } from 'src/app/models/notes.model';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {

  notes:Notes[] = [];

  constructor() { }

  ngOnInit(): void {
    this.notes = [
      {
        title:"Hola",
        body:"Probando",
        date: new Date()
      },{
        title:"Hola 2",
        body:"Probando 2",
        date: new Date()
      }
    ];
  }

}
