import {useQuery} from '@apollo/client';
import useOrientation from '@hooks/useOrientation';
import {fixDate} from '@services';
import {DocumentNode} from 'graphql';
import {ResultList} from 'models/pagination';
import React, {useEffect, useRef} from 'react';
import {FlatList, FlatListProps, SafeAreaView, StyleSheet} from 'react-native';

import Spinner from './spinner';

interface Props {
  offset?: number;
  query: DocumentNode;
  onScroll?: (offset: number) => void;
  numColumns?: {portrait: number; landscape: number};
}

type DefaultProps<T> = Omit<
  FlatListProps<T>,
  'data' | 'numColumns' | 'onScroll'
>;

function InfiniteScroll<T extends {created: string}>(
  props: DefaultProps<T> & Props,
) {
  const {query, numColumns, offset, onScroll, ...rest} = props;

  const {data, loading, fetchMore} = useQuery<{list: ResultList<T>}>(query, {
    variables: {page: 1},
  });

  const mappedData = data?.list.results.map(fixDate);

  const endReached = () => {
    if (data?.list.info.next) {
      return fetchMore({
        variables: {page: data.list.info.next},
        updateQuery: (prev, {fetchMoreResult}) => {
          if (!fetchMoreResult) return prev;
          const info = fetchMoreResult.list.info;
          const results = [
            ...prev.list.results,
            ...fetchMoreResult.list.results,
          ];
          return Object.assign({}, prev, {
            list: {info, results},
          });
        },
      });
    }
  };

  const {isPortrait} = useOrientation();

  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    offset && listRef.current?.scrollToOffset({offset});
  }, [isPortrait]);

  return (
    <SafeAreaView>
      <FlatList
        style={list}
        ref={listRef}
        data={mappedData}
        scrollEventThrottle={16}
        key={Number(isPortrait)}
        onEndReached={endReached}
        keyExtractor={(_, i) => i.toString()}
        ListFooterComponent={loading ? <Spinner /> : null}
        numColumns={isPortrait ? numColumns?.portrait : numColumns?.landscape}
        onScroll={({nativeEvent}) => {
          const ofset = nativeEvent.contentOffset.y;
          const {height, width} = nativeEvent.layoutMeasurement;
          const position = ofset * (width / height);
          onScroll && onScroll(position);
        }}
        {...rest}
      />
    </SafeAreaView>
  );
}

export default InfiniteScroll;

const {list} = StyleSheet.create({
  list: {
    padding: 10,
  },
});
