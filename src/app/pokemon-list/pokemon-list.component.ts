import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pokemon } from '../../types';
import data from '../../pokemon.json';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [RouterLink],
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
