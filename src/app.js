import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv/config';    
import connectDB from './connection/db.js';
import authRoutes from './routers/auth.js';


connectDB(); // Connect to MongoDB

const app = express();

app.use(morgan('dev')); // Logging middleware
app.use(express.json()); // Middleware to parse JSON

app.use('/api', authRoutes); // Middleware para parsear JSON

export default app;