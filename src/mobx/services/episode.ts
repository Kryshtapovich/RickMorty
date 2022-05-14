import { Episode, ResultList } from "@mobx/models";

import { getPagedData, requests } from ".";

export async function getEpisodes(page = 1) {
  const result = await requests.get<ResultList<Episode>>(`/episode?page=${page}`);
  return getPagedData(page, result);
}
