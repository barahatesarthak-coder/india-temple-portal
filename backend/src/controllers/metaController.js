import dataStore from '../services/dataStore.js';

export const getMetadata = async (req, res, next) => {
  try {
    const meta = await dataStore.getMetadata();
    res.status(200).json({
      success: true,
      data: meta
    });
  } catch (error) {
    next(error);
  }
};

export default { getMetadata };
