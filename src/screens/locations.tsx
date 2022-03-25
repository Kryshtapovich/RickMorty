import LocationCard from '@components/cards/location';
import InfiniteScroll from '@components/infiniteScroll';
import {getLocations} from '@services/location';
import {useDispatch, useSelector} from '@store';
import React from 'react';

function LocationsScreen() {
  const dispatch = useDispatch();

  const state = useSelector(({locationReducer}) => locationReducer);
  const {locations, isLoading} = state;

  return (
    <InfiniteScroll
      data={locations}
      isLoading={isLoading}
      load={page => dispatch(getLocations(page))}
      renderItem={({item}) => <LocationCard location={item} />}
    />
  );
}

export default LocationsScreen;
