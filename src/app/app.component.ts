import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit() {
    setTimeout(()=>{ 
      this.moviesInTheaters=[{
      title: 'Spider-Man',
      releaseDate: new Date(),
      price:2000
    },{
      title: 'Moana',
      releaseDate: new Date('2016-08-01'),
      price:3000
    }];
   this.FutureReleases=[{
    title: 'Toy-Story',
    releaseDate: new Date(),
    price:2000
  },{
    title: 'Avator',
    releaseDate: new Date('2016-08-01'),
    price:3000
  }];
  },1000);
   
  }
  title = 'BookManager';
  moviesInTheaters: { title: string; releaseDate: Date; price: number; }[] | undefined;
  FutureReleases: { title: string; releaseDate: Date; price: number; }[] | undefined;
}
