import dataStore from '../services/dataStore.js';

export const getTemples = async (req, res, next) => {
  try {
    const {
      q,
      query,
      state,
      city,
      deity,
      category,
      region,
      featured,
      status,
      page = 1,
      limit = 12,
      sort = 'name'
    } = req.query;

    const searchTerm = query || q || '';

    // If regular user, only show approved temples; if admin, allow custom status filter
    let requestedStatus = status;
    if (!req.user || req.user.role !== 'admin') {
      requestedStatus = 'approved';
    }

    const result = await dataStore.getTemples({
      query: searchTerm,
      state,
      city,
      deity,
      category,
      region,
      featured,
      status: requestedStatus,
      page: parseInt(page, 10),
      limit: parseInt(limit, 10),
      sort
    });

    res.status(200).json({
      success: true,
      count: result.temples.length,
      total: result.total,
      page: result.page,
      totalPages: result.totalPages,
      data: result.temples
    });
  } catch (error) {
    next(error);
  }
};

export const getFeaturedTemples = async (req, res, next) => {
  try {
    const result = await dataStore.getTemples({
      featured: true,
      status: 'approved',
      limit: 6
    });

    res.status(200).json({
      success: true,
      count: result.temples.length,
      data: result.temples
    });
  } catch (error) {
    next(error);
  }
};

export const getTempleByIdOrSlug = async (req, res, next) => {
  try {
    const { id } = req.params;
    const temple = await dataStore.getTempleByIdOrSlug(id);

    if (!temple) {
      return res.status(404).json({
        success: false,
        message: `Temple with identifier '${id}' was not found.`
      });
    }

    // Check status if not admin
    if (temple.status !== 'approved' && (!req.user || req.user.role !== 'admin')) {
      return res.status(404).json({
        success: false,
        message: 'This temple listing is currently undergoing administrative review.'
      });
    }

    res.status(200).json({
      success: true,
      data: temple
    });
  } catch (error) {
    next(error);
  }
};

export const getStates = async (req, res, next) => {
  try {
    const meta = await dataStore.getMetadata();
    res.status(200).json({
      success: true,
      data: meta.states
    });
  } catch (error) {
    next(error);
  }
};

export const getCities = async (req, res, next) => {
  try {
    const { state } = req.query;
    const meta = await dataStore.getMetadata();

    if (state && meta.citiesByState[state]) {
      return res.status(200).json({
        success: true,
        data: meta.citiesByState[state]
      });
    }

    // All cities flat list
    const allCities = Object.values(meta.citiesByState).flat().sort();
    const uniqueCities = Array.from(new Set(allCities));

    res.status(200).json({
      success: true,
      data: uniqueCities
    });
  } catch (error) {
    next(error);
  }
};

export const createTemple = async (req, res, next) => {
  try {
    const {
      name,
      deity,
      state,
      city,
      shortDescription,
      historicalBackground,
      darshanTimings
    } = req.body;

    if (!name || !deity || !state || !city || !shortDescription || !historicalBackground || !darshanTimings) {
      return res.status(400).json({
        success: false,
        message: 'Please complete all required fields: Name, Deity, State, City, Short Description, Historical Background, and Darshan Timings.'
      });
    }

    const newTemple = await dataStore.createTemple({
      ...req.body,
      status: req.user.role === 'admin' && req.body.status ? req.body.status : 'approved'
    });

    res.status(201).json({
      success: true,
      message: 'Temple listing created successfully.',
      data: newTemple
    });
  } catch (error) {
    next(error);
  }
};

export const updateTemple = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await dataStore.updateTemple(id, req.body);

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: `Temple '${id}' not found.`
      });
    }

    res.status(200).json({
      success: true,
      message: 'Temple listing updated successfully.',
      data: updated
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTemple = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await dataStore.deleteTemple(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: `Temple '${id}' not found.`
      });
    }

    res.status(200).json({
      success: true,
      message: 'Temple listing removed successfully.'
    });
  } catch (error) {
    next(error);
  }
};

export const approveTemple = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await dataStore.setTempleStatus(id, 'approved');

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: `Temple '${id}' not found.`
      });
    }

    res.status(200).json({
      success: true,
      message: 'Temple approved and published to public directory.',
      data: updated
    });
  } catch (error) {
    next(error);
  }
};

export const rejectTemple = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await dataStore.setTempleStatus(id, 'rejected');

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: `Temple '${id}' not found.`
      });
    }

    res.status(200).json({
      success: true,
      message: 'Temple status marked as rejected.',
      data: updated
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getTemples,
  getFeaturedTemples,
  getTempleByIdOrSlug,
  getStates,
  getCities,
  createTemple,
  updateTemple,
  deleteTemple,
  approveTemple,
  rejectTemple
};
