import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
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
    },{
      title: 'avengers endgame',
      releaseDate: new Date('2019-08-01'),
      price:7000,
      poster:'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg'
    },{
      title: 'Black Panther',
      releaseDate: new Date('2016-08-01'),
      price:3000,
      poster:'https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg'
    }];
   this.FutureReleases=[{
    title: 'Toy-Story',
    releaseDate: new Date(),
    price:2000,
    poster:'https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_.jpg'
  },{
    title: 'Avatar: The Last Airbender ',
    releaseDate: new Date('2024-08-01'),
    price:3000,
    poster:'https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_.jpg'
  }];
  },1000);
   
  }

  moviesInTheaters: { title: string;  releaseDate: Date; price: number; poster:string; }[] | undefined;
  FutureReleases: { title: string; poster:string; releaseDate: Date; price: number; }[] | undefined;
  

}
