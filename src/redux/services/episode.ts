import Episode from '@models/episode';
import {Pagination, ResultList} from '@models/pagination';
import {actions} from '@reducers/episode';
import {Dispatch} from 'redux';

import requests, {fixDate} from '.';

export const getEpisodes =
  (page = 1) =>
  async (dispatch: Dispatch): Promise<Pagination> => {
    dispatch(actions.startLoading());

    const {info, results} = await requests.get<ResultList<Episode>>(
      `/episode?page=${page}`,
    );

    const episodes = results.map(fixDate);

    dispatch(actions.getEpisodes(episodes));

    dispatch(actions.stopLoading());

    return {nextPage: page + 1, hasMore: info.next !== null};
  };
