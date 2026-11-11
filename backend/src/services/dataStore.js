import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import {
  SEED_TEMPLES,
  SEED_CIRCUITS,
  SEED_FESTIVALS,
  SEED_CATEGORIES,
  SEED_REGIONS,
  SEED_USERS
} from '../data/seedData.js';
import Temple from '../models/Temple.js';
import Festival from '../models/Festival.js';
import Circuit from '../models/Circuit.js';
import User from '../models/User.js';

const clone = (value) => JSON.parse(JSON.stringify(value));
const slugify = (value = '') => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

class DataStoreService {
  constructor() {
    this.isMongoConnected = false;
    this.memoryData = { temples: [], festivals: [], circuits: [], categories: [], regions: [], users: [] };
    this.ready = this.initMemoryStore();
  }

  async initMemoryStore() {
    this.memoryData.categories = clone(SEED_CATEGORIES);
    this.memoryData.regions = clone(SEED_REGIONS);
    this.memoryData.circuits = clone(SEED_CIRCUITS);
    this.memoryData.festivals = clone(SEED_FESTIVALS);
    this.memoryData.temples = clone(SEED_TEMPLES).map((t) => ({
      ...t,
      _id: t.id,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }));

    const configuredAdminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
    const configuredAdminPassword = process.env.ADMIN_PASSWORD;
    const users = SEED_USERS.filter((u) => u.role !== 'admin');
    if (configuredAdminEmail && configuredAdminPassword) {
      users.push({
        id: 'configured-admin',
        name: process.env.ADMIN_NAME || 'Portal Administrator',
        email: configuredAdminEmail,
        password: configuredAdminPassword,
        role: 'admin',
        favorites: []
      });
    }

    this.memoryData.users = await Promise.all(users.map(async (u) => ({
      ...u,
      _id: u.id,
      password: await bcrypt.hash(u.password, 10),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    })));
  }

  async readyStore() { await this.ready; }
  setMongoConnected(status) { this.isMongoConnected = status; }

  async getTemples({ query, state, city, deity, category, region, status, featured, page = 1, limit = 12, sort = 'name' } = {}) {
    await this.readyStore();
    const pageNum = Math.max(1, Number(page) || 1);
    const pageSize = Math.max(1, Math.min(100, Number(limit) || 12));
    if (this.isMongoConnected) {
      const filter = { status: status || 'approved' };
      if (state && state !== 'all') filter.state = new RegExp(`^${state}$`, 'i');
      if (city && city !== 'all') filter.city = new RegExp(`^${city}$`, 'i');
      if (deity && deity !== 'all') filter.deity = new RegExp(deity, 'i');
      if (category && category !== 'all') filter.category = category;
      if (region && region !== 'all') filter.region = new RegExp(region, 'i');
      if (featured !== undefined) filter.featured = featured === true || featured === 'true';
      if (query?.trim()) filter.$or = ['name', 'hindiName', 'deity', 'state', 'city', 'shortDescription'].map((key) => ({ [key]: new RegExp(query.trim(), 'i') }));
      const sortBy = sort === 'recent' ? { createdAt: -1 } : { name: 1 };
      const [temples, total] = await Promise.all([
        Temple.find(filter).sort(sortBy).skip((pageNum - 1) * pageSize).limit(pageSize),
        Temple.countDocuments(filter)
      ]);
      return { temples, total, page: pageNum, totalPages: Math.ceil(total / pageSize) || 1 };
    }

    let list = [...this.memoryData.temples].filter((t) => t.status === (status || 'approved'));
    const matches = (value, wanted) => !wanted || wanted === 'all' || String(value || '').toLowerCase().includes(String(wanted).toLowerCase());
    list = list.filter((t) => matches(t.state, state) && matches(t.city, city) && matches(t.deity, deity) && matches(t.category, category) && matches(t.region, region));
    if (featured !== undefined) list = list.filter((t) => Boolean(t.featured) === (featured === true || featured === 'true'));
    if (query?.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter((t) => ['name', 'hindiName', 'deity', 'state', 'city', 'shortDescription', 'architecturalStyle'].some((key) => String(t[key] || '').toLowerCase().includes(q)));
    }
    list.sort(sort === 'recent' ? (a, b) => new Date(b.createdAt) - new Date(a.createdAt) : (a, b) => a.name.localeCompare(b.name));
    const total = list.length;
    return { temples: list.slice((pageNum - 1) * pageSize, pageNum * pageSize), total, page: pageNum, totalPages: Math.ceil(total / pageSize) || 1 };
  }

  async getTempleByIdOrSlug(value) {
    await this.readyStore();
    if (this.isMongoConnected) {
      const clauses = [{ slug: value }, { id: value }];
      if (mongoose.Types.ObjectId.isValid(value)) clauses.unshift({ _id: value });
      const found = await Temple.findOne({ $or: clauses });
      if (found) return found;
    }
    return this.memoryData.temples.find((t) => t.id === value || t.slug === value || t._id === value) || null;
  }

  async createTemple(data) {
    await this.readyStore();
    const record = { ...data, id: data.id || `temple-${Date.now()}`, slug: data.slug || slugify(data.name), status: data.status || 'pending', featured: Boolean(data.featured) };
    if (this.isMongoConnected) return Temple.create(record);
    record._id = record.id;
    record.createdAt = record.updatedAt = new Date().toISOString();
    this.memoryData.temples.unshift(record);
    return record;
  }

  async updateTemple(value, data) {
    await this.readyStore();
    if (this.isMongoConnected) {
      const filter = mongoose.Types.ObjectId.isValid(value) ? { _id: value } : { $or: [{ id: value }, { slug: value }] };
      return Temple.findOneAndUpdate(filter, { ...data, updatedAt: new Date() }, { new: true, runValidators: true });
    }
    const item = this.memoryData.temples.find((t) => t.id === value || t.slug === value || t._id === value);
    if (!item) return null;
    Object.assign(item, data, { updatedAt: new Date().toISOString() });
    return item;
  }

  async deleteTemple(value) {
    await this.readyStore();
    if (this.isMongoConnected) {
      const filter = mongoose.Types.ObjectId.isValid(value) ? { _id: value } : { $or: [{ id: value }, { slug: value }] };
      return Boolean(await Temple.findOneAndDelete(filter));
    }
    const previous = this.memoryData.temples.length;
    this.memoryData.temples = this.memoryData.temples.filter((t) => t.id !== value && t.slug !== value && t._id !== value);
    return this.memoryData.temples.length < previous;
  }
  async setTempleStatus(value, status) { return this.updateTemple(value, { status }); }

  async getFestivals({ month, state } = {}) {
    await this.readyStore();
    if (this.isMongoConnected) {
      const filter = {};
      if (month && month !== 'all') filter.month = new RegExp(month, 'i');
      if (state && state !== 'all') filter.state = new RegExp(state, 'i');
      return Festival.find(filter).sort({ name: 1 });
    }
    return this.memoryData.festivals.filter((f) => (!month || month === 'all' || f.month?.toLowerCase().includes(month.toLowerCase())) && (!state || state === 'all' || f.state?.toLowerCase().includes(state.toLowerCase()) || f.state === 'Pan-India'));
  }
  async getFestivalByIdOrSlug(value) {
    await this.readyStore();
    if (this.isMongoConnected) {
      const clauses = [{ slug: value }, { id: value }];
      if (mongoose.Types.ObjectId.isValid(value)) clauses.unshift({ _id: value });
      const found = await Festival.findOne({ $or: clauses });
      if (found) return found;
    }
    return this.memoryData.festivals.find((f) => f.id === value || f.slug === value || f._id === value) || null;
  }
  async createFestival(data) {
    await this.readyStore();
    const record = { ...data, id: data.id || `festival-${Date.now()}`, slug: data.slug || slugify(data.name) };
    if (this.isMongoConnected) return Festival.create(record);
    record._id = record.id; this.memoryData.festivals.push(record); return record;
  }
  async updateFestival(value, data) {
    await this.readyStore();
    if (this.isMongoConnected) return Festival.findOneAndUpdate({ $or: [{ slug: value }, { id: value }] }, data, { new: true, runValidators: true });
    const item = this.memoryData.festivals.find((f) => f.id === value || f.slug === value || f._id === value);
    if (!item) return null; Object.assign(item, data); return item;
  }
  async deleteFestival(value) {
    await this.readyStore();
    if (this.isMongoConnected) return Boolean(await Festival.findOneAndDelete({ $or: [{ slug: value }, { id: value }] }));
    const old = this.memoryData.festivals.length; this.memoryData.festivals = this.memoryData.festivals.filter((f) => f.id !== value && f.slug !== value && f._id !== value); return old !== this.memoryData.festivals.length;
  }

  async getCircuits({ region } = {}) {
    await this.readyStore();
    if (this.isMongoConnected) return Circuit.find(region && region !== 'all' ? { region: new RegExp(region, 'i') } : {}).sort({ name: 1 });
    return this.memoryData.circuits.filter((c) => !region || region === 'all' || c.region?.toLowerCase().includes(region.toLowerCase()) || c.region === 'Pan-India');
  }
  async getCircuitByIdOrSlug(value) {
    await this.readyStore();
    if (this.isMongoConnected) {
      const clauses = [{ slug: value }, { id: value }];
      if (mongoose.Types.ObjectId.isValid(value)) clauses.unshift({ _id: value });
      const found = await Circuit.findOne({ $or: clauses }); if (found) return found;
    }
    return this.memoryData.circuits.find((c) => c.id === value || c.slug === value || c._id === value) || null;
  }
  async createCircuit(data) {
    await this.readyStore(); const record = { ...data, id: data.id || `circuit-${Date.now()}`, slug: data.slug || slugify(data.name) };
    if (this.isMongoConnected) return Circuit.create(record); record._id = record.id; this.memoryData.circuits.push(record); return record;
  }
  async updateCircuit(value, data) {
    await this.readyStore();
    if (this.isMongoConnected) return Circuit.findOneAndUpdate({ $or: [{ slug: value }, { id: value }] }, data, { new: true, runValidators: true });
    const item = this.memoryData.circuits.find((c) => c.id === value || c.slug === value || c._id === value); if (!item) return null; Object.assign(item, data); return item;
  }
  async deleteCircuit(value) {
    await this.readyStore();
    if (this.isMongoConnected) return Boolean(await Circuit.findOneAndDelete({ $or: [{ slug: value }, { id: value }] }));
    const old = this.memoryData.circuits.length; this.memoryData.circuits = this.memoryData.circuits.filter((c) => c.id !== value && c.slug !== value && c._id !== value); return old !== this.memoryData.circuits.length;
  }

  async findUserByEmail(email) {
    await this.readyStore(); const normalized = email.toLowerCase().trim();
    if (this.isMongoConnected) { const user = await User.findOne({ email: normalized }); if (user) return user; }
    return this.memoryData.users.find((u) => u.email.toLowerCase() === normalized) || null;
  }
  async findUserById(id) {
    await this.readyStore();
    if (this.isMongoConnected && mongoose.Types.ObjectId.isValid(id)) { const user = await User.findById(id); if (user) return user; }
    return this.memoryData.users.find((u) => u.id === id || u._id === id) || null;
  }
  async createUser({ name, email, password, role = 'user' }) {
    await this.readyStore(); const normalized = email.toLowerCase().trim();
    if (await this.findUserByEmail(normalized)) throw new Error('An account with this email address already exists.');
    if (this.isMongoConnected) return User.create({ name, email: normalized, password, role: 'user', favorites: [] });
    const id = `user-${Date.now()}`;
    const user = { id, _id: id, name, email: normalized, password: await bcrypt.hash(password, 10), role: 'user', favorites: [], createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    this.memoryData.users.push(user); return user;
  }
  async getUserFavorites(userId) {
    const user = await this.findUserById(userId); const result = [];
    for (const id of user?.favorites || []) { const temple = await this.getTempleByIdOrSlug(id); if (temple) result.push(temple); }
    return result;
  }
  async addFavorite(userId, templeId) {
    const user = await this.findUserById(userId); if (!user) throw new Error('User not found');
    if (!user.favorites.includes(templeId)) user.favorites.push(templeId);
    if (this.isMongoConnected && mongoose.Types.ObjectId.isValid(userId)) await User.findByIdAndUpdate(userId, { favorites: user.favorites });
    return user.favorites;
  }
  async removeFavorite(userId, templeId) {
    const user = await this.findUserById(userId); if (!user) throw new Error('User not found');
    user.favorites = (user.favorites || []).filter((id) => id !== templeId);
    if (this.isMongoConnected && mongoose.Types.ObjectId.isValid(userId)) await User.findByIdAndUpdate(userId, { favorites: user.favorites });
    return user.favorites;
  }

  async getAdminStats() {
    await this.readyStore();
    const temples = this.isMongoConnected ? await Temple.find({}) : this.memoryData.temples;
    const [totalFestivals, totalCircuits, totalUsers] = this.isMongoConnected
      ? await Promise.all([Festival.countDocuments(), Circuit.countDocuments(), User.countDocuments()])
      : [this.memoryData.festivals.length, this.memoryData.circuits.length, this.memoryData.users.length];
    const stateBreakdown = {}; const categoryBreakdown = {};
    for (const t of temples) { if (t.state) stateBreakdown[t.state] = (stateBreakdown[t.state] || 0) + 1; if (t.category) categoryBreakdown[t.category] = (categoryBreakdown[t.category] || 0) + 1; }
    const metrics = {
      totalTemples: temples.length,
      approvedTemples: temples.filter((t) => t.status === 'approved').length,
      pendingTemples: temples.filter((t) => t.status === 'pending').length,
      rejectedTemples: temples.filter((t) => t.status === 'rejected').length,
      featuredTemples: temples.filter((t) => t.featured).length,
      totalFestivals, totalCircuits, totalUsers
    };
    return { metrics, stateBreakdown, categoryBreakdown, recentTemples: [...temples].sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)).slice(0, 5) };
  }
  async getMetadata() {
    await this.readyStore(); const temples = this.isMongoConnected ? await Temple.find({ status: 'approved' }) : this.memoryData.temples.filter((t) => t.status === 'approved');
    const states = new Set(); const deities = new Set(); const citiesByState = {};
    for (const t of temples) { if (t.state) { states.add(t.state); citiesByState[t.state] ||= new Set(); if (t.city) citiesByState[t.state].add(t.city); } if (t.deity) deities.add(t.deity.split('(')[0].trim()); }
    return { states: [...states].sort(), citiesByState: Object.fromEntries(Object.entries(citiesByState).map(([state, cities]) => [state, [...cities].sort()])), deities: [...deities].sort(), categories: this.memoryData.categories, regions: this.memoryData.regions };
  }
}

export const dataStore = new DataStoreService();
export default dataStore;
