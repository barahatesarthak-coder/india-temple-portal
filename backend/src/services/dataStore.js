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
import Category from '../models/Category.js';
import Region from '../models/Region.js';
import User from '../models/User.js';

class DataStoreService {
  constructor() {
    this.isMongoConnected = false;
    this.memoryData = {
      temples: [],
      festivals: [],
      circuits: [],
      categories: [],
      regions: [],
      users: []
    };
    this.initMemoryStore();
  }

  async initMemoryStore() {
    // Clone seed data into memory
    this.memoryData.categories = JSON.parse(JSON.stringify(SEED_CATEGORIES));
    this.memoryData.regions = JSON.parse(JSON.stringify(SEED_REGIONS));
    this.memoryData.circuits = JSON.parse(JSON.stringify(SEED_CIRCUITS));
    this.memoryData.festivals = JSON.parse(JSON.stringify(SEED_FESTIVALS));
    this.memoryData.temples = JSON.parse(JSON.stringify(SEED_TEMPLES)).map(t => ({
      ...t,
      _id: t.id,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }));

    // Pre-hash user passwords in memory for fast login
    this.memoryData.users = await Promise.all(
      SEED_USERS.map(async (u) => {
        const hashedPassword = await bcrypt.hash(u.password, 10);
        return {
          ...u,
          _id: u.id,
          password: hashedPassword,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
      })
    );
  }

  setMongoConnected(status) {
    this.isMongoConnected = status;
  }

  // --- TEMPLES ---
  async getTemples({ query, state, city, deity, category, region, status, featured, page = 1, limit = 12, sort = 'name' }) {
    if (this.isMongoConnected) {
      try {
        const filter = {};
        if (status) {
          filter.status = status;
        } else {
          filter.status = 'approved';
        }

        if (featured !== undefined) filter.featured = featured === 'true' || featured === true;
        if (state && state !== 'all') filter.state = new RegExp(`^${state}$`, 'i');
        if (city && city !== 'all') filter.city = new RegExp(`^${city}$`, 'i');
        if (deity && deity !== 'all') filter.deity = new RegExp(deity, 'i');
        if (category && category !== 'all') filter.category = category;
        if (region && region !== 'all') filter.region = new RegExp(region, 'i');

        if (query && query.trim()) {
          const qRegex = new RegExp(query.trim(), 'i');
          filter.$or = [
            { name: qRegex },
            { hindiName: qRegex },
            { deity: qRegex },
            { state: qRegex },
            { city: qRegex },
            { shortDescription: qRegex },
            { architecturalStyle: qRegex }
          ];
        }

        const skip = (Number(page) - 1) * Number(limit);
        const sortOption = sort === 'recent' ? { createdAt: -1 } : { name: 1 };

        const [temples, total] = await Promise.all([
          Temple.find(filter).sort(sortOption).skip(skip).limit(Number(limit)),
          Temple.countDocuments(filter)
        ]);

        return {
          temples,
          total,
          page: Number(page),
          totalPages: Math.ceil(total / Number(limit)) || 1
        };
      } catch (err) {
        console.warn('MongoDB query failed, falling back to memory store:', err.message);
      }
    }

    // In-memory filter
    let list = [...this.memoryData.temples];

    if (status) {
      list = list.filter(t => t.status === status);
    } else {
      list = list.filter(t => t.status === 'approved');
    }

    if (featured !== undefined) {
      const isFeat = featured === 'true' || featured === true;
      list = list.filter(t => Boolean(t.featured) === isFeat);
    }

    if (state && state !== 'all') {
      list = list.filter(t => t.state?.toLowerCase() === state.toLowerCase());
    }

    if (city && city !== 'all') {
      list = list.filter(t => t.city?.toLowerCase() === city.toLowerCase());
    }

    if (deity && deity !== 'all') {
      list = list.filter(t => t.deity?.toLowerCase().includes(deity.toLowerCase()));
    }

    if (category && category !== 'all') {
      list = list.filter(t => t.category?.toLowerCase() === category.toLowerCase());
    }

    if (region && region !== 'all') {
      list = list.filter(t => t.region?.toLowerCase().includes(region.toLowerCase()));
    }

    if (query && query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(t => 
        (t.name && t.name.toLowerCase().includes(q)) ||
        (t.hindiName && t.hindiName.toLowerCase().includes(q)) ||
        (t.deity && t.deity.toLowerCase().includes(q)) ||
        (t.state && t.state.toLowerCase().includes(q)) ||
        (t.city && t.city.toLowerCase().includes(q)) ||
        (t.shortDescription && t.shortDescription.toLowerCase().includes(q)) ||
        (t.architecturalStyle && t.architecturalStyle.toLowerCase().includes(q))
      );
    }

    if (sort === 'recent') {
      list.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
    } else {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    const total = list.length;
    const skip = (Number(page) - 1) * Number(limit);
    const paginated = list.slice(skip, skip + Number(limit));

    return {
      temples: paginated,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / Number(limit)) || 1
    };
  }

  async getTempleByIdOrSlug(idOrSlug) {
    if (this.isMongoConnected) {
      try {
        let temple = null;
        if (mongoose.Types.ObjectId.isValid(idOrSlug)) {
          temple = await Temple.findById(idOrSlug);
        }
        if (!temple) {
          temple = await Temple.findOne({ $or: [{ slug: idOrSlug }, { id: idOrSlug }] });
        }
        if (temple) return temple;
      } catch (err) {
        console.warn('MongoDB find failed, falling back to memory store');
      }
    }

    return this.memoryData.temples.find(t => 
      t.id === idOrSlug || t.slug === idOrSlug || t._id === idOrSlug
    ) || null;
  }

  async createTemple(templeData) {
    const slug = templeData.slug || templeData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const id = templeData.id || `temple-${Date.now()}`;
    const newRecord = {
      ...templeData,
      id,
      slug,
      status: templeData.status || 'pending',
      featured: Boolean(templeData.featured),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    if (this.isMongoConnected) {
      try {
        const created = await Temple.create(newRecord);
        return created;
      } catch (err) {
        console.warn('MongoDB create failed, falling back to memory store');
      }
    }

    newRecord._id = id;
    this.memoryData.temples.unshift(newRecord);
    return newRecord;
  }

  async updateTemple(idOrSlug, updateData) {
    if (this.isMongoConnected) {
      try {
        const filter = mongoose.Types.ObjectId.isValid(idOrSlug)
          ? { _id: idOrSlug }
          : { $or: [{ slug: idOrSlug }, { id: idOrSlug }] };
        const updated = await Temple.findOneAndUpdate(filter, { ...updateData, updatedAt: new Date() }, { new: true });
        if (updated) return updated;
      } catch (err) {
        console.warn('MongoDB update failed, falling back to memory store');
      }
    }

    const index = this.memoryData.temples.findIndex(t => 
      t.id === idOrSlug || t.slug === idOrSlug || t._id === idOrSlug
    );
    if (index === -1) return null;

    this.memoryData.temples[index] = {
      ...this.memoryData.temples[index],
      ...updateData,
      updatedAt: new Date().toISOString()
    };
    return this.memoryData.temples[index];
  }

  async deleteTemple(idOrSlug) {
    if (this.isMongoConnected) {
      try {
        const filter = mongoose.Types.ObjectId.isValid(idOrSlug)
          ? { _id: idOrSlug }
          : { $or: [{ slug: idOrSlug }, { id: idOrSlug }] };
        const deleted = await Temple.findOneAndDelete(filter);
        if (deleted) return true;
      } catch (err) {
        console.warn('MongoDB delete failed, falling back to memory store');
      }
    }

    const initialLen = this.memoryData.temples.length;
    this.memoryData.temples = this.memoryData.temples.filter(t => 
      t.id !== idOrSlug && t.slug !== idOrSlug && t._id !== idOrSlug
    );
    return this.memoryData.temples.length < initialLen;
  }

  async setTempleStatus(idOrSlug, status) {
    return this.updateTemple(idOrSlug, { status });
  }

  // --- FESTIVALS ---
  async getFestivals({ month, state } = {}) {
    if (this.isMongoConnected) {
      try {
        const filter = {};
        if (month && month !== 'all') filter.month = new RegExp(month, 'i');
        if (state && state !== 'all') filter.state = new RegExp(state, 'i');
        return await Festival.find(filter).sort({ name: 1 });
      } catch (err) {
        console.warn('MongoDB festival fetch failed');
      }
    }

    let list = [...this.memoryData.festivals];
    if (month && month !== 'all') {
      list = list.filter(f => f.month.toLowerCase().includes(month.toLowerCase()));
    }
    if (state && state !== 'all') {
      list = list.filter(f => f.state.toLowerCase().includes(state.toLowerCase()) || f.state === 'Pan-India');
    }
    return list;
  }

  async getFestivalByIdOrSlug(idOrSlug) {
    if (this.isMongoConnected) {
      try {
        const festival = await Festival.findOne({ $or: [{ _id: mongoose.Types.ObjectId.isValid(idOrSlug) ? idOrSlug : null }, { slug: idOrSlug }, { id: idOrSlug }] });
        if (festival) return festival;
      } catch (err) {}
    }
    return this.memoryData.festivals.find(f => f.id === idOrSlug || f.slug === idOrSlug || f._id === idOrSlug) || null;
  }

  async createFestival(data) {
    const slug = data.slug || data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const id = data.id || `festival-${Date.now()}`;
    const newFestival = { ...data, id, slug, createdAt: new Date().toISOString() };

    if (this.isMongoConnected) {
      try {
        return await Festival.create(newFestival);
      } catch (err) {}
    }
    newFestival._id = id;
    this.memoryData.festivals.push(newFestival);
    return newFestival;
  }

  async updateFestival(idOrSlug, data) {
    if (this.isMongoConnected) {
      try {
        return await Festival.findOneAndUpdate({ $or: [{ slug: idOrSlug }, { id: idOrSlug }] }, data, { new: true });
      } catch (err) {}
    }
    const idx = this.memoryData.festivals.findIndex(f => f.id === idOrSlug || f.slug === idOrSlug || f._id === idOrSlug);
    if (idx === -1) return null;
    this.memoryData.festivals[idx] = { ...this.memoryData.festivals[idx], ...data, updatedAt: new Date().toISOString() };
    return this.memoryData.festivals[idx];
  }

  async deleteFestival(idOrSlug) {
    if (this.isMongoConnected) {
      try {
        await Festival.findOneAndDelete({ $or: [{ slug: idOrSlug }, { id: idOrSlug }] });
        return true;
      } catch (err) {}
    }
    this.memoryData.festivals = this.memoryData.festivals.filter(f => f.id !== idOrSlug && f.slug !== idOrSlug && f._id !== idOrSlug);
    return true;
  }

  // --- CIRCUITS ---
  async getCircuits({ region } = {}) {
    if (this.isMongoConnected) {
      try {
        const filter = {};
        if (region && region !== 'all') filter.region = new RegExp(region, 'i');
        return await Circuit.find(filter).sort({ name: 1 });
      } catch (err) {}
    }

    let list = [...this.memoryData.circuits];
    if (region && region !== 'all') {
      list = list.filter(c => c.region.toLowerCase().includes(region.toLowerCase()) || c.region === 'Pan-India');
    }
    return list;
  }

  async getCircuitByIdOrSlug(idOrSlug) {
    if (this.isMongoConnected) {
      try {
        const circuit = await Circuit.findOne({ $or: [{ _id: mongoose.Types.ObjectId.isValid(idOrSlug) ? idOrSlug : null }, { slug: idOrSlug }, { id: idOrSlug }] });
        if (circuit) return circuit;
      } catch (err) {}
    }
    return this.memoryData.circuits.find(c => c.id === idOrSlug || c.slug === idOrSlug || c._id === idOrSlug) || null;
  }

  async createCircuit(data) {
    const slug = data.slug || data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const id = data.id || `circuit-${Date.now()}`;
    const newCircuit = { ...data, id, slug, createdAt: new Date().toISOString() };

    if (this.isMongoConnected) {
      try {
        return await Circuit.create(newCircuit);
      } catch (err) {}
    }
    newCircuit._id = id;
    this.memoryData.circuits.push(newCircuit);
    return newCircuit;
  }

  async updateCircuit(idOrSlug, data) {
    if (this.isMongoConnected) {
      try {
        return await Circuit.findOneAndUpdate({ $or: [{ slug: idOrSlug }, { id: idOrSlug }] }, data, { new: true });
      } catch (err) {}
    }
    const idx = this.memoryData.circuits.findIndex(c => c.id === idOrSlug || c.slug === idOrSlug || c._id === idOrSlug);
    if (idx === -1) return null;
    this.memoryData.circuits[idx] = { ...this.memoryData.circuits[idx], ...data, updatedAt: new Date().toISOString() };
    return this.memoryData.circuits[idx];
  }

  async deleteCircuit(idOrSlug) {
    if (this.isMongoConnected) {
      try {
        await Circuit.findOneAndDelete({ $or: [{ slug: idOrSlug }, { id: idOrSlug }] });
        return true;
      } catch (err) {}
    }
    this.memoryData.circuits = this.memoryData.circuits.filter(c => c.id !== idOrSlug && c.slug !== idOrSlug && c._id !== idOrSlug);
    return true;
  }

  // --- USERS & AUTH ---
  async findUserByEmail(email) {
    const normalized = email.toLowerCase().trim();
    if (this.isMongoConnected) {
      try {
        const user = await User.findOne({ email: normalized });
        if (user) return user;
      } catch (err) {}
    }
    return this.memoryData.users.find(u => u.email.toLowerCase() === normalized) || null;
  }

  async findUserById(id) {
    if (this.isMongoConnected) {
      try {
        const user = await User.findById(id);
        if (user) return user;
      } catch (err) {}
    }
    return this.memoryData.users.find(u => u.id === id || u._id === id) || null;
  }

  async createUser({ name, email, password, role = 'user' }) {
    const normalized = email.toLowerCase().trim();
    const existing = await this.findUserByEmail(normalized);
    if (existing) {
      throw new Error('An account with this email address already exists.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const id = `user-${Date.now()}`;
    const newUser = {
      id,
      _id: id,
      name,
      email: normalized,
      password: hashedPassword,
      role,
      favorites: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    if (this.isMongoConnected) {
      try {
        const created = await User.create({
          name,
          email: normalized,
          password, // will be hashed by pre-save
          role,
          favorites: []
        });
        return created;
      } catch (err) {}
    }

    this.memoryData.users.push(newUser);
    return newUser;
  }

  async getUserFavorites(userId) {
    const user = await this.findUserById(userId);
    if (!user) return [];
    const favIds = user.favorites || [];
    
    // Resolve favorites to temple objects
    const temples = [];
    for (const favId of favIds) {
      const temple = await this.getTempleByIdOrSlug(favId);
      if (temple) temples.push(temple);
    }
    return temples;
  }

  async addFavorite(userId, templeId) {
    const user = await this.findUserById(userId);
    if (!user) throw new Error('User not found');

    if (!user.favorites) user.favorites = [];
    if (!user.favorites.includes(templeId)) {
      user.favorites.push(templeId);
    }

    if (this.isMongoConnected) {
      try {
        await User.findByIdAndUpdate(userId, { favorites: user.favorites });
      } catch (err) {}
    }

    return user.favorites;
  }

  async removeFavorite(userId, templeId) {
    const user = await this.findUserById(userId);
    if (!user) throw new Error('User not found');

    if (user.favorites) {
      user.favorites = user.favorites.filter(id => id !== templeId);
    }

    if (this.isMongoConnected) {
      try {
        await User.findByIdAndUpdate(userId, { favorites: user.favorites });
      } catch (err) {}
    }

    return user.favorites;
  }

  // --- ADMIN STATS ---
  async getAdminStats() {
    const allTemples = this.isMongoConnected
      ? await Temple.find({})
      : this.memoryData.temples;

    const totalTemples = allTemples.length;
    const approvedTemples = allTemples.filter(t => t.status === 'approved').length;
    const pendingTemples = allTemples.filter(t => t.status === 'pending').length;
    const rejectedTemples = allTemples.filter(t => t.status === 'rejected').length;
    const featuredTemples = allTemples.filter(t => t.featured).length;

    const totalFestivals = this.isMongoConnected
      ? await Festival.countDocuments()
      : this.memoryData.festivals.length;

    const totalCircuits = this.isMongoConnected
      ? await Circuit.countDocuments()
      : this.memoryData.circuits.length;

    const totalUsers = this.isMongoConnected
      ? await User.countDocuments()
      : this.memoryData.users.length;

    // States and categories distribution
    const stateBreakdown = {};
    const categoryBreakdown = {};
    for (const t of allTemples) {
      if (t.state) {
        stateBreakdown[t.state] = (stateBreakdown[t.state] || 0) + 1;
      }
      if (t.category) {
        categoryBreakdown[t.category] = (categoryBreakdown[t.category] || 0) + 1;
      }
    }

    const recentTemples = allTemples
      .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
      .slice(0, 5);

    return {
      metrics: {
        totalTemples,
        approvedTemples,
        pendingTemples,
        rejectedTemples,
        featuredTemples,
        totalFestivals,
        totalCircuits,
        totalUsers
      },
      stateBreakdown,
      categoryBreakdown,
      recentTemples
    };
  }

  // --- METADATA (STATES, CITIES, DEITIES, CATEGORIES, REGIONS) ---
  async getMetadata() {
    const temples = this.isMongoConnected
      ? await Temple.find({ status: 'approved' })
      : this.memoryData.temples.filter(t => t.status === 'approved');

    const statesSet = new Set();
    const citiesByState = {};
    const deitiesSet = new Set();

    for (const t of temples) {
      if (t.state) {
        statesSet.add(t.state);
        if (!citiesByState[t.state]) citiesByState[t.state] = new Set();
        if (t.city) citiesByState[t.state].add(t.city);
      }
      if (t.deity) {
        deitiesSet.add(t.deity.split('(')[0].trim());
      }
    }

    const formattedCities = {};
    for (const [s, cSet] of Object.entries(citiesByState)) {
      formattedCities[s] = Array.from(cSet).sort();
    }

    return {
      states: Array.from(statesSet).sort(),
      citiesByState: formattedCities,
      deities: Array.from(deitiesSet).sort(),
      categories: this.memoryData.categories,
      regions: this.memoryData.regions
    };
  }
}

export const dataStore = new DataStoreService();
export default dataStore;
