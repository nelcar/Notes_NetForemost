import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

//Alerts
import Swal from 'sweetalert2';

//models
import { Notes } from '../../models/notes.model';

//Services for DB connection
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {

  note:Notes = new Notes(); //note var
  idKey:string = ""; //key for loading note on DB

  constructor(private notesService:NotesService,
              private router:Router,
              private activatedRoute: ActivatedRoute) {

      this.activatedRoute.params.subscribe( params => {
          this.idKey = params['id'];
          this.loadData();     
      });      
  }

  ngOnInit(): void {
    this.note = new Notes();
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

  //save data
  onSubmit(form:NgForm){

    //validating data
    if (form.invalid) {
      //invalid data alert
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

    this.note.updateDate = new Date(); //saving update date

    //saving data on db
    this.notesService.updateElement(this.idKey,this.note,).subscribe((answer:any) => {

        Swal.close();
        Swal.fire({
          allowOutsideClick: false,
          icon: 'success',
          text: 'Nota Guardada',
        });

        //calling reed component
        this.router.navigate(['note',this.idKey]);

      },(err) => {
        //error saving data on db
        console.error(err);
        Swal.close();
        Swal.fire({
          allowOutsideClick: false,
          icon: 'error',
          text: 'Error al editar nota en Base de Datos',
        });

      }
    );

  }

}
