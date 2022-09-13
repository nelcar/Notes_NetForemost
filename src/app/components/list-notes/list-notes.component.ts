import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Models
import { Notes } from 'src/app/models/notes.model';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {

  notes:Notes[] = [];

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.notes = [
      {
        title:"Hola",
        body:"Probando",
        date: new Date(),
        key$:"1"
      },{
        title:"Hola 2",
        body:"Probando 2",
        date: new Date(),
        key$:"2"
      }
    ];
  }

  reedNote(key:String){
    this.router.navigate( ['/note', key] );
  }

}
