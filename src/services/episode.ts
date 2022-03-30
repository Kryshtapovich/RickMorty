import {gql} from '@apollo/client';

const episode = '{ id name air_date episode characters { id name } created }';

export const GetEpisodesQuery = gql`
  query Episodes($page: Int) {
    list: episodes(page: $page) {
      info { next }
      results ${episode}
    } 
  }
`;
