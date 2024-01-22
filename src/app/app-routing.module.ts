import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndexGenresComponent } from './index-genres/index-genres.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { IndexActorComponent } from './actors/index-actor/index-actor.component';
import { IndexMovieThreaterComponent } from './movie-threaters/index-movie-threater/index-movie-threater.component';
import { CreateMovieThreaterComponent } from './movie-threaters/create-movie-threater/create-movie-threater.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';

const routes: Routes = [
 {path:'', component: HomeComponent},
 {path:'genres', component:IndexGenresComponent},
 {path:'genres/create', component:CreateGenreComponent},

 {path:'actors', component:IndexActorsComponent},
 {path:'actors/create', component:IndexActorComponent},
 {path:'actors/edit/:id',component:EditActorComponent},

 {path:'movietheaters', component:IndexMovieThreaterComponent},
 {path:'movietheaters/create', component:CreateMovieThreaterComponent},

 
 {path:'create/movies', component:CreateMovieComponent},
{path: '**', redirectTo:""}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
