import {PayloadAction} from '@reduxjs/toolkit';

import Episode from '../episode';

export const enum EpisodeActionType {
  GET_EPISODES = 'GET_EPISODES',
}

export type GetEpisodesAction = PayloadAction<
  Array<Episode>,
  EpisodeActionType.GET_EPISODES
>;

type EpisodeAction = GetEpisodesAction;

export default EpisodeAction;
