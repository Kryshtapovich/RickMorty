import {ApolloClient, InMemoryCache} from '@apollo/client';
import {Character} from '@models/character';
import Episode from '@models/episode';
import {ResultList} from '@models/pagination';
import {Location} from 'graphql';

function mergeObject<T>() {
  return {
    read: (current: ResultList<T>) => current,
    merge: (prev: ResultList<T>, next: ResultList<T>) => {
      const info = next.info;
      const results = [...(prev ? prev.results : []), ...next.results];
      return {info, results};
    },
  };
}

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          characters: mergeObject<Character>(),
          locations: mergeObject<Location>(),
          episodes: mergeObject<Episode>(),
        },
      },
    },
  }),
});

export function fixDate<T extends {created: string}>(obj: T) {
  return {...obj, created: new Date(obj.created).toLocaleDateString('en-Us')};
}
