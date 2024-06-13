import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createHomeRestaurantTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
                <h2 class="restaurant-tit">Favorite Restaurant</h2>
                <section class="restaurant-daftar" id="listRestaurantFavorite"></section>
            `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const listRestaurantContainer = document.querySelector('#listRestaurantFavorite');
    restaurants.forEach((restaurant) => {
      listRestaurantContainer.innerHTML += createHomeRestaurantTemplate(restaurant);
    });
  },
};

export default Favorite;
