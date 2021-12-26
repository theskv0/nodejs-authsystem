import { config } from 'dotenv';

config();

// Application Name
export const APP_NAME = process.env.APP_NAME;

// Application URL
export const APP_URL = process.env.APP_URL;

// Application Port Number
export const PORT = process.env.PORT || process.env.APP_PORT;

// Application Secret
export const APP_SECRET = process.env.APP_SECRET;
