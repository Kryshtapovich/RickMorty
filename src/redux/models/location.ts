export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Array<string>;
  url: string;
  created: string;
}

export interface LocationList {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Array<Location>;
}
