import * as Actions from '@models/actions/episode';
import Episode from '@models/episode';
import {PagedList} from '@models/pagination';

export function getEpisodesAction(
  payload: PagedList<Episode>,
): Actions.GetEpisodesAction {
  return {
    type: Actions.EpisodeActionType.GET_EPISODES,
    payload,
  };
}

export function getEpisodesRequestAction(
  page: number,
): Actions.GetEpisodesActionRequest {
  return {
    type: Actions.EpisodeActionType.GET_EPISODES_REQUEST,
    payload: {page},
  };
}
