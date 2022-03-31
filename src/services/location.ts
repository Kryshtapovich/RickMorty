import {gql} from '@apollo/client';

const location = '{ id name type dimension residents { id name image } created }';

export const GetLocationsQuery = gql`
  query Locations($page: Int) {
    list: locations(page: $page) {
      info { next }
      results ${location}
    }
  }
`;
