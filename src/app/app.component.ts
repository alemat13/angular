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
  private value = '';

  ngOnInit() {
    this.pokemons = POKEMONS;
  }

  onClick() {
    console.log('clic!');
  }

  onKey(event: KeyboardEvent) {
    this.value = 'Bonjour ' + (<HTMLInputElement>event.target).value;
    console.log(event);
  }
  selectPokemon(pokemon: Pokemon) {
    alert("Pokemon sélectionné : " + pokemon.name);
  }
}
