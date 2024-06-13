import RestaurantDbSources from '../../data/therestaurantdb-source';
import { createHomeRestaurantTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
            <h2 class="restaurant-tit" >Restaurant Recommendations</h2>
            <section class="restaurant-daftar" id="listRestaurant"></section>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSources.homePage();
    const listRestaurantContainer = document.querySelector('#listRestaurant');
    restaurants.forEach((restaurant) => {
      listRestaurantContainer.innerHTML += createHomeRestaurantTemplate(restaurant);
    });
  },
};

export default Home;
