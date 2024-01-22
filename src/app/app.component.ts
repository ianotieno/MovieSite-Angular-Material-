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
      price:2000,
      poster :'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg'
      },{
      title: 'Moana',
      releaseDate: new Date('2016-08-01'),
      price:3000,
      poster:'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_FMjpg_UX1000_.jpg'
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
  moviesInTheaters: { title: string;  releaseDate: Date; price: number; poster:string; }[] | undefined;
  FutureReleases: { title: string; releaseDate: Date; price: number; }[] | undefined;

  handleRating(rate:number){
    console.log(`Handling rating. User selected ${rate}`);
    //alert(`The user selected ${rate}`);
  }
}
