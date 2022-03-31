import {ReducedCharacter} from './character';

export default interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Array<ReducedCharacter>;
  created: string;
}
