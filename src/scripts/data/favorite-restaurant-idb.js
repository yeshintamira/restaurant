/* eslint-disable consistent-return */
import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestaurantIdb = {
  async getRestaurant(id) {
    if (!id) {
      return;
    }

    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },

  async getAllRestaurant() {
    try {
      return (await dbPromise).getAll(OBJECT_STORE_NAME);
    } catch (error) {
      console.error('Failed to get all restaurants:', error);
      throw error;
    }
  },

  async putRestaurant(restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }
    // eslint-disable-next-line consistent-return
    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
  },

  async deleteRestaurant(id) {
    if (!id) {
      throw new Error('ID is required to delete restaurant');
    }

    try {
      return (await dbPromise).delete(OBJECT_STORE_NAME, id);
    } catch (error) {
      console.error('Failed to delete restaurant:', error);
      throw error;
    }
  },
};

export default FavoriteRestaurantIdb;
