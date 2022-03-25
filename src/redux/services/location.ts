import {startLoadingAction, stopLoadingAction} from '@actions/loading';
import {GetLocationListAction} from '@actions/location';
import LocationAction from '@models/actions/location';
import Location from '@models/location';
import {Pagination, ResultList} from '@models/pagination';
import {Dispatch} from 'redux';
import requests, {fixDate} from '.';

export function getLocations(page = 1) {
  return async function (
    dispatch: Dispatch<LocationAction>,
  ): Promise<Pagination> {
    dispatch(startLoadingAction());

    const {info, results} = await requests.get<ResultList<Location>>(
      `/location?page=${page}`,
    );

    setTimeout(() => {
      const locations = results.map(fixDate);
      dispatch(GetLocationListAction(locations));
    }, 2000);

    setTimeout(() => dispatch(stopLoadingAction()), 2000);

    return {nextPage: page + 1, hasMore: info.next !== null};
  };
}
