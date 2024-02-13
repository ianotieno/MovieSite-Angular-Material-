import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { movieDTO } from '../../edit/movies.model';
import { MutlipleSelectorMdel } from '../../mutliple-selector/multiple';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent implements OnInit {
@Input()
model : movieDTO | undefined 
defaultImageUrl: string = '';

 form !:FormGroup
 constructor(private FormBuilder :FormBuilder){}

nonSelectedGenres: MutlipleSelectorMdel[]=[
  {key:1,value:'Drama'}, {key:2,value:'Actor'},{key:3,value:'Horror'}    ]


  SelectedGenres: MutlipleSelectorMdel[]=[
    ]
  

  ngOnInit() {
    this.form= this.FormBuilder.group({
   title:['',{
  Validators:[Validators.required]

}],
  summary:'',
  inTheaters: false,
  trailer:'',
  releaseDate:'',
  poster:'',
  genresIds:''
    });
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
      this.defaultImageUrl = this.model.poster || '';
    }
  }

  onImageSelected(event: File) {
    this.form.get('poster')?.setValue(event);
  }

  saveChanges() {
    const genresIds= this.SelectedGenres.map(value=> value.key);
    this.form.get('genresIds')?.setValue(genresIds);
    
    // Implement logic to save changes
    console.log(this.form.value); // For demonstration
  }

  changeMarkdown(content: string) {
    this.form.get('summary')?.setValue(content);
  }
}
