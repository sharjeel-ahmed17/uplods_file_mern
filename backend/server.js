const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const postRoutes = require('./src/routes/post.route');
const connectDB = require('./src/configs/db.cofig');
const app = express();
require('dotenv').config();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('./src/uploads', express.static('uploads'));

// Routes
app.use('/api/posts', postRoutes);
app.get("/", (req, res) => {
    res.send("Server is running get post")
})
// Connect to MongoDB
connectDB();


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
