import React from "react";

import { observer } from "mobx-react-lite";

import { InfiniteScroll, SafeAreaView } from "@components/atoms";
import { LocationCard } from "@components/moleculas/cards";
import { ErrorModal } from "@components/moleculas/modals";
import { useStore } from "@mobx/stores";

export const LocationsScreen = observer(() => {
  const { scrollStore, locationStore } = useStore();
  const { locationOffset, scrollLocations } = scrollStore;
  const { locations, error, getLocations } = locationStore;

  return (
    <SafeAreaView>
      <InfiniteScroll
        data={locations}
        load={getLocations}
        offset={locationOffset}
        onScroll={scrollLocations}
        numColumns={{ portrait: 1, landscape: 2 }}
        renderItem={({ item }) => <LocationCard location={item} />}
      />
      <ErrorModal errorText={error} />
    </SafeAreaView>
  );
});
