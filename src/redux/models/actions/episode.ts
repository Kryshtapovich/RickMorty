import Episode from '@models/episode';
import {PagedList} from '@models/pagination';

import LoadingAction from './loading';

export const enum EpisodeActionType {
  GET_EPISODES = 'GET_EPISODES',
  GET_EPISODES_REQUEST = 'GET_EPISODES_REQUEST',
}

export interface GetEpisodesAction {
  type: EpisodeActionType.GET_EPISODES;
  payload: PagedList<Episode>;
}

export interface GetEpisodesActionRequest {
  type: EpisodeActionType.GET_EPISODES_REQUEST;
  payload: {page: number};
}

type EpisodeAction =
  | GetEpisodesAction
  | GetEpisodesActionRequest
  | LoadingAction;

export default EpisodeAction;
