import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {
  form! :FormGroup

  constructor(private formBuilder :FormBuilder){}
  ngOnInit() {
    
   
  }
  @Input()
  movies: any;


  remove(index:number){
    this.movies.splice(index,1);
  }
}
