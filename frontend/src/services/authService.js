import api from './api';

export const authService = {
  async register(name, email, password, role = 'user') {
    const res = await api.post('/auth/register', { name, email, password, role });
    if (res.data?.token) {
      localStorage.setItem('temple_token', res.data.token);
      localStorage.setItem('temple_user', JSON.stringify(res.data.user));
    }
    return res.data;
  },

  async login(email, password) {
    const res = await api.post('/auth/login', { email, password });
    if (res.data?.token) {
      localStorage.setItem('temple_token', res.data.token);
      localStorage.setItem('temple_user', JSON.stringify(res.data.user));
    }
    return res.data;
  },

  async getMe() {
    const res = await api.get('/auth/me');
    if (res.data) {
      localStorage.setItem('temple_user', JSON.stringify(res.data));
    }
    return res.data;
  },

  logout() {
    localStorage.removeItem('temple_token');
    localStorage.removeItem('temple_user');
  },

  getStoredUser() {
    try {
      const u = localStorage.getItem('temple_user');
      return u ? JSON.parse(u) : null;
    } catch {
      return null;
    }
  },

  getToken() {
    return localStorage.getItem('temple_token');
  }
};

export default authService;
