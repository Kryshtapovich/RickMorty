import {gql} from '@apollo/client';

const character =
  '{ id name status gender species origin { name } image created }';

export const CharacterQuery = gql`
  query Character($id: ID!) {
    character(id: $id) ${character}
  }
`;

export const CharacterListQuery = gql`
  query Characters($page: Int) {
    list: characters(page: $page) {
      info { next }
      results ${character}
    }
  }
`;
