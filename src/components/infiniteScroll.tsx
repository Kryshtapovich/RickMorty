import {Pagination} from '@models/pagination';
import React, {useEffect, useState} from 'react';
import {FlatList, FlatListProps, SafeAreaView, StyleSheet} from 'react-native';

import Spinner from './spinner';

interface Props {
  isLoading: boolean;
  load: (page: number) => Promise<Pagination>;
}

function InfiniteScroll<T>(props: FlatListProps<T> & Props) {
  const {load, isLoading, ...rest} = props;

  const [pagination, setPagination] = useState<Pagination>();

  useEffect(() => {
    load(1).then(setPagination);
  }, []);

  const endReached = () => {
    if (pagination) {
      const {hasMore, nextPage} = pagination;
      !isLoading && hasMore && load(nextPage).then(setPagination);
    }
  };

  return (
    <SafeAreaView style={container}>
      <FlatList
        style={list}
        onEndReached={endReached}
        keyExtractor={(_, i) => i.toString()}
        ListFooterComponent={isLoading ? <Spinner /> : null}
        {...rest}
      />
    </SafeAreaView>
  );
}

export default InfiniteScroll;

const {container, list} = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
});
