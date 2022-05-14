import { ResponseObject } from ".";

export interface Character extends ResponseObject {
  id: number;
  status: string;
  type: string;
  gender: string;
  species: string;
  origin: ResponseObject;
  location: ResponseObject;
  image: string;
  episode: Array<string>;
  created: string;
}

export interface ReducedCharacter {
  id: number;
  name: string;
  image: string;
}
