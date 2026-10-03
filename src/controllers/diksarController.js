const prisma = require('../config/prisma');

// Controller untuk menangani pendaftaran peserta DIKSAR baru
const daftarDiksar = async (req, res) => {
    try {
        const { nama_pendaftar, nim } = req.body;

        // 1. Validasi Input Sederhana
        if (!nama_pendaftar || !nim) {
            return res.status(400).json({
                status: 'fail',
                message: 'Nama pendaftar dan NIM wajib diisi!'
            });
        }

        // 2. Cek apakah NIM sudah pernah mendaftar
        const pendaftarAda = await prisma.pendaftaranDiksar.findUnique({
            where: { nim: nim }
        });

        if (pendaftarAda) {
            return res.status(400).json({
                status: 'fail',
                message: `NIM ${nim} sudah terdaftar dalam sistem Diksar.`
            });
        }

        // 3. Simpan data pendaftar baru ke database
        const pendaftarBaru = await prisma.pendaftaranDiksar.create({
            data: {
                nama_pendaftar,
                nim
            }
        });

        return res.status(201).json({
            status: 'success',
            message: 'Pendaftaran DIKSAR berhasil!',
            data: pendaftarBaru
        });

    } catch (error) {
        console.error('Error daftarDiksar:', error);
        return res.status(500).json({
            status: 'error',
            message: 'Terjadi kesalahan pada server.'
        });
    }
};

// Controller untuk melihat semua pendaftar DIKSAR (Khusus Admin)
const getAllPendaftar = async (req, res) => {
    try {
        const pendaftar = await prisma.pendaftaranDiksar.findMany({
            orderBy: { tanggal_daftar: 'desc' }
        });

        return res.status(200).json({
            status: 'success',
            total: pendaftar.length,
            data: pendaftar
        });
    } catch (error) {
        console.error('Error getAllPendaftar:', error);
        return res.status(500).json({
            status: 'error',
            message: 'Terjadi kesalahan pada server.'
        });
    }
};

module.exports = {
    daftarDiksar,
    getAllPendaftar
};