import cors from 'cors';
import path from 'path';
import express from 'express';
import consola from 'consola';
import mongoose from 'mongoose';
import { json } from 'body-parser';
import { DB_CONN, PORT } from './configs';
import { WebRouter, UserRouter } from './routes';

// Load global variables
require('./global');

// Initialize express app
const app = express();

// Apply application middlewares
app.use(cors());
app.use(json());

// Inject routers
app.use('/', WebRouter);
app.use('/users', UserRouter);

// Static files
app.use(express.static('public'));
app.use(express.static('uploads'));

// 404 handler
app.use(function(req, res, next) {
   res.status = 404;
   console.log(req.accepts('json'));
   if(req.accepts('json')) {
      res.json({
         message: 'Endpoint not exists!'
      })
   } else {
      res.sendFile(path.join(ViewDir, '/errors/404.html'));
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
      app.listen(PORT, () => consola.success('Server running on port: '+PORT));
   } catch (err) { 
      consola.error('Server Error: ' + err.message);
   };
};

// Start the application
start();