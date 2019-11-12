import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Pokemon } from './Pokemon';


@Injectable()
  //{providedIn: 'root'}
export class PokeAPIserveService {
  
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  private baseSpriteUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  

  constructor(private http: HttpClient) { }

  getPokemon(offset: number, limit: number): Observable<Pokemon>{
    let httpRes = this.http.get(`${this.baseUrl}?offset=${offset}&limit=${limit}`);
      .map( res => {
        let results = res.json().results.map(item)
      });
    return

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
