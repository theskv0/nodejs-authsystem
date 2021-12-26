import { config } from 'dotenv';

config();

// Database Connection
export const DB_CONN = process.env.DB_CONN;