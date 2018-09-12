import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPokemonComponent } from './listagem-pokemon.component';

describe('ListagemPokemonComponent', () => {
  let component: ListagemPokemonComponent;
  let fixture: ComponentFixture<ListagemPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
