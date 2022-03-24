import {Location} from '../location';

export default interface LocationState {
  nextPage: number;
  isLoading: boolean;
  locations: Array<Location>;
}
