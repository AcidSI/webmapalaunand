-- CreateTable
CREATE TABLE `Anggota` (
    `id_anggota` INTEGER NOT NULL AUTO_INCREMENT,
    `nia` VARCHAR(20) NOT NULL,
    `nama_lengkap` VARCHAR(100) NOT NULL,
    `spesialisasi` VARCHAR(50) NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'Aktif',

    UNIQUE INDEX `Anggota_nia_key`(`nia`),
    PRIMARY KEY (`id_anggota`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PendaftaranDiksar` (
    `id_daftar` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_pendaftar` VARCHAR(100) NOT NULL,
    `nim` VARCHAR(20) NOT NULL,
    `status_seleksi` VARCHAR(191) NOT NULL DEFAULT 'Pending',
    `tanggal_daftar` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `PendaftaranDiksar_nim_key`(`nim`),
    PRIMARY KEY (`id_daftar`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
