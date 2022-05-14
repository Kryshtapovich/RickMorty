import React, { useEffect, useRef, useState } from "react";

import { FlatList, FlatListProps, NativeScrollEvent, NativeSyntheticEvent } from "react-native";

import debounce from "lodash.debounce";
import { Observer } from "mobx-react-lite";

import { Spinner } from "@components/atoms";
import { useOrientation } from "@hooks";
import { Entity, PagedData } from "@mobx/models";

import { styles } from "./styles";

interface Props<T extends Entity> {
  offset?: number;
  data: PagedData<T>;
  onScroll?: (offset: number) => void;
  load: (page: number) => Promise<void>;
  numColumns?: { portrait: number; landscape: number };
}

type DefaultProps<T extends Entity> = Omit<FlatListProps<T>, "numColumns" | "onScroll" | "data">;

export function InfiniteScroll<T extends Entity>(props: DefaultProps<T> & Props<T>) {
  const { load, numColumns, offset, onScroll, data, ...rest } = props;
  const { nextPage, hasMore, items } = data;

  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    debounce(() => {
      load(nextPage).then(() => setIsLoading(false));
    }, 2000)();
  };

  const onEndReached = () => {
    !isLoading && hasMore && fetchData();
  };

  useEffect(fetchData, []);

  const { isPortrait } = useOrientation();

  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    offset && listRef.current?.scrollToOffset({ offset });
  }, [isPortrait]);

  const scrollHandler = ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const ofset = nativeEvent.contentOffset.y;
    const { height, width } = nativeEvent.layoutMeasurement;
    const position = ofset * (width / height);
    onScroll && onScroll(position);
  };

  return (
    <Observer>
      {() => (
        <FlatList
          data={items}
          ref={listRef}
          style={styles.container}
          scrollEventThrottle={16}
          key={Number(isPortrait)}
          onScroll={scrollHandler}
          onEndReached={onEndReached}
          keyExtractor={(_, i) => i.toString()}
          contentContainerStyle={styles.content}
          ListFooterComponent={isLoading ? <Spinner /> : null}
          numColumns={isPortrait ? numColumns?.portrait : numColumns?.landscape}
          {...rest}
        />
      )}
    </Observer>
  );
}
