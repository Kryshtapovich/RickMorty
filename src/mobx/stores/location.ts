import Location from '@models/location';
import {getLocations} from '@services/location';
import {makeAutoObservable, runInAction} from 'mobx';

class LocationStore {
  isLoading = false;
  locations: Array<Location> = [];

  constructor() {
    makeAutoObservable(this);
  }

  getLocations = async (page: number) => {
    this.isLoading = true;
    const {pagination, list} = await getLocations(page);
    runInAction(() => {
      this.locations = [...this.locations, ...list];
      this.isLoading = false;
    });
    return pagination;
  };
}

export default LocationStore;
