import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrl: './edit-actor.component.css'
})
export class EditActorComponent implements OnInit{
  ngOnInit(): void {
  this.activatedRoute.params.subscribe(params=>{
    alert(params['id']);
  })
  }
constructor(private activatedRoute: ActivatedRoute){

}
}
