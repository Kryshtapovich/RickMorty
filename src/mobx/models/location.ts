import { ResponseObject } from ".";

export interface Location extends ResponseObject {
  id: number;
  type: string;
  dimension: string;
  residents: Array<string>;
  created: string;
}
