import express from 'express';
import {
  getDashboardStats,
  getCategories,
  createCategory,
  deleteCategory,
  getRegions,
  createRegion,
  deleteRegion
} from '../controllers/adminController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

// Protected admin-only routes
router.use(protect, adminOnly);

router.get('/dashboard', getDashboardStats);
router.get('/categories', getCategories);
router.post('/categories', createCategory);
router.delete('/categories/:id', deleteCategory);
router.get('/regions', getRegions);
router.post('/regions', createRegion);
router.delete('/regions/:id', deleteRegion);

export default router;
