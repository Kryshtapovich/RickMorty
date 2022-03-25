import EpisodeAction, {EpisodeActionType} from '@models/actions/episode';
import {Episode} from '@models/episode';

export function GetEpisodeListAction(
  episodes: Array<Episode>,
  nextPage = 1,
): EpisodeAction {
  return {
    type: EpisodeActionType.GET_EPISODES,
    payload: {episodes, nextPage},
  };
}
