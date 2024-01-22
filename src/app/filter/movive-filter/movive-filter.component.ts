import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-movive-filter',
  templateUrl: './movive-filter.component.html',
  styleUrl: './movive-filter.component.css'
})
export class MoviveFilterComponent implements OnInit {
clearForm() {

}

  form!:FormGroup;

genres=[{id:1,name:'Drama'},{id:2,name:'Action'},{id:3,name:'Horror'}];
 
  constructor(private formBuilder :FormBuilder){}
ngOnInit(): void {
 this.form = this.formBuilder.group({
 title:'',
 genreId:0,
 upComingReleases: false,
 inTheaters:false

 })
}
movies=[
  { title:'Spider-Man', Poster:'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg'},
  { title:'Moana', Poster:'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_FMjpg_UX1000_.jpg'},
  { title:'Inception', Poster:'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg'},

]

}
