import { Component, OnInit } from '@angular/core';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Component({
  selector: 'pokemon-app',
  template: `<h1>Liste de pokémons</h1>`,
})
export class AppComponent implements OnInit  {

  private pokemons: Pokemon[] = null;

  ngOnInit() {
    this.pokemons = POKEMONS;
  }
  selectPokemon(pokemon: Pokemon) {
    alert("Pokemon sélectionné : " + pokemon.name);
  }
}
