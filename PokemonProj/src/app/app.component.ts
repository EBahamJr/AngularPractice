import { Component } from '@angular/core';
//poke-api service
import { PokeAPIserveService } from './poke-apiserve.service';
//pokemon component
import {Pokemon} from './Pokemon';
import { observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //empty list for pokemon's data
  pokemon: Pokemon[] = [];
  //check if loading
  isLoading: boolean = false;
  error: boolean = false;

  constructor(private pokedexService: PokeAPIserveService){}
  //activate on initialization (whenever this component is created, it will load 9 more pokemon.)
  ngOnInit(){
    this.loadMore();
  }
  //Load initial data
  loadMore() {
    this.isLoading = true;
    //use service to load the next 9 mons
    this.pokedexService.getPokemon(this.pokemon.length, 9)
    //loading the next 9 pokemon, then putting them in the list.
    .subscribe((data: any)=> {
      console.log(data);
    });
      /*.then(pokemon => {
        pokemon = pokemon.map(p => {
          //defaults to false, to avoid loading on screen immediately(looks weird otherwise)
          p.imageLoaded = false;
          return p;
        });
        //if successful, append result to list
        this.pokemon = this.pokemon.concat(pokemon);
        this.isLoading = false;
        this.error = false;
      })*/
    this.error = true;
    this.isLoading = false;
  }
}
