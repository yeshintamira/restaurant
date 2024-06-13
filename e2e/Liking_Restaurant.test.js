/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
Feature('Liking Restaurant');

Scenario('liking a restaurant', ({ I }) => {
  I.amOnPage('/#/home');
  I.waitForElement('.restaurant-daftar .restaurant-item', 5);
  I.click('.restaurant-item .restaurant-info a');
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('#listRestaurantFavorite');
});
