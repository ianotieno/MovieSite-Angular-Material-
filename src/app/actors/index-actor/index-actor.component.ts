import { actorCreateDTO } from './../modelActor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-index-actor',
  templateUrl: './index-actor.component.html',
  styleUrl: './index-actor.component.css'
})
export class IndexActorComponent  implements OnInit{


@Input()
model!: actorCreateDTO;

  @Output()
onsaveChange= new EventEmitter<actorCreateDTO>();

onChange() {
this.onsaveChange.emit(this.form.value);
}

  form!: FormGroup;
  ngOnInit(): void {
   this.form= this.formBuilder.group({
    name:['',{
      Validators:[Validators.required]
    }],
    dateofbirth:'',
    picture:''
   });
   if(this.model !== undefined){
  this.form.patchValue(this.model);

   }
  }

  constructor(private formBuilder:FormBuilder){}
  onSelected(image: any) {
    this.form.get('picture')?.setValue(image)
  }

}
