import Location from 'mobx/models/location';
import {ResultList} from 'mobx/models/pagination';

import requests, {fixDate} from '.';

export async function getLocations(page = 1) {
  const {info, results} = await requests.get<ResultList<Location>>(
    `/location?page=${page}`,
  );

  return {
    pagination: {nextPage: page + 1, hasMore: info.next !== null},
    list: results.map(fixDate),
  };
}
