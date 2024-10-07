import express from 'express';
import db from './db.js'

const app = express();
const port = 5000;  // Define the port number

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);  // Display the port number
});
