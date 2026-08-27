import express from 'express';
import { getMetadata } from '../controllers/metaController.js';

const router = express.Router();

router.get('/', getMetadata);

export default router;
