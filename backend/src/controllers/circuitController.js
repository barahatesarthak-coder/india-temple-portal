import dataStore from '../services/dataStore.js';

export const getCircuits = async (req, res, next) => {
  try {
    const { region } = req.query;
    const circuits = await dataStore.getCircuits({ region });

    res.status(200).json({
      success: true,
      count: circuits.length,
      data: circuits
    });
  } catch (error) {
    next(error);
  }
};

export const getCircuitByIdOrSlug = async (req, res, next) => {
  try {
    const { id } = req.params;
    const circuit = await dataStore.getCircuitByIdOrSlug(id);

    if (!circuit) {
      return res.status(404).json({
        success: false,
        message: `Pilgrimage circuit '${id}' not found.`
      });
    }

    // Populate associated temples
    const temples = [];
    if (circuit.templeIds && circuit.templeIds.length > 0) {
      for (const tId of circuit.templeIds) {
        const t = await dataStore.getTempleByIdOrSlug(tId);
        if (t) temples.push(t);
      }
    }

    res.status(200).json({
      success: true,
      data: {
        ...circuit,
        temples
      }
    });
  } catch (error) {
    next(error);
  }
};

export const createCircuit = async (req, res, next) => {
  try {
    const { name, region, duration, description } = req.body;

    if (!name || !region || !duration || !description) {
      return res.status(400).json({
        success: false,
        message: 'Name, region, duration, and description are required.'
      });
    }

    const created = await dataStore.createCircuit(req.body);
    res.status(201).json({
      success: true,
      message: 'Pilgrimage circuit created successfully.',
      data: created
    });
  } catch (error) {
    next(error);
  }
};

export const updateCircuit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await dataStore.updateCircuit(id, req.body);

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: `Pilgrimage circuit '${id}' not found.`
      });
    }

    res.status(200).json({
      success: true,
      message: 'Pilgrimage circuit updated successfully.',
      data: updated
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCircuit = async (req, res, next) => {
  try {
    const { id } = req.params;
    await dataStore.deleteCircuit(id);

    res.status(200).json({
      success: true,
      message: 'Pilgrimage circuit deleted successfully.'
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getCircuits,
  getCircuitByIdOrSlug,
  createCircuit,
  updateCircuit,
  deleteCircuit
};
