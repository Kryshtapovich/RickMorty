import {GetEpisodesAction} from '@models/actions/episode';
import EpisodeState from '@models/state/episode';

export default interface EpisodeSlice {
  getEpisodes: (state: EpisodeState, action: GetEpisodesAction) => void;
  startLoading: (state: EpisodeState) => void;
  stopLoading: (state: EpisodeState) => void;
  [key: string]: any;
}
