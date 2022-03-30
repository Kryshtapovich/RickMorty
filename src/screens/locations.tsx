import LocationCard from '@components/cards/location';
import InfiniteScroll from '@components/infiniteScroll';
import {useScroll} from '@context/scroll';
import Location from '@models/location';
import {GetLocationsQuery} from '@services/location';
import React from 'react';
import {ListRenderItemInfo} from 'react-native';

function LocationsScreen() {
  const {location} = useScroll();

  return (
    <InfiniteScroll
      offset={location.offset}
      query={GetLocationsQuery}
      onScroll={location.scroll}
      numColumns={{portrait: 1, landscape: 2}}
      renderItem={({item}: ListRenderItemInfo<Location>) => (
        <LocationCard location={item} />
      )}
    />
  );
}

export default LocationsScreen;
