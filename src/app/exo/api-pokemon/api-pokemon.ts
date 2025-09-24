import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { NgFor} from '@angular/common';



interface Pokemon{
  id: number;
  name: string;
  image: string;
  type: string;
}

@Component({
  selector: 'app-api-pokemon',
  imports: [NgFor],
  templateUrl: './api-pokemon.html',
  styleUrls: ['./api-pokemon.css']
})


export class ApiPokemon {

  newData: any;
  pokemons: Pokemon[] = [];

  constructor(private ApiPokemon: PokemonService) {}

  async loadPokemons() {
      this.newData = await this.ApiPokemon.fetchPokemonList();
      this.pokemons = this.newData.map((pokemon: any) => ({
        id: pokemon.pokedex_id,
        name: pokemon.name.fr,
        image: pokemon.sprites.regular,
        type: pokemon.types[0].name
      }));
   }
   ngOnInit() {

    this.loadPokemons();
    }

}
