import Location from "@models/location";
import { Pagination } from "@models/pagination";

export default interface LocationState {
  isLoading: boolean;
  pagination: Pagination;
  locations: Array<Location>;
}
