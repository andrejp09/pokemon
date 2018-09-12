import {Component, OnInit} from '@angular/core';
import {ListagemPokemonService} from '../services/listagem-pokemon.service';
import {ResponsePokemon} from '../models/response-pokemon';


@Component({
    selector: 'app-listagem-pokemon',
    templateUrl: './listagem-pokemon.component.html',
    styleUrls: ['./listagem-pokemon.component.css']
})
export class ListagemPokemonComponent implements OnInit {
    interval = {
        limit: 6,
        offset: 0
    };
    page = 1;
    listaPokemom: ResponsePokemon = new ResponsePokemon();


    constructor(private service: ListagemPokemonService) {
    }


    ngOnInit() {
        this.getPokemons();
    }

    changePage(newPage) {
        this.interval.offset = (newPage - 1) * this.interval.limit;
        this.getPokemons();
    }

    getPokemons() {
        this.service.getList(this.interval)
            .then((value) => {
                this.listaPokemom = value;
                this.listaPokemom.results.forEach(item => {
                    this.getPokemonByName(item);
                });
            });
    }

    public getPokemonByName(pokemon) {
        return this.service.getPokemonByName(pokemon.name)
            .then(
                (value) => {
                    pokemon.urlFoto = value.sprites['front_default'];
                    return pokemon;
                }
            );
    }

}
