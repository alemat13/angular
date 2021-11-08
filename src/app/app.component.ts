import { Component, OnInit } from '@angular/core';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Component({
  selector: 'pokemon-app',
  templateUrl: './app/app.component.html',
})
export class AppComponent implements OnInit  {

  private pokemons: Pokemon[] = null;
  private title: string = "Liste des Pokémons";
  private userName = '';

  ngOnInit() {
    this.pokemons = POKEMONS;
  }

  onClick() {
    console.log('clic!');
  }

  onKey(userName: string) {
    this.userName = userName;
  }
  selectPokemon(pokemon: Pokemon) {
    alert("Pokemon sélectionné : " + pokemon.name);
  }
}
