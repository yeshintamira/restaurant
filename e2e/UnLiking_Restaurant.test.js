/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
Feature('UnLiking Restaurant');

Scenario('unliking a restaurant', ({ I }) => {
  I.amOnPage('/#/home');
  I.waitForElement('.restaurant-daftar .restaurant-item', 5);
  I.click('.restaurant-item .restaurant-info a');
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('#listRestaurantFavorite');
  I.click('.restaurant-item .restaurant-info a');
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.dontSeeElement('.restaurant-item .restaurant-info');
});
