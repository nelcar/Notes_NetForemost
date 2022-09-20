import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info-note-page',
  templateUrl: './info-note-page.component.html'
})
export class InfoNotePageComponent implements OnInit {

  idKey:string = ""; //key for loading note on DB

  constructor(private router:Router,
              private activatedRoute: ActivatedRoute) {

      this.activatedRoute.params.subscribe( params => {
        this.idKey = params['id'];
      });      
  }

  ngOnInit(): void {
  }

  editNote(){
    this.router.navigate( ['notes/edit', this.idKey] );
  }

}
