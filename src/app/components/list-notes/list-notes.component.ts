import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


//Models
import { Notes } from '../../models/notes.model';

//Services for db connections
import { NotesService } from '../../services/notes.service';

//alerts
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {

  notes:Notes[] = []; //Array for Notes
  notesSearch:Notes[] = []; //Array for especific notes on search 
  searchInput:string = "";

  constructor(private router:Router,
    private notesService:NotesService) {
      this.loadData();
    }

  ngOnInit(): void {
    
  }
  
  //search data on array
  searchNote(){
    this.notesSearch = [];
    this.notes.forEach(element => {
      if(
        element.title.toLowerCase().includes(this.searchInput.toLowerCase())
        || element.body.toLowerCase().includes(this.searchInput.toLowerCase())
        || element.date.toString().toLowerCase().includes(this.searchInput.toLowerCase())
        || element.updateDate.toString().toLowerCase().includes(this.searchInput.toLowerCase())
      ){
        this.notesSearch.push(element);
      }
    });
  }
  
  //function for calling reed component
  reedNote(key:String){
    this.router.navigate( ['/note', key] );
  }

  //function for reeding notes from db
  loadData(){
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();

    this.notesService.getAll().subscribe(data =>{
      Swal.close();
      this.notes = data;
      this.searchNote();
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
