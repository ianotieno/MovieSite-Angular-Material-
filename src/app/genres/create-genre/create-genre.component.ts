import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrl: './create-genre.component.css'
})
export class CreateGenreComponent implements OnInit {

constructor(private router: Router){}


  ngOnInit(): void {
  throw new Error('Method not implemented.');
}
saveChanges() {
// .. save the genere

this.router.navigate(['/genres']);
}

}
