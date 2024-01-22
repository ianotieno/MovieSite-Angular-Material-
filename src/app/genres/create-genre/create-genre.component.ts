import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrl: './create-genre.component.css'
})
export class CreateGenreComponent implements OnInit {

 form !:FormGroup;
constructor(
  private router: Router,
  private formBuilder : FormBuilder
  ){}


  ngOnInit(): void {

 this.form =this.formBuilder.group({
  name:['',{
    validators:[Validators.required, Validators.minLength(3)]
  }]

 });
}
saveChanges() {
// .. save the genere

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
