import API_ENDPOINTS from '../globals/api-endpoint';

class RestaurantDbSources {
  static async homePage() {
    const response = await fetch(API_ENDPOINTS.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINTS.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantDbSources;
