import { Character } from "./character";
import { Episode } from "./episode";
import { Location } from "./location";

export * from "./episode";
export * from "./location";
export * from "./character";

export interface ResponseObject {
  name: string;
  url: string;
}

export interface ResultList<T> {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Array<T>;
}

export interface PagedData<T> {
  nextPage: number;
  hasMore: boolean;
  items: Array<T>;
}

export type Entity = Character | Location | Episode;
