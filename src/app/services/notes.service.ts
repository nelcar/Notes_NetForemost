import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

//models
import { Notes } from '../models/notes.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  
  //Data Base Url for Notes Test
  private url = 'https://test-notes-netforemost-default-rtdb.firebaseio.com/'

  constructor( private http:HttpClient ) { }

  //Add new Note to DataBase
  add(data:Notes){
    return this.http.post(`${ this.url }/notes.json`,data);
  }

  //get all Notes from DataBase
  getAll(){
    return this.http.get(`${ this.url }/notes.json`).pipe(map(resp => {
      return this.createArray(resp);
    }));
  }

  //get only one note from DataBase, key is the ID.
  getElement(key:string){
    return this.http.get(`${ this.url }/notes/${ key }.json`).pipe(map(resp => {
      const VARIABLE:Notes = <Notes>resp;
      VARIABLE.key$ = key;
      return VARIABLE
    }));
  }

  //update notes, 
  updateElement(key:string, data: Notes){
    delete data.key$;
    return this.http.put(`${ this.url }/notes/${ key }.json`,data);
  }

  //Function for prepare data in a array
  private createArray(data:any){
    if(data === null){
      return [];
    }else{
      const DATARR:Notes[] = [];
      Object.keys(data).forEach(key => {
        const VARIABLE:Notes = data[key];
        VARIABLE.key$ = key;
        DATARR.push(VARIABLE);
      });
      return DATARR;
    }
  }

}
