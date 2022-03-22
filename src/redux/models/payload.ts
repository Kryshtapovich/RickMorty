import { Character } from "./character";

export interface GetCharacterListPayload {
  characters: Array<Character>;
  nextPage: number;
}