import { TestBed, inject } from '@angular/core/testing';

import { ListagemPokemonService } from './listagem-pokemon.service';

describe('ListagemPokemon.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListagemPokemonService]
    });
  });

  it('should be created', inject([ListagemPokemonService], (service: ListagemPokemonService) => {
    expect(service).toBeTruthy();
  }));
});
