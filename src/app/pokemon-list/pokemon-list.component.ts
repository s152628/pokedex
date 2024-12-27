import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Pokemon } from '../../types';
import data from '../../pokemon.json';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {
  public pokemons : Pokemon[] = data;

  constructor() { }

  ngOnInit(): void {
    this.pokemons
  }
  


}
