import api from './api';

export const favoriteService = {
  async getFavorites() {
    return api.get('/users/favorites');
  },

  async addFavorite(templeId) {
    return api.post(`/users/favorites/${templeId}`);
  },

  async removeFavorite(templeId) {
    return api.delete(`/users/favorites/${templeId}`);
  }
};

export default favoriteService;
