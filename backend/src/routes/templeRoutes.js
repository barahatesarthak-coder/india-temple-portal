import express from 'express';
import {
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
} from '../controllers/templeController.js';
import { protect, adminOnly, optionalAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes (with optional auth for favorite checking / role checks)
router.get('/', optionalAuth, getTemples);
router.get('/featured', getFeaturedTemples);
router.get('/states', getStates);
router.get('/cities', getCities);
router.get('/:id', optionalAuth, getTempleByIdOrSlug);

// Admin routes
router.post('/', protect, adminOnly, createTemple);
router.put('/:id', protect, adminOnly, updateTemple);
router.delete('/:id', protect, adminOnly, deleteTemple);
router.patch('/:id/approve', protect, adminOnly, approveTemple);
router.patch('/:id/reject', protect, adminOnly, rejectTemple);

export default router;
