import { genreCreationDTO } from './../../genre/form-genre/genre';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrl: './create-genre.component.css'
})
export class CreateGenreComponent implements OnInit {


constructor(
  private router: Router,

  ){}


  ngOnInit(): void {


}
saveChanges(genreCreationDTO :genreCreationDTO) {
// .. save the genere
console.log(genreCreationDTO);
this.router.navigate(['/genres']);
}

}
