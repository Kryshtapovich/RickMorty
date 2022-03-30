export interface Pagination {
  hasMore: boolean;
  nextPage: number;
}

export interface ResultList<T> {
  info: {next: string};
  results: Array<T>;
}

export interface Result<T> {
  isLoading: boolean;
  pagination: Pagination;
  list?: ResultList<T>;
}
