import express from 'express';
import {
  getCircuits,
  getCircuitByIdOrSlug,
  createCircuit,
  updateCircuit,
  deleteCircuit
} from '../controllers/circuitController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getCircuits);
router.get('/:id', getCircuitByIdOrSlug);

router.post('/', protect, adminOnly, createCircuit);
router.put('/:id', protect, adminOnly, updateCircuit);
router.delete('/:id', protect, adminOnly, deleteCircuit);

export default router;
