import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { genreCreationDTO } from '../../genre/form-genre/genre';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrl: './edit-actor.component.css'
})
export class EditActorComponent implements OnInit{

  model:genreCreationDTO= {name:'Drama'};
saveChanges($event: genreCreationDTO) {

}
  ngOnInit(): void {
  this.activatedRoute.params.subscribe(params=>{
    alert(params['id']);
  })
  }
constructor(private activatedRoute: ActivatedRoute){

}
}
