export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Array<string>;
  url: string;
  created: string;
}

export interface EpisodeList {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Array<Episode>;
}
