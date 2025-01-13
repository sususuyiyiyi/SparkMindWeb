const express = require('express');
const router = express.Router();

// Import other route modules here
// const inspirationRoutes = require('./inspiration');

// Use route modules
// router.use('/inspirations', inspirationRoutes);

// Basic health check route
router.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

module.exports = router; 