import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenericListComponent } from './generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './rating/rating.component';
import { HomeComponent } from './home/home.component';
import { IndexGenresComponent } from './index-genres/index-genres.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { IndexActorComponent } from './actors/index-actor/index-actor.component';
import { IndexMovieThreaterComponent } from './movie-threaters/index-movie-threater/index-movie-threater.component';
import { CreateMovieThreaterComponent } from './movie-threaters/create-movie-threater/create-movie-threater.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { FormGenreComponent } from './genre/form-genre/form-genre.component';
import { EditGenreComponent } from './edit/edit-genre/edit-genre.component';
import { MoviveFilterComponent } from './filter/movive-filter/movive-filter.component';
import { MovieComponent } from './movie/movie/movie.component';
import { Actor1Component } from './edit/actor1/actor1.component';
import { InputComponent } from './input/input.component';
import { InputMarkdownComponent } from './input-markdown/input-markdown.component';
import { MarkdownModule } from 'ngx-markdown';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './map/map.component';
import { FormsComponent } from './movies/forms/forms.component';
import { MutlipleSelectorComponent } from './mutliple-selector/mutliple-selector.component'



@NgModule({
  declarations: [
    AppComponent,
    GenericListComponent,
    MenuComponent,
    RatingComponent,
    HomeComponent,
    IndexGenresComponent,
    CreateGenreComponent,
    IndexActorsComponent,
    IndexActorComponent,
    IndexMovieThreaterComponent,
    CreateMovieThreaterComponent,
    CreateMovieComponent,
    EditActorComponent,
    FormGenreComponent,
    EditGenreComponent,
    MoviveFilterComponent,
    MovieComponent,
    Actor1Component,
    InputComponent,
    InputMarkdownComponent,
    MapComponent,
    FormsComponent,
    MutlipleSelectorComponent,

    
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    LeafletModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
