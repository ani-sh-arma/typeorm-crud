import { createConnection } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

createConnection({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
}).then(() => {
  console.log('Database connection successful');
}).catch(error => {
  console.error('Database connection failed:', error);
});
