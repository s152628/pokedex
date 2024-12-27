import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import data from '../../pokemon.json';
import { Pokemon } from '../../types';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {

  pokemon: Pokemon[] = data;
  selectedPokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = params.get("id")!;
      this.selectedPokemon = this.pokemon.find(p => p.id === id);
    })
  }

}



