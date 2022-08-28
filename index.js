import cors from 'cors';
import path from 'path';
import express from 'express';
import consola from 'consola';
import process from 'process';
import mongoose from 'mongoose';
import passport from 'passport';
import { json } from 'body-parser';
import { DB_CONN, PORT } from './configs';
import { WebRouter, ApiAuthRouter } from './routes';
import { ResponseService as RS } from './services';

// Load global variables
require('./global');

// Import passport middleware
require('./middlewares/passport-middleware.js');

// Import cookie parser
const cookieParser = require('cookie-parser');

// Initialize express app
const app = express();

// Apply application middlewares
app.use(cors());
app.use(json());
app.use(cookieParser());
app.use(passport.initialize());

// Inject routers
app.use('/', WebRouter);
app.use('/api/auth', ApiAuthRouter);

// Static files
app.use(express.static('public'));
app.use(express.static('uploads'));

// 404 handler
app.use(function (req, res, next) {
   if (req.accepts('html')) {
      res.status(404).sendFile(path.join(ViewDir, '/errors/404.html'));
   } else {
      RS.notFound(res);
   }
   return;
});

const start = async () => {
   try {
      // DB connection
      await mongoose.connect(DB_CONN, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      });
      consola.success('Database connected...');
      // Listen server
      app.listen(PORT, () => consola.success('Server running on port: ' + PORT));
   } catch (err) {
      consola.error('Server Error: ' + err.message);
   };
};

// Catch exceptions
process.on('uncaughtException', function (err) {
   // console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
   // console.error(err.stack)
   // process.exit(1)
   console.log('err');
})

// Start the application
start();
