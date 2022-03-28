import Location from '@models/location';
import {Pagination, ResultList} from '@models/pagination';
import {actions} from '@reducers/location';
import {Dispatch} from 'redux';

import requests, {fixDate} from '.';

export const getLocations =
  (page = 1) =>
  async (dispatch: Dispatch): Promise<Pagination> => {
    dispatch(actions.startLoading());

    const {info, results} = await requests.get<ResultList<Location>>(
      `/location?page=${page}`,
    );

    const locations = results.map(fixDate);

    dispatch(actions.getLocations(locations));

    dispatch(actions.stopLoding());

    return {nextPage: page + 1, hasMore: info.next !== null};
  };
