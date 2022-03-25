export interface Pagination {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface ResultList<T> {
  info: Pagination;
  results: Array<T>;
}
