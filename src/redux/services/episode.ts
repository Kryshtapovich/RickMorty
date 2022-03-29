import Episode from '@models/episode';
import {ResultList} from '@models/pagination';

import requests, {fixDate} from '.';

export async function getEpisodes(page = 1) {
  const {info, results} = await requests.get<ResultList<Episode>>(
    `/episode?page=${page}`,
  );

  return {
    pagination: {nextPage: page + 1, hasMore: info.next !== null},
    list: results.map(fixDate),
  };
}
