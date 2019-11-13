import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { map } from 'rxjs/operators'; 
import { Observable, observable } from 'rxjs';
import { Pokemon } from '../models/Pokemon';


@Injectable()
  //{providedIn: 'root'}
export class PokeAPIserveService {
  
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  private baseSpriteUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  

  constructor(private http: HttpClient) { }

  getPokemon(offset: number, limit: number){
    let apiURL = `${this.baseUrl}?offset=${offset}&limit=${limit}`;
    let pokeson = this.http.get(apiURL)
    .pipe(map( res => res));
    return pokeson;
    /*.then(response => response.json().results)
      .then(items => items.map((item, idx) => {
        const id: number = idx + offset + 1;

        return{
          name: item.name,
          sprite: `${this.baseSpriteUrl}${id}.png`,
          id: 12
        };
      }));*/
  }
}
