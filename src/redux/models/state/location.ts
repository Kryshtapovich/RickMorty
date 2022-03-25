import Location from '../location';

export default interface LocationState {
  isLoading: boolean;
  locations: Array<Location>;
}
