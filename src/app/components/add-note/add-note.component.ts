import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

//Alerts
import Swal from 'sweetalert2';

//models
import { Notes } from '../../models/notes.model';

//Services for DB connection
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  note:Notes;

  constructor(private notesService:NotesService,
              private router:Router) { }

  ngOnInit(): void {
    this.note = new Notes();
  }

  onSubmit(form:NgForm){
    if (form.invalid) {
      //invalid data alert
      Swal.fire({
        allowOutsideClick: false,
        icon: 'error',
        text: 'Campos obligatorios vacios',
      });
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...',
    });
    Swal.showLoading();

    this.note.date = new Date();

    this.notesService.add(this.note,).subscribe(
      (answer:any) => {

        Swal.close();
        Swal.fire({
          allowOutsideClick: false,
          icon: 'success',
          text: 'Nota Guardada',
        });
        //TODO: redireccionamiento a la lista usuarios
        this.router.navigate(['note',answer.name]);
      },
      (err) => {
        
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
