import CONFIG from '../../globals/config';

const createHomeRestaurantTemplate = (restaurant) => `
<section class="restaurant-daftar">
  <div class="container">
    <div class="restaurant-item">
    <img class="restaurant__image lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous" />
      <div class="restaurant-info">
        <h2 class="restaurant-name">
          <a href="/#/detail/${restaurant.id}">${restaurant.name}</a>
        </h2>
        <p class="restaurant-rating">⭐️${restaurant.rating}</p>
        <p class="restaurant-description">${restaurant.description}</p>
      </div>
    </div>
  </div>
</section>
`;

const createRestaurantDetailTemplate = (restaurant) => {
  if (!restaurant) {
    return '<p>Restaurant data not available.</p>';
  }

  const { menus, categories, customerReviews } = restaurant;

  return `
      <div class="container">
      <div class="restaurant__header">
      <h2 class="restaurant__name">${restaurant.name}</h2>
      <img class="restaurant__image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous" />
    </div>    
        <div class="restaurant__details">
          <h3>Information</h3>
          <h4>Rating</h4>
          <p class="restaurant__rating">${restaurant.rating}</p>
          <h4>Location</h4>
          <p class="restaurant__location">${restaurant.city}, ${restaurant.address}</p>
          <h4>Description</h4>
          <p class="restaurant__description">${restaurant.description}</p>
          <h4>Categories</h4>
          <ul class="restaurant__categories">
            ${categories ? categories.map((category) => `<li>${category.name}</li>`).join('') : '<li>No categories available</li>'}
          </ul>
        </div>
        <div class="restaurant__menu">
          <h3>Menu</h3>
          <div class="menu-section">
            <h4>Foods</h4>
            <p class="restaurant__foods">${menus && menus.foods ? menus.foods.map((food) => `<span>${food.name}</span>`).join(', ') : 'No foods available'}</p>
          </div>
          <div class="menu-section">
            <h4>Drinks</h4>
            <p class="restaurant__drinks">${menus && menus.drinks ? menus.drinks.map((drink) => `<span>${drink.name}</span>`).join(', ') : 'No drinks available'}</p>
          </div>
        </div>
        <div class="restaurant__reviews">
          <h4>Customer Reviews</h4>
          ${customerReviews ? customerReviews.map((review) => `
            <div class="review-card">
              <p><strong>Name:</strong> ${review.name}</p>
              <p><strong>Review:</strong> ${review.review}</p>
              <p><strong>Date:</strong> ${review.date}</p>
            </div>
          `).join('') : '<p>No reviews available</p>'}
        </div>
      </div>
    `;
};

const createLikeRestaurantButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="like">
<i class="fa fa-heart-o" aria-hidden="true"></i>
</button>
  `;

const createUnlikeRestaurantButtonTemplate = () => `
<button aria-label="unlike this restaurant" id="likeButton" class="like">
<i class="fa fa-heart" aria-hidden="true"></i>
</button>
  `;

export {
  createHomeRestaurantTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
