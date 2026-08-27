import api from './api';

export const festivalService = {
  async getFestivals(params = {}) {
    const query = new URLSearchParams();
    if (params.month && params.month !== 'all') query.append('month', params.month);
    if (params.state && params.state !== 'all') query.append('state', params.state);
    const endpoint = `/festivals${query.toString() ? `?${query.toString()}` : ''}`;
    return api.get(endpoint);
  },

  async getFestivalByIdOrSlug(idOrSlug) {
    return api.get(`/festivals/${idOrSlug}`);
  },

  async createFestival(data) {
    return api.post('/festivals', data);
  },

  async updateFestival(id, data) {
    return api.put(`/festivals/${id}`, data);
  },

  async deleteFestival(id) {
    return api.delete(`/festivals/${id}`);
  }
};

export default festivalService;
