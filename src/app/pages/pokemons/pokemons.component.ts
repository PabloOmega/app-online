import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../utils/pokemons';
import * as pokemonData from '../../../../public/json/pokemon-data.json';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {
  pokemons: Pokemon[] = (pokemonData as any).default;

  onClickPokemon(pokemon: Pokemon) {
    console.log(pokemon);
  }
}
