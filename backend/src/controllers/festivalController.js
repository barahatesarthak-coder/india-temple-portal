import dataStore from '../services/dataStore.js';

export const getFestivals = async (req, res, next) => {
  try {
    const { month, state } = req.query;
    const festivals = await dataStore.getFestivals({ month, state });

    res.status(200).json({
      success: true,
      count: festivals.length,
      data: festivals
    });
  } catch (error) {
    next(error);
  }
};

export const getFestivalByIdOrSlug = async (req, res, next) => {
  try {
    const { id } = req.params;
    const festival = await dataStore.getFestivalByIdOrSlug(id);

    if (!festival) {
      return res.status(404).json({
        success: false,
        message: `Festival '${id}' not found.`
      });
    }

    res.status(200).json({
      success: true,
      data: festival
    });
  } catch (error) {
    next(error);
  }
};

export const createFestival = async (req, res, next) => {
  try {
    const { name, month, state, description, significance } = req.body;

    if (!name || !month || !state || !description || !significance) {
      return res.status(400).json({
        success: false,
        message: 'Name, month, state, description, and significance are required.'
      });
    }

    const created = await dataStore.createFestival(req.body);
    res.status(201).json({
      success: true,
      message: 'Festival created successfully.',
      data: created
    });
  } catch (error) {
    next(error);
  }
};

export const updateFestival = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await dataStore.updateFestival(id, req.body);

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: `Festival '${id}' not found.`
      });
    }

    res.status(200).json({
      success: true,
      message: 'Festival updated successfully.',
      data: updated
    });
  } catch (error) {
    next(error);
  }
};

export const deleteFestival = async (req, res, next) => {
  try {
    const { id } = req.params;
    await dataStore.deleteFestival(id);

    res.status(200).json({
      success: true,
      message: 'Festival deleted successfully.'
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getFestivals,
  getFestivalByIdOrSlug,
  createFestival,
  updateFestival,
  deleteFestival
};
