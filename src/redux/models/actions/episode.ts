import Episode from "../episode";
import LoadingAction from "./loading";

export const enum EpisodeActionType {
  GET_EPISODES = 'GET_EPISODES',
}

interface GetEpisodesAction {
  type: EpisodeActionType.GET_EPISODES;
  payload: {
    nextPage: number;
    episodes: Array<Episode>;
  };
}

type EpisodeAction = GetEpisodesAction | LoadingAction;

export default EpisodeAction;
