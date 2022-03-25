import Episode from "../episode";

export default interface EpisodeState {
  isLoading: boolean;
  episodes: Array<Episode>;
}
