import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { genreCreationDTO } from './genre';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrl: './form-genre.component.css'
})
export class FormGenreComponent implements OnInit {



  form !:FormGroup;
  constructor(
    private router: Router,
    private formBuilder : FormBuilder
    ){}
  @Input()
  model: genreCreationDTO  | undefined;
  @Output()
 onSaveChanges:EventEmitter<genreCreationDTO>= new EventEmitter<genreCreationDTO>();

  
    ngOnInit(): void {
  
   this.form =this.formBuilder.group({
    name:['',{
      validators:[Validators.required, Validators.minLength(3)]
    }]
  
   });


   if(this.model !== undefined){
    this.form.patchValue(this.model);
   }
  }
  saveChanges() {
 this.onSaveChanges.emit(this.form.value);
  
  this.router.navigate(['/genres']);
  }
  getError() {
    const field = this.form.get('name');
    if (field?.hasError('required')) {
      return 'The name field is required';
    }
    if (field?.hasError('minlength')) {
      return 'The minimum length is 3';
    }
    return '';
  }
  
}
