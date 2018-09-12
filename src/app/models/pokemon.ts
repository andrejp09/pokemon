import { Caracteristica } from './caracteristica';
import _ from 'lodash';

export class Pokemon {
  
  id: number;
  name: string;
  url: string;
  urlFoto: string;
  imagens: Array<string> = [];
  experiencia: number;
  caracteristica: Caracteristica = new Caracteristica();
}
