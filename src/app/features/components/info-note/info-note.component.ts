import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


//Models
import { Notes } from '../../../core/models/notes.model';

//Services for db connections
import { NotesService } from '../../../core/services/notes.service';

//alerts
import Swal from 'sweetalert2';

@Component({
  selector: 'app-info-note',
  templateUrl: './info-note.component.html'
})
export class InfoNoteComponent implements OnInit {

  note:Notes = new Notes(); //note var
  idKey:string = ""; //key for loading note on DB

  constructor(private router:Router,
              private notesService:NotesService,
              private activatedRoute: ActivatedRoute) {

      this.activatedRoute.params.subscribe( params => {
        this.idKey = params['id'];
        this.loadData();     
      });      
  }

  ngOnInit(): void {
    this.injections();
  }

  injections(){
    this.idKey = "";
  }

  //function for loading note from db
  loadData(){
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();

    this.notesService.getElement(this.idKey).subscribe(data =>{
      Swal.close();
      this.note = <Notes>data;
    }, err => {
      Swal.close();
      console.error(err);
      Swal.fire({
        allowOutsideClick: false,
        icon: 'error',
        text: 'Error al cargar nota de Base de Datos',
      });
    })
  }

}
