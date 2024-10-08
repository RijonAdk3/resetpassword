// server.js or app.js
import express from 'express';
import cors from 'cors';
import db from './db.js';  // Database connection
import UserRouter from './routes/userRoutes.js';  // Import User routes

const app = express();
const port = 5000;

// Enable CORS for all origins (adjust this in production)
app.use(cors());

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Use the UserRouter for '/api' routes
app.use('/api', UserRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
