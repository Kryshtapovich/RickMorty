export default interface Character {
  id: number;
  name: string;
  status: string;
  type: string;
  gender: string;
  species: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}

export interface ReducedCharacter {
  id: number;
  name: string;
  image: string;
}
