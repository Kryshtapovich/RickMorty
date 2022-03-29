import LocationCard from '@components/cards/location';
import InfiniteScroll from '@components/infiniteScroll';
import {useStore} from '@stores';
import {observer} from 'mobx-react-lite';
import React from 'react';

function LocationsScreen() {
  const {locationStore, scrollStore} = useStore();
  const {locations, isLoading} = locationStore;

  const {locationOffset} = scrollStore;

  return (
    <InfiniteScroll
      data={locations}
      isLoading={isLoading}
      offset={locationOffset}
      load={locationStore.getLocations}
      onScroll={scrollStore.scrollLocations}
      numColumns={{portrait: 1, landscape: 2}}
      renderItem={({item}) => <LocationCard location={item} />}
    />
  );
}

export default observer(LocationsScreen);
