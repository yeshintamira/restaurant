/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contracts/favoriteRestaurantContract';

let FavoriteRestaurant = [];

const FavoriteRestaurantArray = {
  async getRestaurant(id) {
    if (!id) {
      return undefined;
    }
    return FavoriteRestaurant.find((restaurant) => restaurant.id == id);
  },

  async getAllRestaurant() {
    return FavoriteRestaurant;
  },

  async putRestaurant(restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteRestaurant
    if (await this.getRestaurant(restaurant.id)) {
      return;
    }

    FavoriteRestaurant.push(restaurant);
  },

  async deleteRestaurant(id) {
    // cara boros menghapus restoran dengan meng-copy restoran yang ada
    // kecuali restoran dengan id == id
    FavoriteRestaurant = FavoriteRestaurant.filter((restaurant) => restaurant.id != id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => {
    FavoriteRestaurant = [];
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
