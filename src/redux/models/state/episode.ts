import {Episode} from '../episode';

export default interface EpisodeState {
  nextPage: number;
  isLoading: boolean;
  episodes: Array<Episode>;
}
