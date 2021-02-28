import express from 'express';

//initialize libraries
import './Config/dotenv.js';
import './Config/firebase.js';
import './Database/mongo/db.js';
import './Database/sql/db.js';

import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import limiter from './Middleware/rateLimiter.js';
import { errorHandler } from './Middleware/errorHandler.js';
import { unhandledRejectionHandler } from './Middleware/unhandledRejectionHandler.js';

import auth from './API/auth.js';
import todoApi from './API/todos.js';
import utilsApi from './API/utils.js';
import appApi from './API/app.js';
import usersApi from './API/users.js';

const app = express();

//Middleware
app.use(cors());
app.use(limiter);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//API routes
app.use('/', utilsApi);
app.use('/auth', auth);
app.use('/api', todoApi);
app.use('/api', appApi);
app.use('/api', usersApi);

// error handling
app.use(errorHandler);
process.on('unhandledRejection', unhandledRejectionHandler);

export default app;
