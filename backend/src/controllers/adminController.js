import dataStore from '../services/dataStore.js';

export const getDashboardStats = async (req, res, next) => {
  try {
    const stats = await dataStore.getAdminStats();
    res.status(200).json({
      success: true,
      data: stats
    });
  } catch (error) {
    next(error);
  }
};

export const getCategories = async (req, res, next) => {
  try {
    const meta = await dataStore.getMetadata();
    res.status(200).json({
      success: true,
      data: meta.categories
    });
  } catch (error) {
    next(error);
  }
};

export const createCategory = async (req, res, next) => {
  try {
    const { id, name, description } = req.body;
    if (!id || !name) {
      return res.status(400).json({ success: false, message: 'Category ID and Name are required.' });
    }
    const catId = id.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const newCat = { id: catId, name, description: description || '' };
    dataStore.memoryData.categories.push(newCat);
    res.status(201).json({ success: true, message: 'Category created successfully.', data: newCat });
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    dataStore.memoryData.categories = dataStore.memoryData.categories.filter(c => c.id !== id);
    res.status(200).json({ success: true, message: 'Category removed.' });
  } catch (error) {
    next(error);
  }
};

export const getRegions = async (req, res, next) => {
  try {
    const meta = await dataStore.getMetadata();
    res.status(200).json({
      success: true,
      data: meta.regions
    });
  } catch (error) {
    next(error);
  }
};

export const createRegion = async (req, res, next) => {
  try {
    const { id, name, states } = req.body;
    if (!id || !name) {
      return res.status(400).json({ success: false, message: 'Region ID and Name are required.' });
    }
    const regId = id.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const newReg = { id: regId, name, states: Array.isArray(states) ? states : [] };
    dataStore.memoryData.regions.push(newReg);
    res.status(201).json({ success: true, message: 'Region created successfully.', data: newReg });
  } catch (error) {
    next(error);
  }
};

export const deleteRegion = async (req, res, next) => {
  try {
    const { id } = req.params;
    dataStore.memoryData.regions = dataStore.memoryData.regions.filter(r => r.id !== id);
    res.status(200).json({ success: true, message: 'Region removed.' });
  } catch (error) {
    next(error);
  }
};

export default {
  getDashboardStats,
  getCategories,
  createCategory,
  deleteCategory,
  getRegions,
  createRegion,
  deleteRegion
};
