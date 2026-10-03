const express = require('express');
const router = express.Router();
const { daftarDiksar, getAllPendaftar } = require('../controllers/diksarController');

// Endpoint untuk pendaftaran calon peserta DIKSAR (POST)
router.post('/daftar', daftarDiksar);

// Endpoint untuk melihat seluruh daftar pendaftar (GET)
router.get('/pendaftar', getAllPendaftar);

module.exports = router;