import api from './api';

export const templeService = {
  async getTemples(params = {}) {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, val]) => {
      if (val !== undefined && val !== null && val !== '' && val !== 'all') {
        query.append(key, val);
      }
    });
    const endpoint = `/temples${query.toString() ? `?${query.toString()}` : ''}`;
    return api.get(endpoint);
  },

  async getFeaturedTemples() {
    return api.get('/temples/featured');
  },

  async getTempleByIdOrSlug(idOrSlug) {
    return api.get(`/temples/${idOrSlug}`);
  },

  async getStates() {
    return api.get('/temples/states');
  },

  async getCities(state) {
    const endpoint = state ? `/temples/cities?state=${encodeURIComponent(state)}` : '/temples/cities';
    return api.get(endpoint);
  },

  async getMetadata() {
    return api.get('/meta');
  },

  // Admin Actions
  async createTemple(templeData) {
    return api.post('/temples', templeData);
  },

  async updateTemple(id, templeData) {
    return api.put(`/temples/${id}`, templeData);
  },

  async deleteTemple(id) {
    return api.delete(`/temples/${id}`);
  },

  async approveTemple(id) {
    return api.patch(`/temples/${id}/approve`);
  },

  async rejectTemple(id) {
    return api.patch(`/temples/${id}/reject`);
  }
};

export default templeService;
