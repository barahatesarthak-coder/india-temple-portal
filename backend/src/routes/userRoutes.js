import express from 'express';
import { getFavorites, addFavorite, removeFavorite } from '../controllers/favoriteController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/favorites', protect, getFavorites);
router.post('/favorites/:templeId', protect, addFavorite);
router.delete('/favorites/:templeId', protect, removeFavorite);

export default router;
