import useOrientation from '@hooks/useOrientation';
import {Pagination} from '@models/pagination';
import React, {useEffect, useRef} from 'react';
import * as RN from 'react-native';

import Spinner from './spinner';

interface Props {
  offset?: number;
  isLoading: boolean;
  pagination: Pagination;
  load: (page: number) => void;
  onScroll: (offset: number) => void;
  numColumns?: {portrait: number; landscape: number};
}

type DefaultProps<T> = Omit<RN.FlatListProps<T>, 'numColumns' | 'onScroll'>;

function InfiniteScroll<T>(props: DefaultProps<T> & Props) {
  const {load, pagination, isLoading, numColumns, offset, onScroll, ...rest} =
    props;

  useEffect(() => {
    pagination.nextPage === 1 && load(pagination.nextPage);
  }, []);

  const endReached = () => {
    if (pagination) {
      const {hasMore, nextPage} = pagination;
      !isLoading && hasMore && load(nextPage);
    }
  };

  const {isPortrait} = useOrientation();

  const listRef = useRef<RN.FlatList>(null);

  useEffect(() => {
    offset && listRef.current?.scrollToOffset({offset});
  }, [isPortrait]);

  return (
    <RN.SafeAreaView>
      <RN.FlatList
        style={list}
        ref={listRef}
        scrollEventThrottle={100}
        key={Number(isPortrait)}
        onEndReached={endReached}
        keyExtractor={(_, i) => i.toString()}
        onScroll={({nativeEvent}) => {
          const offset = nativeEvent.contentOffset.y;
          const {height, width} = nativeEvent.layoutMeasurement;
          const position = offset * (width / height);
          onScroll(position);
        }}
        ListFooterComponent={isLoading ? <Spinner /> : null}
        numColumns={isPortrait ? numColumns?.portrait : numColumns?.landscape}
        {...rest}
      />
    </RN.SafeAreaView>
  );
}

export default InfiniteScroll;

const {list} = RN.StyleSheet.create({
  list: {
    padding: 10,
  },
});
