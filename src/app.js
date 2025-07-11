import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectDB from './connection/db.js';
import { connect } from 'mongoose';

dotenv.config(); // Configurar dotenv antes de usar variables de entorno
connectDB(); // Connect to MongoDB

const app = express();

app.use(morgan('dev')); // Logging middleware
export default app;