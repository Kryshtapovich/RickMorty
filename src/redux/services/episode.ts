import {GetEpisodeListAction} from '@actions/episode';
import {startLoadingAction, stopLoadingAction} from '@actions/loading';
import Episode from '@models/episode';
import {ResultList} from '@models/pagination';
import {Dispatch} from 'redux';

import requests, {fixDate} from '.';

export function getEpisodes(page = 1) {
  return function (dispatch: Dispatch) {
    dispatch(startLoadingAction());
    requests
      .get<ResultList<Episode>>(`/episode?page=${page}`)
      .then(({results}) => {
        setTimeout(() => {
          const episodes = results.map(fixDate);
          dispatch(GetEpisodeListAction(episodes, page + 1));
        }, 2000);
        setTimeout(() => dispatch(stopLoadingAction()), 2000);
      });
  };
}
