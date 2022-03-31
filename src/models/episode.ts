import {ReducedCharacter} from './character';

export default interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Array<ReducedCharacter>;
  created: string;
}
