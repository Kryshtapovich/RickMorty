export interface Character {
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

export interface CharacterList {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Array<Character>;
}
