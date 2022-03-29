import {getLocationsRequestAction} from '@actions/location';
import {scrollLocationsAction} from '@actions/scroll';
import LocationCard from '@components/cards/location';
import InfiniteScroll from '@components/infiniteScroll';
import {useDispatch, useSelector} from '@store';
import React from 'react';

function LocationsScreen() {
  const dispatch = useDispatch();

  const locationState = useSelector(({locationReducer}) => locationReducer);
  const {locations, isLoading, pagination} = locationState;

  const offset = useSelector(({scrollReducer}) => scrollReducer.locationOffset);

  return (
    <InfiniteScroll
      offset={offset}
      data={locations}
      isLoading={isLoading}
      pagination={pagination}
      numColumns={{portrait: 1, landscape: 2}}
      load={page => dispatch(getLocationsRequestAction(page))}
      onScroll={offset => dispatch(scrollLocationsAction(offset))}
      renderItem={({item}) => <LocationCard location={item} />}
    />
  );
}

export default LocationsScreen;
