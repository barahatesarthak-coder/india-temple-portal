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

const REAL_TEMPLE_IMAGES = {
  'kashi-vishwanath': [
    'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80'
  ],
  'tirupati-balaji': [
    'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'
  ],
  'meenakshi-amman': [
    'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80'
  ],
  'kedarnath-temple': [
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80'
  ],
  'somnath-temple': [
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80'
  ],
  'jagannath-puri': [
    'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80'
  ],
  'brihadeeswarar-temple': [
    'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80'
  ],
  'badrinath-temple': [
    'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80'
  ],
  'golden-temple-amritsar': [
    'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80'
  ],
  'mahakaleshwar-ujjain': [
    'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80'
  ],
  'kamakhya-temple': [
    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80'
  ],
  'ramanathaswamy-temple': [
    'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80'
  ]
};

const DEFAULT_ADMIN_EMAIL = 'admin@devalaya.in';
const DEFAULT_ADMIN_PASSWORD = 'DevalayaAdmin@2026';

const normalizeSeedUsers = () =>
  SEED_USERS.map((user) => {
    if (user.email.toLowerCase() === 'admin@heritage.gov.in') {
      return {
        ...user,
        email: DEFAULT_ADMIN_EMAIL,
        password: DEFAULT_ADMIN_PASSWORD
      };
    }
    return user;
  });

const resolveTempleImages = (temple) => {
  if (REAL_TEMPLE_IMAGES[temple.id]) return REAL_TEMPLE_IMAGES[temple.id];
  if (Array.isArray(temple.images) && temple.images.length) return temple.images;
  return [
    'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80'
  ];
};

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
    this.memoryData.categories = JSON.parse(JSON.stringify(SEED_CATEGORIES));
    this.memoryData.regions = JSON.parse(JSON.stringify(SEED_REGIONS));
    this.memoryData.circuits = JSON.parse(JSON.stringify(SEED_CIRCUITS));
    this.memoryData.festivals = JSON.parse(JSON.stringify(SEED_FESTIVALS));
    this.memoryData.temples = JSON.parse(JSON.stringify(SEED_TEMPLES)).map((temple) => ({
      ...temple,
      images: resolveTempleImages(temple),
      _id: temple.id,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }));

    this.memoryData.users = await Promise.all(
      normalizeSeedUsers().map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return {
          ...user,
          _id: user.id,
          password: hashedPassword,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
      })
    );
  }

  // ... rest of file remains unchanged
