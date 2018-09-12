import {Pokemon} from './pokemon';

export class ResponsePokemon {
  count: number;
  next: string;
  previous: string;
  results: Array<Pokemon> = [];
}
