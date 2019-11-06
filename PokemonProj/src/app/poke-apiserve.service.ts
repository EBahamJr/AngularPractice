import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import {Observable} from 'rxjs';

@Injectable()
  //{providedIn: 'root'}
export class PokeAPIserveService {
  
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  private baseSpriteUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  

  constructor(private httpClient: HttpClient) { }

  getPokemon(offset: number, limit: number){
    return this.httpClient.get(`${this.baseUrl}?offset=${offset}&limit=${limit}`)
      .toPromise()
      .then(response => response.json().results)
      .then(items => items.map((item, idx) => {
        const id: number = idx + offset + 1;

        return{
          name: item.name,
          sprite: `${this.baseSpriteUrl}${id}.png`,
          id
        };
      }));
  }
}
