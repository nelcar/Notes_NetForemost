import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


//Models
import { Notes } from '../../../core/models/notes.model';

//Services for db connections
import { NotesService } from '../../../core/services/notes.service';

//alerts
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html'
})
export class ListNotesComponent implements OnInit {

  notes:Notes[] = []; //Array for Notes
  notesSearch:Notes[] = []; //Array for especific notes on search 
  searchInput:string = "";//search input
  
  sortTitleLH:boolean = true; //sort flag for title from low to high
  sortDateLH:boolean = true; //sort flag for Created date from low to high
  sortUpdateLH:boolean = true; //sort flag for Update date from low to high

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
      ){
        this.notesSearch.push(element);
      }
    });
    this.sortArrayByTitle();
  }

  //sort by Title
  sortArrayByTitle(){
    if(this.sortTitleLH){
      this.notesSearch.sort((a, b) => {
        let fa = a.title.toLowerCase(),
            fb = b.title.toLowerCase();
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
      });
    }else{
      this.notesSearch.sort((a, b) => {
        let fa = a.title.toLowerCase(),
            fb = b.title.toLowerCase();
    
        if (fa > fb) {
            return -1;
        }
        if (fa < fb) {
            return 1;
        }
        return 0;
      });
    }
    
  }

  //sort by Date
  sortArrayByDate(){
    if(this.sortDateLH){
      this.notesSearch.sort((a, b) => {
        let fa = a.date,
            fb = b.date;
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
      });
    }else{
      this.notesSearch.sort((a, b) => {
        let fa = a.date,
            fb = b.date;
    
        if (fa > fb) {
            return -1;
        }
        if (fa < fb) {
            return 1;
        }
        return 0;
      });
    }
    
  }

  //sort by Update
  sortArrayByUpdate(){
    if(this.sortUpdateLH){
      this.notesSearch.sort((a, b) => {
        let fa = a.updateDate,
            fb = b.updateDate;
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
      });
    }else{
      this.notesSearch.sort((a, b) => {
        let fa = a.updateDate,
            fb = b.updateDate;
    
        if (fa > fb) {
            return -1;
        }
        if (fa < fb) {
            return 1;
        }
        return 0;
      });
    }
    
  }

  
  //function for calling reed component
  reedNote(key:String){
    this.router.navigate( ['notes/note', key] );
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
