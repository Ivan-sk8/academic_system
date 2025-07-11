import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectDB from './connection/db.js';
import { connect } from 'mongoose';

connectDB(); // Connect to MongoDB

const app = express();

app.use(morgan('dev')); // Logging middleware
export default app;