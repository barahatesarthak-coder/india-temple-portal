import api from './api';

export const circuitService = {
  async getCircuits(params = {}) {
    const query = new URLSearchParams();
    if (params.region && params.region !== 'all') query.append('region', params.region);
    const endpoint = `/circuits${query.toString() ? `?${query.toString()}` : ''}`;
    return api.get(endpoint);
  },

  async getCircuitByIdOrSlug(idOrSlug) {
    return api.get(`/circuits/${idOrSlug}`);
  },

  async createCircuit(data) {
    return api.post('/circuits', data);
  },

  async updateCircuit(id, data) {
    return api.put(`/circuits/${id}`, data);
  },

  async deleteCircuit(id) {
    return api.delete(`/circuits/${id}`);
  }
};

export default circuitService;
