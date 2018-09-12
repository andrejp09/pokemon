import {Component, OnInit}from '@angular/core'; 
import {ListagemPokemonService}from '../services/listagem-pokemon.service'; 
import {ResponsePokemon}from '../models/response-pokemon'; 
import _ from 'lodash'; 

@Component( {
    selector:'app-listagem-pokemon', 
    templateUrl:'./listagem-pokemon.component.html', 
    styleUrls:['./listagem-pokemon.component.css']
})
export class ListagemPokemonComponent implements OnInit {
    showNavigationArrows = false;
    showNavigationIndicators = false;

    interval =  {
        limit:6, 
        offset:0
    }; 
    page = 1; 
    listaPokemom:ResponsePokemon = new ResponsePokemon(); 


    constructor(private service:ListagemPokemonService) {
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
            .then((value) =>  {
                this.listaPokemom = value; 
                this.listaPokemom.results.forEach(item =>  {
                this.getPokemonByName(item); 
            }); 
    }); 
    }

    public getPokemonByName(pokemon) {
        return this.service.getPokemonByName(pokemon.name)
            .then(
                (value) =>  this.carregarInformacoesPokemon(pokemon, value)
            ); 
    }

    carregarInformacoesPokemon(pokemon, value){
        pokemon.id = _.get(value, 'id'); 
        pokemon.name = _.get(value, 'name'); 
        pokemon.url = _.get(value, 'url'); 
        pokemon.urlFoto = _.get(value, 'sprites.front_default'); 
        pokemon.imagens = [];
        pokemon.imagens =  _.chain(value.sprites)
            .map((data) => 
                { 
                    return { url: data}
                })
            .filter((value) => value.url !== null)
            .value()
        pokemon.experiencia = _.get(value, 'base_experience'); 
        pokemon.caracteristica = _.map(_.get(value, 'stats'), 
            (data) => {
                return {
                    name:data.stat.name.replace('-', ' '), 
                    valor:data.base_stat
                }
            }
        ); 
        return pokemon;
    } 

}
