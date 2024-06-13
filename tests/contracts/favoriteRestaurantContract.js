/* eslint-disable no-undef */
const itActsAsFavoriteRestaurantModel = (FavoriteRestaurant) => {
  it('should return the restaurant that has been added', async () => {
    await FavoriteRestaurant.putRestaurant({ id: 1 });
    await FavoriteRestaurant.putRestaurant({ id: 2 });

    expect(await FavoriteRestaurant.getRestaurant(1)).toEqual({ id: 1 });
    expect(await FavoriteRestaurant.getRestaurant(2)).toEqual({ id: 2 });
    expect(await FavoriteRestaurant.getRestaurant(3)).toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    await FavoriteRestaurant.putRestaurant({ aProperty: 'property' });

    expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([]);
  });

  it('can return all of the restaurants that have been added', async () => {
    await FavoriteRestaurant.putRestaurant({ id: 1 });
    await FavoriteRestaurant.putRestaurant({ id: 2 });

    expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should remove favorite restaurant', async () => {
    await FavoriteRestaurant.putRestaurant({ id: 1 });
    await FavoriteRestaurant.putRestaurant({ id: 2 });
    await FavoriteRestaurant.putRestaurant({ id: 3 });

    await FavoriteRestaurant.deleteRestaurant(1);

    expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    await FavoriteRestaurant.putRestaurant({ id: 1 });
    await FavoriteRestaurant.putRestaurant({ id: 2 });
    await FavoriteRestaurant.putRestaurant({ id: 3 });

    await FavoriteRestaurant.deleteRestaurant(4);

    expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { itActsAsFavoriteRestaurantModel };
