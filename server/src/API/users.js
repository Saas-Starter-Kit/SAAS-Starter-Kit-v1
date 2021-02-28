import express from 'express';
import { CreateContact } from '../Services/users/contacts.js';

import { asyncHandler } from '../Middleware/asyncErrorHandler.js';

const router = express.Router();

/* Create contact in sendinblue */
router.post('/post/contact', asyncHandler(CreateContact));

export default router;
