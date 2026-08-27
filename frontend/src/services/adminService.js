import api from './api';

export const adminService = {
  async getDashboardStats() {
    return api.get('/admin/dashboard');
  },

  async getCategories() {
    return api.get('/admin/categories');
  },

  async createCategory(data) {
    return api.post('/admin/categories', data);
  },

  async deleteCategory(id) {
    return api.delete(`/admin/categories/${id}`);
  },

  async getRegions() {
    return api.get('/admin/regions');
  },

  async createRegion(data) {
    return api.post('/admin/regions', data);
  },

  async deleteRegion(id) {
    return api.delete(`/admin/regions/${id}`);
  }
};

export default adminService;
