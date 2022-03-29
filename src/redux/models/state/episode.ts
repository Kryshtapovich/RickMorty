import Episode from "@models/episode";
import { Pagination } from "@models/pagination";

export default interface EpisodeState {
  isLoading: boolean;
  pagination: Pagination;
  episodes: Array<Episode>;
}
