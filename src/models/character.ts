export interface ReducedCharacter {
  id: number;
  name: string;
  image: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  gender: string;
  species: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  created: string;
}
