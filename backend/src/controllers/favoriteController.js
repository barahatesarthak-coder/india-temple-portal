import dataStore from '../services/dataStore.js';

export const getFavorites = async (req, res, next) => {
  try {
    const temples = await dataStore.getUserFavorites(req.user.id);
    res.status(200).json({
      success: true,
      count: temples.length,
      data: temples
    });
  } catch (error) {
    next(error);
  }
};

export const addFavorite = async (req, res, next) => {
  try {
    const { templeId } = req.params;
    const favorites = await dataStore.addFavorite(req.user.id, templeId);

    res.status(200).json({
      success: true,
      message: 'Temple added to saved pilgrimage list.',
      data: favorites
    });
  } catch (error) {
    next(error);
  }
};

export const removeFavorite = async (req, res, next) => {
  try {
    const { templeId } = req.params;
    const favorites = await dataStore.removeFavorite(req.user.id, templeId);

    res.status(200).json({
      success: true,
      message: 'Temple removed from saved favorites.',
      data: favorites
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getFavorites,
  addFavorite,
  removeFavorite
};
