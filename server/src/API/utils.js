import express from 'express';
const router = express.Router();

import { _healthCheck, privateRoute, failHealthCheck } from '../Services/utils/health.js';

import { asyncHandler } from '../Middleware/asyncErrorHandler.js';
import { requireAuth } from '../Middleware/auth.js';

//intentionally fail health check for development/testing
router.get('/fail-health', asyncHandler(failHealthCheck));

//Example of authenticated route, use for development/testing
router.get('/private/auth', requireAuth, asyncHandler(privateRoute));
router.post('/private/auth', requireAuth, asyncHandler(privateRoute));

router.get('/health', asyncHandler(_healthCheck));

export default router;
