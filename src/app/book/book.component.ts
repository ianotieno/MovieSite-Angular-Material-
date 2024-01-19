import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {
  
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


