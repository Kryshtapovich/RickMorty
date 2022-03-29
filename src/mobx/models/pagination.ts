export interface Pagination {
  hasMore: boolean;
  nextPage: number;
}

export interface PagedList<T> {
  pagination: Pagination;
  list: Array<T>;
}

export interface ResultList<T> {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Array<T>;
}
