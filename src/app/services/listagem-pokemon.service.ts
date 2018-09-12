
import {Injectable} from '@angular/core';
declare var require: any;

const Pokedex = require('pokeapi-js-wrapper');

const options = {
  protocol: 'https'
};

const URL_POKEMON = '';

@Injectable({
  providedIn: 'root'
})
export class ListagemPokemonService {

  service;

  constructor() {
    this.service = new Pokedex.Pokedex(options);
  }

  public getList(interval) {
    return this.service.getPokemonsList(interval)
      .then(function (response) {
        return response;
      });
  }
  public getPokemonByName(name: string) {
    return this.service.getPokemonByName(name)
      .then(function (response) {
        return response;
      });
  }

}
