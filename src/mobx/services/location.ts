import { Location, ResultList } from "@mobx/models";

import { getPagedData, requests } from ".";

export async function getLocations(page = 1) {
  const result = await requests.get<ResultList<Location>>(`/location?page=${page}`);
  return getPagedData(page, result);
}
