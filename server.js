require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Import Routes
const diksarRoutes = require('./src/routes/diksarRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test Route Utama
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Server Backend API Web MAPALA UNAND Berjalan!'
    });
});

// Mount Routes API Diksar
app.use('/api/diksar', diksarRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`=========================================`);
    console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
    console.log(`=========================================`);
});