import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

//Alerts
import Swal from 'sweetalert2';

//models
import { Notes } from '../../../../core/models/notes.model';

//Services for DB connection
import { NotesService } from '../../../../core/services/notes.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html'
})
export class NoteFormComponent implements OnInit {

  note:Notes;

  constructor(private notesService:NotesService,
              private router:Router) { }

  ngOnInit(): void {
    this.note = new Notes();
  }

  //save data
  onSubmit(form:NgForm){

    //validating data
    if (form.invalid) {
      Swal.fire({
        allowOutsideClick: false,
        icon: 'error',
        text: 'Campos obligatorios vacios',
      });
      return;
    }

    //if data is valid
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...',
    });
    Swal.showLoading();

    this.note.date = new Date(); //saving date

    //saving data on db
    this.notesService.add(this.note,).subscribe( (answer:any) => {

        Swal.close();
        Swal.fire({
          allowOutsideClick: false,
          icon: 'success',
          text: 'Nota Guardada',
        });
        //calling reed component
        this.router.navigate(['notes/note',answer.name]);
      }, (err) => {
        //error saving data on db
        console.error(err);
        Swal.close();
        Swal.fire({
          allowOutsideClick: false,
          icon: 'error',
          text: 'Error al guardar nota en Base de Datos',
        });

      }
    );

  }

}
