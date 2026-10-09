
export const IMAGES = {
  pilotBiofloc: "../src/assets/images/pilot_biofloc_pond_1791269333750.jpg",
  koiPond: "../src/assets/images/koi_pond_hobbyist_1791269346840.jpg",
  fieldTeam: "../src/assets/images/aquaculture_field_team_1791269360338.jpg",
};

export const ACADEMIC_INFO = {
  course: 'Digital Marketing',
  classCode: 'Ti23A1',
  projectTitle: 'Perancangan Produk Digital dan Strategi Pemasaran',
  productName: 'TebarPintar',
  productSubtitle: 'Ekosistem IoT Pemberi Pakan Otomatis untuk Budidaya Ikan Indonesia',
  members: [
    {
      name: 'Faisal Fajar',
      nim: '312310123',
      role: 'Co-Founder · Business Strategy, B2B Partnership & Unit Economics',
      focus: 'Model bisnis 3-pilar, kemitraan koperasi/pabrik pakan, dan audit finansial pilot.',
    },
    {
      name: 'Muhamad Zulfikar',
      nim: '312310011',
      role: 'Co-Founder · IoT Hardware Engineering & Embedded Systems',
      focus: 'Desain mekanik pelontar sentrifugal 360°, catu daya surya MPPT, dan sensor air DO/pH/Suhu.',
    },
    {
      name: 'Muhammad Ramadhani',
      nim: '312310511',
      role: 'Co-Founder · Digital Marketing, Growth Funnel & Analytics App',
      focus: 'Aplikasi jadwal pakan adaptif FCR, akuisisi TikTok/Meta ke WhatsApp, dan jaringan Duta Kolam.',
    },
  ],
};

export const HARDWARE_COMPONENTS = [
  {
    id: 'solar-mppt',
    code: 'MOD-01',
    name: 'Panel Surya Monocrystalline 25Wp + MPPT',
    modelApplicability: 'Pro',
    materialSpec: 'Tempered Low-Iron Glass · Frame Aluminium Anodized · Baterai LiFePO4 12.8V 18Ah',
    functionDesc:
      'Menyuplai daya mandiri 24/7 di lokasi kolam atau tambak tanpa jaringan PLN. Bertahan hingga 5 hari mendung penuh tanpa pengisian ulang.',
    moatAdvantage:
      'Menghilangkan hambatan instalasi kabel listrik di pematang kolam tanah/terpal yang rawan korsleting saat hujan.',
    bomCostIDR: 265000,
    cameraPosition: [2.4, 2.5, 2.6],
    cameraTarget: [0, 1.45, 0],
  },
  {
    id: 'hopper-hdpe',
    code: 'MOD-02',
    name: 'Hopper Pakan Kedap Udara UV-HDPE (45L Pro / 6L Lite)',
    modelApplicability: 'Both',
    materialSpec: 'Food-Grade High-Density Polyethylene Anti-UV · Silikon Seal Anti-Lembap',
    functionDesc:
      'Menyimpan hingga 25 kg pelet terapung/tenggelam (ukuran 1mm–6mm) dengan ventilasi silika pasif agar pakan tidak berjamur di cuaca tropis lembap.',
    moatAdvantage:
      'Desain kerucut 62° dengan agitator anti-macet mencegah jembatan pakan (bridging) tanpa menghancurkan pelet menjadi debu.',
    bomCostIDR: 210000,
    cameraPosition: [2.8, 1.2, 2.8],
    cameraTarget: [0, 0.5, 0],
  },
  {
    id: 'auger-spinner',
    code: 'MOD-03',
    name: 'Pelontar Sentrifugal Brushless & Katup Dosis Presisi',
    modelApplicability: 'Both',
    materialSpec: 'Motor BLDC Torsi Tinggi · Piringan Lontar Stainless Steel 304 · Load Cell Kalibrasi',
    functionDesc:
      'Menakar berat pakan per gram secara presisi lalu melontarkan pelet secara merata dengan radius sebar 3 hingga 12 meter (dapat diatur via PWM).',
    moatAdvantage:
      'Sebaran merata mencegah ikan dominan memonopoli pakan, sehingga ukuran panen jauh lebih seragam (size grading seragam).',
    bomCostIDR: 245000,
    cameraPosition: [2.1, -0.1, 2.3],
    cameraTarget: [0, -0.45, 0],
  },
  {
    id: 'mcu-lora',
    code: 'MOD-04',
    name: 'Unit Kontrol IP67 Offline-First (LoRaWAN + 4G GSM / WiFi)',
    modelApplicability: 'Both',
    materialSpec: 'Enclosure Polikarbonat IP67 · MCU Dual-Core + RTC Presisi · Memori Flash Lokal 64MB',
    functionDesc:
      'Menjalankan jadwal pakan adaptif secara mandiri di memori lokal meski internet mati total, lalu menyinkronkan log FCR saat sinyal kembali.',
    moatAdvantage:
      'Satu gateway LoRa dapat menghubungkan hingga 32 unit TebarPintar Pro dalam radius 2 km di sentra budidaya.',
    bomCostIDR: 195000,
    cameraPosition: [-2.4, 0.4, 2.5],
    cameraTarget: [0, 0.1, 0.4],
  },
  {
    id: 'water-probe',
    code: 'MOD-05',
    name: 'Probe Sensor Air Multi-Parameter (Suhu, pH, DO Optik)',
    modelApplicability: 'Pro',
    materialSpec: 'Selubung Titanium Anti-Korosi · Kabel Berpelindung Kevlar 5 Meter · Sensor Suhu ±0.1°C',
    functionDesc:
      'Memantau Oksigen Terlarut (DO), derajat keasaman (pH), dan suhu air kolam setiap 5 menit. Menghentikan pakan otomatis saat DO kritis (< 3.0 mg/L).',
    moatAdvantage:
      'Interlock keamanan biologis: mencegah pemberian pakan saat ikan stres atau oksigen drop yang memicu kematian massal (mass mortality).',
    bomCostIDR: 285000,
    cameraPosition: [2.2, -0.9, 2.4],
    cameraTarget: [0.85, -1.05, 0.3],
  },
];

export const MARKET_SEGMENTS = [
  {
    id: 'umkm',
    name: 'Kolam Lele, Nila, Patin (UMKM)',
    subsegment: 'Pembudidaya Air Tawar Skala Kecil & Menengah',
    character: 'Volume besar, sensitif harga, butuh bukti nyata di kolam tetangga',
    businessRole: 'Mesin Volume & Data FCR',
    recommendedProduct: 'TebarPintar Pro + Langganan Aplikasi',
    tamUnits: '1.850.000 Rumah Tangga Pembudidaya (Data KKP & BPS)',
    samUnits: '420.000 Pembudidaya Komersial Intensif (Jawa & Sumatera)',
    som36Months: '3.200 Kolam Aktif (0,76% dari SAM)',
    avgTicketSize: 'Rp 2.500.000 awal + Rp 99.000/bln',
    keyPainPoint: 'Pakan menyerap 65–70% modal kerja; pemberian manual sering overfeeding saat air keruh.',
    proofHook: 'Penghematan 180–240 kg pakan per siklus per kolam (setara Rp 2,5–3,3 juta/siklus).',
  },
  {
    id: 'hobiis',
    name: 'Hobiis Koi, Arwana & Aquascape',
    subsegment: 'Segmen Urban & Kolektor Ikan Hias Premium',
    character: 'Margin tinggi, melek digital, mudah dijangkau lewat konten visual & marketplace',
    businessRole: 'Mesin Margin Awal & Kesadaran Brand',
    recommendedProduct: 'TebarPintar Lite + Langganan Aplikasi',
    tamUnits: '1.200.000 Pemilik Kolam Koi & Aquarium Premium Urban',
    samUnits: '310.000 Hobiis Aktif di Jabodetabek, Bandung, Surabaya, Medan',
    som36Months: '5.500 Unit Terjual (Cashflow Cepat)',
    avgTicketSize: 'Rp 500.000 awal + fitur freemium/pro Rp 49.000–99.000/bln',
    keyPainPoint: 'Takut meninggalkan rumah saat mudik/dinas; air kolam koi cepat amonia naik jika pakan berlebih.',
    proofHook: 'Kolam tenang ditinggal keluar kota, takaran pakan presisi gramasi, notifikasi langsung di HP.',
  },
  {
    id: 'b2b',
    name: 'Tambak, Farm Besar, Koperasi & Dinas',
    subsegment: 'Korporasi Akuakultur, Koperasi Perikanan & Pengadaan Pemerintah',
    character: 'Transaksi besar (20–100 unit sekali beli), siklus penjualan panjang (3–6 bulan)',
    businessRole: 'Kredibilitas Institusi & Lompatan Omzet',
    recommendedProduct: 'Bundling Cluster TebarPintar Pro (LoRa Gateway) + Dashboard Enterprise',
    tamUnits: '24.500 Kelompok Pembudidaya Ikan (Pokdakan), Koperasi & Farm Komersial',
    samUnits: '4.800 Koperasi Aktif, Farm Komersial & Program Desa Perikanan Cerdas KKP',
    som36Months: '45 Kemitraan B2B (± 800 unit terpasang)',
    avgTicketSize: 'Rp 50.000.000 – Rp 250.000.000 per kontrak cluster',
    keyPainPoint: 'Sulit mengawasi puluhan pekerja lapangan; kebocoran stok pakan di gudang dan kolam.',
    proofHook: 'Audit pakan transparan per kolam real-time dan laporan FCR terverifikasi untuk akses kredit bank/KUR.',
  },
];

export const TAM_SAM_SOM_SUMMARY = [
  {
    tier: 'TAM (Total Addressable Market)',
    headline: 'Rp 9,4 Triliun / tahun',
    subtext: '2,7 Juta Rumah Tangga Pembudidaya (RTP) air tawar & payau + 1,2 Juta hobiis urban di Indonesia (Sumber KKP & Sensus Pertanian BPS).',
    methodology: 'Asumsi 1,85 juta pembudidaya komersial rata-rata 2 kolam + hobiis + potensi langganan perangkat lunak akuakultur nasional.',
  },
  {
    tier: 'SAM (Serviceable Available Market)',
    headline: 'Rp 1,68 Triliun / tahun',
    subtext: '420.000 pembudidaya komersial intensif (Lele, Nila, Patin, Koi) di sentra Jawa Barat, Jawa Tengah, Jawa Timur, Lampung & Sumatera Utara.',
    methodology: 'Fokus pada pembudidaya dengan minimal 3 kolam intensif/bioflok yang menghabiskan > Rp 15 juta pakan per siklus.',
  },
  {
    tier: 'SOM (Serviceable Obtainable Market — 36 Bulan)',
    headline: 'Rp 43,2 Miliar / tahun (Run-rate Bulan 36)',
    subtext: 'Target 4.000 pelanggan berlangganan aktif dan penjualan ± 1.150 unit perangkat/bulan pada bulan ke-36 (± 2,5% penetrasi SAM inti).',
    methodology: 'Setara omzet ± Rp 3,6 Miliar/bulan dengan laba bersih ± Rp 1 Miliar/bulan pada akhir tahun ke-3.',
  },
];

export const UNIT_ECONOMICS_TABLE = [
  {
    metric: 'Harga Jual (Asumsi)',
    pro: 2500000,
    lite: 500000,
    saas: 99000,
    unitSuffix: { pro: '/unit', lite: '/unit', saas: '/bulan' },
  },
  {
    metric: 'Harga Pokok Produksi (HPP / Server)',
    pro: 1200000,
    lite: 230000,
    saas: 15000,
    unitSuffix: { pro: '/unit', lite: '/unit', saas: '/bulan' },
  },
  {
    metric: 'Logistik, Cadangan Garansi & Fee Marketplace',
    pro: 300000,
    lite: 80000,
    saas: 0,
    unitSuffix: { pro: '/unit', lite: '/unit', saas: '/bulan' },
  },
  {
    metric: 'Margin Kontribusi per Unit',
    pro: 1000000,
    lite: 190000,
    saas: 84000,
    marginPct: { pro: '40%', lite: '38%', saas: '85%' },
    unitSuffix: { pro: ' (40%)', lite: ' (38%)', saas: ' (85%)' },
  },
];

export const MOAT_PILLARS = [
  {
    index: '01',
    title: 'Data FCR Spesifik per Spesies, Umur & Kualitas Air',
    description:
      'Setiap siklus panen memperkaya model kurva pemberian pakan lokal (Lele Sangkuriang, Nila Nirwana, Patin, Koi). Makin banyak kolam terpasang, rekomendasi dosis makin akurat dan mustahil ditiru kompetitor hardware murni.',
    metric: 'Akurasi prediksi waktu panen ± 4 hari setelah 3 siklus data kolam.',
  },
  {
    index: '02',
    title: 'Biaya Perpindahan Tinggi (High Switching Cost)',
    description:
      'Seluruh riwayat biomassa, log FCR historis, pengeluaran pakan, dan jadwal adaptif tiap kolam tersimpan di aplikasi TebarPintar serta dipakai pembudidaya sebagai bukti kelayakan modal kerja (KUR/Koperasi).',
    metric: 'Target retensi langganan > 70% setelah bulan ke-6.',
  },
  {
    index: '03',
    title: 'Jaringan Distribusi & Servis Lokal di Sentra Budidaya',
    description:
      'Berbeda dengan alat impor murah di marketplace yang lepas tangan saat macet, TebarPintar menyiapkan stok suku cadang modular (motor, sensor, panel) di agen sentra budidaya dengan SLA tukar unit < 48 jam.',
    metric: 'Titik servis lokal di Subang, Bogor, Tulungagung, Boyolali, dan Lampung.',
  },
  {
    index: '04',
    title: 'Rekayasa Tahan Kondisi Lapangan Tropis (Field-Hardened)',
    description:
      'Enclosure IP67 tahan hujan deras, tenaga surya mandiri tanpa kabel PLN di pematang kolam, serta arsitektur Offline-First (tetap menebar pakan tepat waktu meski sinyal seluler hilang).',
    metric: 'MTBF (Mean Time Between Failures) dirancang > 28.000 jam operasional.',
  },
];

export const GTM_PHASES = [
  {
    phase: 'Tahap 1 (Bulan 0–6)',
    subtitle: 'Validasi Ilmiah & Studi Kasus Terverifikasi',
    targetKPI: '30–50 Kolam Pilot · Audit FCR Pihak Ketiga · 0 Klaim Tanpa Data',
    strategies: [
      {
        title: 'Eksperimen Terkontrol A/B di 30–50 Kolam Pilot',
        detail:
          'Pemasangan di sentra lele, nila, dan koi dengan grup kontrol berdampingan (kolam A memakai TebarPintar Pro, kolam B memakai cara tebar manual tradisional dengan benih dan pakan identik).',
      },
      {
        title: 'Pengukuran Presisi FCR, Tonase Pakan & Durasi Panen',
        detail:
          'Pencatatan harian bobot sampling mingguan, fluktuasi DO/pH pagi-malam, dan total sak pakan yang dihabiskan hingga ukuran konsumsi.',
      },
      {
        title: 'Verifikasi Independen Kampus & Penyuluh Perikanan',
        detail:
          'Menggandeng akademisi Fakultas Perikanan (IPB/UGM/UB) dan Penyuluh Perikanan KKP untuk menandatangani laporan studi kasus dan video dokumenter sebelum peluncuran iklan masif.',
      },
    ],
    digitalChannels: [
      'Dokumentasi video time-lapse komparasi kolam pilot vs kontrol',
      'Publikasi Whitepaper Ringkas FCR bersama penyuluh perikanan lokal',
      'Grup WhatsApp eksklusif 50 pembudidaya pilot untuk iterasi produk mingguan',
    ],
  },
  {
    phase: 'Tahap 2 (Bulan 6–18)',
    subtitle: 'Mesin Pertumbuhan Digital & Komunitas Sentra Kolam',
    targetKPI: '800–1.500 Pelanggan Berlangganan · CAC ≤ Rp 400.000 · Retensi > 70%',
    strategies: [
      {
        title: 'Funnel Konten Video Pendek & Iklan Direct-to-WhatsApp',
        detail:
          'Konten TikTok, Reels, dan YouTube Shorts berformat "Bedah Untung-Rugi Kolam" bersama kreator niche budidaya, diarahkan via Click-to-WhatsApp (CTWA) untuk konsultasi hitung ROI kolam gratis.',
      },
      {
        title: 'Program Duta Kolam & Reseller Komunitas (Komisi 8–10%)',
        detail:
          'Merekrut ketua kelompok tani ikan (Pokdakan) dan pemilik toko pakan lokal sebagai titik demo fisik hidup. Pembudidaya percaya setelah melihat alat bekerja di kolam tetangganya.',
      },
      {
        title: 'Penawaran Masuk Tanpa Risiko (Risk-Reversal Offer)',
        detail:
          'Garansi uang kembali 30 hari jika pakan tidak lebih terukur, opsi bayar di tempat (COD), serta cicilan ringan agar hambatan belanja modal awal (CapEx) hilang.',
      },
    ],
    digitalChannels: [
      'TikTok & Meta Ads berbasis geo-targeting di kabupaten sentra perikanan (Subang, Cianjur, Tulungagung, Kediri, Boyolali)',
      'Official Store Tokopedia & Shopee khusus lini TebarPintar Lite (segmen Hobiis Koi & Aquascape)',
      'CRM WhatsApp Otomatis untuk onboarding jadwal pakan 7 hari pertama',
    ],
  },
  {
    phase: 'Tahap 3 (Bulan 18–36)',
    subtitle: 'Kemitraan B2B, Bundling Pakan & Ekspansi Nasional',
    targetKPI: '4.000 Pelanggan Langganan · Omzet Rp 3,6 M/bln · Laba Bersih Rp 1 M/bln',
    strategies: [
      {
        title: 'Kemitraan Strategis Produsen Pakan, Koperasi & Dinas',
        detail:
          'Integrasi dengan pabrik pakan besar dan koperasi perikanan: pabrik pakan mendapat kepastian repeat order pakan berkualitas, sementara pembudidaya mendapat alat dengan subsidi silang.',
      },
      {
        title: 'Bundling "Alat + Pakan + Pendampingan" (Potong Hasil Panen)',
        detail:
          'Skema pembayaran cicilan yang dipotong otomatis dari hasil panen melalui koperasi/offtaker, membuka pasar pembudidaya UMKM yang memiliki keterbatasan kas di awal siklus.',
      },
      {
        title: 'Ekspansi Lini Tambak Udang Vaname & Luar Jawa',
        detail:
          'Adaptasi firmware akoustik/hidrofon pasif untuk tambak udang intensif serta perluasan jaringan agen ke Sumatera Selatan, Kalimantan Selatan, dan Sulawesi Selatan.',
      },
    ],
    digitalChannels: [
      'Portal Dashboard Enterprise B2B untuk Koperasi, Dinas Perikanan, dan Lembaga Pembiayaan',
      'Co-branding kampanye efisiensi FCR bersama distributor pakan nasional',
      'Event Demo Day Panen Raya di 15 kabupaten sentra akuakultur',
    ],
  },
];

export const FINANCIAL_SCENARIOS = [
  {
    id: 'konservatif',
    name: 'Skenario Konservatif',
    badge: 'Pertumbuhan Organik & Siklus Adopsi Hati-hati',
    description:
      'Mengasumsikan penetrasi B2B lebih lambat, siklus edukasi pembudidaya UMKM membutuhkan waktu 2 siklus panen, dan churn bulanan di angka 3,8%.',
    netMarginMonth36: '21%',
    churnAssumption: '3,8% / bulan',
    cacAssumption: 'Rp 460.000',
    milestones: [
      {
        period: 'Bulan 12',
        revenueMonthlyIDR: 420000000,
        revenueLabel: '± Rp 420 Jt',
        activeSubscribers: 550,
        netProfitMonthlyIDR: -85000000,
        netProfitLabel: 'Rugi Rp 85 Jt (Investasi R&D & Pilot)',
        proUnitsMonthly: 110,
        liteUnitsMonthly: 180,
      },
      {
        period: 'Bulan 24',
        revenueMonthlyIDR: 1250000000,
        revenueLabel: '± Rp 1,25 M',
        activeSubscribers: 1750,
        netProfitMonthlyIDR: 140000000,
        netProfitLabel: '+ Rp 140 Jt / bulan',
        proUnitsMonthly: 340,
        liteUnitsMonthly: 450,
      },
      {
        period: 'Bulan 36',
        revenueMonthlyIDR: 2450000000,
        revenueLabel: '± Rp 2,45 M',
        activeSubscribers: 2850,
        netProfitMonthlyIDR: 515000000,
        netProfitLabel: '+ Rp 515 Jt / bulan',
        proUnitsMonthly: 680,
        liteUnitsMonthly: 920,
      },
    ],
  },
  {
    id: 'agresif',
    name: 'Target Utama (Baseline Rencana)',
    badge: 'Sesuai Target Dokumen Eksekutif 36 Bulan',
    description:
      'Mengasumsikan skala ekonomi komponen tercapai di bulan ke-18, jaringan Duta Kolam aktif di 4 provinsi, dan margin bersih ± 28% pada bulan ke-36.',
    netMarginMonth36: '28%',
    churnAssumption: '2,5% / bulan',
    cacAssumption: 'Rp 380.000',
    milestones: [
      {
        period: 'Bulan 12',
        revenueMonthlyIDR: 600000000,
        revenueLabel: '± Rp 600 Jt',
        activeSubscribers: 800,
        netProfitMonthlyIDR: -65000000,
        netProfitLabel: 'Rugi Terukur (Fase Investasi)',
        proUnitsMonthly: 165,
        liteUnitsMonthly: 220,
      },
      {
        period: 'Bulan 24',
        revenueMonthlyIDR: 1800000000,
        revenueLabel: '± Rp 1,8 M',
        activeSubscribers: 2500,
        netProfitMonthlyIDR: 220000000,
        netProfitLabel: '± Rp 100–300 Jt / bulan',
        proUnitsMonthly: 490,
        liteUnitsMonthly: 650,
      },
      {
        period: 'Bulan 36',
        revenueMonthlyIDR: 3600000000,
        revenueLabel: '± Rp 3,6 M',
        activeSubscribers: 4000,
        netProfitMonthlyIDR: 1000000000,
        netProfitLabel: '± Rp 1 M / bulan',
        proUnitsMonthly: 980,
        liteUnitsMonthly: 1500,
      },
    ],
  },
  {
    id: 'optimis',
    name: 'Skenario Optimis',
    badge: 'Akselerasi Bundling Pakan & Kontrak Koperasi/Dinas',
    description:
      'Mengasumsikan kemitraan bundling dengan 2 pabrik pakan nasional berjalan penuh sejak bulan ke-20 dan ekspansi tambak udang meningkatkan ARPU langganan.',
    netMarginMonth36: '32%',
    churnAssumption: '1,8% / bulan',
    cacAssumption: 'Rp 310.000',
    milestones: [
      {
        period: 'Bulan 12',
        revenueMonthlyIDR: 820000000,
        revenueLabel: '± Rp 820 Jt',
        activeSubscribers: 1150,
        netProfitMonthlyIDR: 25000000,
        netProfitLabel: 'Impas / + Rp 25 Jt',
        proUnitsMonthly: 230,
        liteUnitsMonthly: 290,
      },
      {
        period: 'Bulan 24',
        revenueMonthlyIDR: 2550000000,
        revenueLabel: '± Rp 2,55 M',
        activeSubscribers: 3600,
        netProfitMonthlyIDR: 480000000,
        netProfitLabel: '+ Rp 480 Jt / bulan',
        proUnitsMonthly: 720,
        liteUnitsMonthly: 880,
      },
      {
        period: 'Bulan 36',
        revenueMonthlyIDR: 4900000000,
        revenueLabel: '± Rp 4,9 M',
        activeSubscribers: 5800,
        netProfitMonthlyIDR: 1560000000,
        netProfitLabel: '+ Rp 1,56 M / bulan',
        proUnitsMonthly: 1350,
        liteUnitsMonthly: 1950,
      },
    ],
  },
];

export const SEED_FUNDING_ALLOCATION = [
  {
    category: 'Stok & Modal Kerja',
    percentage: 30,
    amountIDR: 'Rp 1.500.000.000',
    purpose: 'Produksi batch pertama (500 unit Pro & 1.000 unit Lite), penguncian harga komponen kunci, dan buffer supplier.',
  },
  {
    category: 'R&D dan Sertifikasi',
    percentage: 25,
    amountIDR: 'Rp 1.250.000.000',
    purpose: 'Uji ketahanan cuaca IP67, kalibrasi sensor DO/pH, sertifikasi Postel/TKDN, pembaruan firmware offline-first & aplikasi.',
  },
  {
    category: 'Marketing dan Distribusi',
    percentage: 25,
    amountIDR: 'Rp 1.250.000.000',
    purpose: 'Produksi studi kasus video pilot, akuisisi KOL budidaya, rekrutmen agen sentra Jawa-Sumatera, dan pameran akuakultur.',
  },
  {
    category: 'Tim Inti',
    percentage: 15,
    amountIDR: 'Rp 750.000.000',
    purpose: 'Rekrutmen teknisi lapangan, engineering IoT/data, operasional rantai pasok, dan tim Customer Success.',
  },
  {
    category: 'Cadangan Operasional',
    percentage: 5,
    amountIDR: 'Rp 250.000.000',
    purpose: 'Dana cadangan klaim garansi tukar unit dan mitigasi fluktuasi kurs komponen impor.',
  },
];

export const SERIES_A_MILESTONES = [
  {
    metric: '1.000+ Unit',
    label: 'Perangkat Terpasang & Aktif di Kolam Nyata',
    detail: 'Terverifikasi melalui telemetri heartbeat perangkat unik dan nomor seri produksi.',
  },
  {
    metric: '> 70%',
    label: 'Retensi Langganan Aplikasi Setelah 6 Bulan',
    detail: 'Membuktikan aplikasi benar-benar dipakai pembudidaya untuk keputusan pakan harian, bukan sekadar gimmick.',
  },
  {
    metric: '10–15%',
    label: 'Penghematan Pakan Terverifikasi Pihak Ketiga',
    detail: 'Laporan audit FCR dari 30–50 kolam pilot dibandingkan kolam kontrol yang disahkan akademisi/penyuluh.',
  },
  {
    metric: '> 35%',
    label: 'Margin Kontribusi Gabungan Terjaga',
    detail: 'Memastikan struktur biaya HPP dan logistik sehat sebelum ekspansi skala nasional.',
  },
];

export const RISK_MATRIX = [
  {
    risk: 'Kepercayaan Investor Terhadap Klaim Data (Sensitivitas Pasca-Kasus eFishery)',
    severity: 'Kritis — Tata Kelola',
    impact: 'Investor sangat skeptis terhadap klaim penghematan pakan, jumlah unit aktif, dan omzet yang tidak bisa diaudit.',
    mitigation:
      'Seluruh data pilot 30–50 kolam diverifikasi pihak independen (fakultas perikanan/penyuluh). Setiap unit perangkat memiliki hardware cryptographic ID & rekonsiliasi mutasi bank otomatis untuk setiap transaksi perangkat maupun langganan.',
  },
  {
    risk: 'Perangkat Rusak di Kondisi Lapangan Tropis',
    severity: 'Tinggi — Operasional',
    impact: 'Kelembapan tinggi, panas terik, dan debu pelet dapat memacetkan motor atau merusak PCB.',
    mitigation:
      'Desain modular tahan air IP67, uji ketahanan 90 hari sebelum rilis komersial, garansi resmi, dan ketersediaan stok suku cadang plug-and-play di agen lokal.',
  },
  {
    risk: 'Sinyal Internet Lemah di Lokasi Kolam / Tambak',
    severity: 'Tinggi — Teknis',
    impact: 'Jadwal pakan gagal berjalan atau data kualitas air tidak terkirim saat koneksi seluler terputus.',
    mitigation:
      'Arsitektur Offline-First dengan chip RTC & memori lokal (alat tetap memberi pakan tepat jadwal tanpa internet), ditambah konektivitas LoRa jarak jauh & multi-operator SIM.',
  },
  {
    risk: 'Adopsi Lambat oleh Pembudidaya Tradisional',
    severity: 'Sedang — Pasar',
    impact: 'Pembudidaya UMKM enggan mengeluarkan Rp 2,5 juta di awal jika belum melihat bukti di kolam sekitar.',
    mitigation:
      'Strategi kolam percontohan (Duta Kolam) di tiap sentra, garansi uang kembali 30 hari, opsi COD, dan skema cicilan potong panen bersama koperasi.',
  },
  {
    risk: 'Persaingan Alat Impor Murah & Pemain Besar',
    severity: 'Sedang — Kompetisi',
    impact: 'Perangkat feeder plastik impor tanpa sensor dijual lebih murah di marketplace.',
    mitigation:
      'Diferensiasi pada kecerdasan data FCR lokal, integrasi sensor DO/pH penyelamat ikan, serta layanan purna jual & teknisi lokal yang tidak dimiliki barang impor putus.',
  },
  {
    risk: 'Gangguan Rantai Pasok & Fluktuasi Kurs Rupiah',
    severity: 'Sedang — Finansial',
    impact: 'Kenaikan harga chip MCU, sel surya, dan sensor optik impor menekan margin HPP.',
    mitigation:
      'Kontrak dua supplier alternatif (dual-sourcing) untuk komponen elektronik, fabrikasi molding HDPE di dalam negeri, serta buffer kurs 8% di dalam perhitungan HPP.',
  },
];

export const NINETY_DAY_ROADMAP = [
  {
    step: '01',
    timeframe: 'Hari 1–25',
    title: 'Finalisasi Prototipe DFM & Uji Ketahanan Cuaca',
    owner: 'Muhamad Zulfikar (Hardware & IoT)',
    deliverable: '5 unit prototipe DFM (Design for Manufacturing) lulus uji semprot air IP67, uji siklus lontar 10.000 kali tanpa macet, dan ketahanan baterai surya 5 hari mendung.',
    status: 'Prioritas Eksekusi',
  },
  {
    step: '02',
    timeframe: 'Hari 15–45',
    title: 'Rekrutmen 30 Kolam Pilot dengan Grup Kontrol',
    owner: 'Faisal Fajar & Muhammad Ramadhani',
    deliverable: 'MoU dengan 30 kolam pilot (15 Lele, 10 Nila, 5 Koi) di Jawa Barat beserta 30 kolam kontrol pembanding dan protokol pencatatan FCR bersama penyuluh perikanan.',
    status: 'Siap Jalan',
  },
  {
    step: '03',
    timeframe: 'Hari 30–60',
    title: 'Audit Ulang HPP Berdasarkan RFQ Supplier Nyata',
    owner: 'Faisal Fajar & Muhamad Zulfikar',
    deliverable: 'Dokumen Bill of Materials (BoM) terverifikasi dari minimal 2 vendor molding plastik lokal dan 2 distributor komponen elektronik untuk mengunci HPP Pro ≤ Rp 1,2 Jt.',
    status: 'Terjadwal',
  },
  {
    step: '04',
    timeframe: 'Hari 45–75',
    title: 'Pemodelan Keuangan 3 Skenario & Stress-Test Churn',
    owner: 'Faisal Fajar',
    deliverable: 'Spreadsheet keuangan dinamis 36 bulan (Konservatif, Target, Optimis) lengkap dengan sensitivitas arus kas, kebutuhan modal kerja batch produksi, dan rasio LTV/CAC.',
    status: 'Terjadwal',
  },
  {
    step: '05',
    timeframe: 'Hari 60–90',
    title: 'Penyusunan Pitch Deck 13 Slide & Data Room Terverifikasi',
    owner: 'Seluruh Tim & Advisor Akuakultur',
    deliverable: 'Pitch Deck standar Seed Institutional + Data Room berisi log mentah sensor kolam pilot, bukti penghematan pakan, video testimoni pembudidaya, dan draf kontrak B2B.',
    status: 'Terjadwal',
  },
];

export const PITCH_DECK_SLIDES = [
  {
    slideNumber: 1,
    sectionTag: 'Slide 01 · Identitas & Visi',
    title: 'TebarPintar IoT Pemberi Pakan Otomatis & Analitik FCR',
    headline: 'Hemat pakan 10–15%, panen lebih cepat, kolam bisa ditinggal.',
    bullets: [
      'Disusun oleh Kelompok Ti23A1 Fajar (312310123), Muhamad Zulfikar (312310011), Muhammad Ramadhani (312310511).',
      'Mengintegrasikan perangkat keras tahan lapangan (Pro & Lite), sensor kualitas air (DO, pH, Suhu), dan aplikasi manajemen pakan berbasis data.',
      'Dibangun dengan fokus pada pembuktian data pilot terverifikasi dan ekonomi unit yang sehat sejak hari pertama.',
    ],
    keyMetricLabel: 'Target 36 Bulan',
    keyMetricValue: 'Omzet Rp 3,6 M/bln · Laba Bersih Rp 1 M/bln',
    speakerNotes: 'Buka presentasi dengan menegaskan bahwa TebarPintar bukan sekadar alat pelontar pelet, melainkan sistem penghemat biaya terbesar dalam budidaya ikan.',
  },
  {
    slideNumber: 2,
    sectionTag: 'Slide 02 · Masalah Utama',
    title: 'Mengapa Pembudidaya Ikan Kehilangan Margin di Setiap Siklus?',
    headline: 'Pakan menyerap 60–70% biaya produksi, namun masih ditebar manual berdasarkan perkiraan.',
    bullets: [
      'Pemborosan Pakan (Overfeeding) yang tidak termakan mengendap di dasar kolam dan membusuk.',
      'Kualitas Air Memburuk sisa pakan memicu lonjakan amonia dan penurunan oksigen terlarut (DO), menyebabkan ikan stres atau mati.',
      'Pertumbuhan Tidak Seragam manual di satu titik membuat ikan besar memonopoli pakan (kanibalisme/size gap).',
      'Keterikatan Waktu tidak bisa meninggalkan kolam karena jadwal pakan 3–5 kali sehari.',
    ],
    keyMetricLabel: 'Porsi Biaya Pakan',
    keyMetricValue: '60% – 70% dari Total Biaya Operasional',
    speakerNotes: 'Tekankan bahwa penghematan 10-15% pada komponen biaya 70% dapat menggandakan margin bersih pembudidaya.',
  },
  {
    slideNumber: 3,
    sectionTag: 'Slide 03 · Solusi Terintegrasi',
    title: 'Arsitektur Solusi Presisi + Sensor Air + Aplikasi Analitik',
    headline: 'Otomatisasi jadwal pakan adaptif yang merespons nafsu makan ikan dan kondisi oksigen air.',
    bullets: [
      'Pemberian Pakan Otomatis & Merata sentrifugal 360° memastikan seluruh populasi ikan mendapat pakan serentak.',
      'Keamanan Biologis Otomatis DO, pH, dan suhu menghentikan pemberian pakan otomatis jika kualitas air memburuk.',
      'Rekomendasi Berbasis Data menghitung FCR (Feed Conversion Ratio) berjalan dan menyesuaikan dosis harian sesuai biomassa.',
    ],
    keyMetricLabel: 'Dampak Langsung ke Pembudidaya',
    keyMetricValue: 'FCR Turun 0,15 – 0,22 Poin · Panen 8–12 Hari Lebih Cepat',
    speakerNotes: 'Tunjukkan bagaimana sensor air dan feeder bekerja sebagai satu loop tertutup (closed-loop system).',
  },
  {
    slideNumber: 4,
    sectionTag: 'Slide 04 · Peluang Pasar (TAM / SAM / SOM)',
    title: 'Pasar Akuakultur Indonesia Terbesar dengan Digitalisasi Rendah',
    headline: 'Menjangkau 3 segmen komplementer Volume, Mesin Margin, dan Mesin Kredibilitas B2B.',
    bullets: [
      'TAM (Rp 9,4 Triliun/thn): 2,7 juta Rumah Tangga Pembudidaya (KKP/BPS) + 1,2 juta pemilik kolam hobiis urban.',
      'SAM (Rp 1,68 Triliun/thn): 420.000 pembudidaya komersial intensif (Lele, Nila, Patin, Koi) di koridor Jawa & Sumatera.',
      'SOM 36 Bulan (Rp 43,2 Miliar/thn): 4.000 kolam berlangganan aktif & ekspansi kemitraan koperasi/pabrik pakan.',
    ],
    keyMetricLabel: 'Penetrasi Target 36 Bulan',
    keyMetricValue: '4.000 Pelanggan Langganan Aktif',
    speakerNotes: 'Investor selalu menanyakan sumber TAM/SAM/SOM. Jelaskan bahwa kita membagi 3 segmen agar arus kas awal terbantu oleh segmen Hobiis (Lite) sembari membangun bukti di UMKM (Pro).',
  },
  {
    slideNumber: 5,
    sectionTag: 'Slide 05 · Lini Produk & Harga',
    title: 'Strategi Produk Tiga Lini & Pertahanan Bisnis (Moat)',
    headline: 'Kombinasi pendapatan awal perangkat keras dan pendapatan berulang (Recurring SaaS).',
    bullets: [
      'TebarPintar Pro (Rp 2.500.000) 45L, panel surya 25Wp, sensor air (suhu, DO, pH), konektivitas LoRa/SIM offline-first.',
      'TebarPintar Lite (Rp 500.000) 6L untuk aquarium & kolam hobi koi/aquascape, kontrol presisi via WiFi.',
      'Aplikasi Langganan (Rp 99.000/bulan) pakan adaptif, pelacakan FCR, alarm kualitas air real-time, laporan panen.',
      '4 Moat Utama FCR per spesies, switching cost riwayat kolam, jaringan servis lokal, dan ketahanan perangkat lapangan.',
    ],
    keyMetricLabel: 'Gross Margin Langganan',
    keyMetricValue: '85% Margin Kontribusi SaaS (Rp 84.000/bln)',
    speakerNotes: 'Jelaskan mengapa kompetitor barang impor murah tidak bisa meniru database FCR lokal dan jaringan servis di sentra budidaya.',
  },
  {
    slideNumber: 6,
    sectionTag: 'Slide 06 · Ekonomi Unit & LTV/CAC',
    title: 'Bedah Unit Economics Positif Sejak Transaksi Pertama',
    headline: 'Rasio LTV/CAC mencapai ± 7,5x pada retensi 24 bulan — jauh di atas standar sehat 3x.',
    bullets: [
      'TebarPintar Pro Rp 2,5 Jt | HPP Rp 1,2 Jt | Logistik & Garansi Rp 300 Rb → Margin Kontribusi Rp 1.000.000 (40%).',
      'TebarPintar Lite Rp 500 Rb | HPP Rp 230 Rb | Logistik & Marketplace Rp 80 Rb → Margin Kontribusi Rp 190.000 (38%).',
      'Perhitungan LTV Pelanggan Pro (24 bln) 1.000.000 + (Rp 84.000 × 24) = Rp 3.016.000 per kolam.',
      'Dengan target CAC ≤ Rp 400.000 melalui Duta Kolam & CTWA, rasio LTV/CAC = 7,5x (Payback CAC langsung lunas di hari pembelian unit).',
    ],
    keyMetricLabel: 'Rasio LTV / CAC Target',
    keyMetricValue: '7,5x (LTV Rp 3,01 Jt vs CAC Rp 400 Rb)',
    speakerNotes: 'Garis bawahi bahwa kita sudah langsung untung Rp 600.000 (Margin Pro Rp 1 Jt dikurangi CAC Rp 400 Rb) bahkan di hari pertama pembelian.',
  },
  {
    slideNumber: 7,
    sectionTag: 'Slide 07 · Go-To-Market Tahap 1 (Bulan 0–6)',
    title: 'Tahap 1 Ilmiah Tanpa Klaim Kosong',
    headline: 'Eksperimen 30–50 kolam pilot dengan grup kontrol sebelum belanja iklan skala besar.',
    bullets: [
      'Pemasangan di 30–50 kolam pilot (lele, nila, koi) dengan kolam kontrol berdampingan sebagai pembanding objektif.',
      'Pengukuran penghematan pakan (kg), penurunan FCR, keseragaman bobot ikan, dan percepatan waktu panen.',
      'Verifikasi pihak ketiga oleh akademisi fakultas perikanan atau penyuluh KKP menjadi aset video studi kasus berintegritas tinggi.',
    ],
    keyMetricLabel: 'Target Output Bulan 6',
    keyMetricValue: '30–50 Studi Kasus Kolam Terverifikasi Pihak Ketiga',
    speakerNotes: 'Pembudidaya Indonesia tidak percaya brosur; mereka percaya bukti nyata di kolam tetangga.',
  },
  {
    slideNumber: 8,
    sectionTag: 'Slide 08 · Go-To-Market Tahap 2 & 3 (Bulan 6–36)',
    title: 'Tahap 2 & 3 Akuisisi Digital, Duta Kolam & Kemitraan Skala Besar',
    headline: 'Dari akuisisi video pendek langsung ke WhatsApp hingga bundling pakan nasional.',
    bullets: [
      'Bulan 6–18 (Akuisisi) pendek transformasi kolam di TikTok/Reels → iklan Click-to-WhatsApp → Garansi uang kembali 30 hari & COD.',
      'Komunitas & Distribusi Duta Kolam & reseller komisi 8–10% di Jawa Barat, Jawa Tengah, Jawa Timur, dan Sumatera.',
      'Bulan 18–36 (Skala) pabrik pakan, koperasi, dan dinas. Bundling "Alat + Pakan + Pendampingan" dengan cicilan potong panen & ekspansi udang.',
    ],
    keyMetricLabel: 'Komisi Duta Kolam & Reseller',
    keyMetricValue: '8% – 10% per Unit + Insentif Aktivasi Langganan',
    speakerNotes: 'Jelaskan bagaimana funnel digital TikTok/Meta dipadukan dengan sentuhan manusia lewat WhatsApp dan agen lokal.',
  },
  {
    slideNumber: 9,
    sectionTag: 'Slide 09 · Proyeksi Keuangan 36 Bulan',
    title: 'Lintasan Pertumbuhan 36 Bulan & 3 Skenario Keuangan',
    headline: 'Mencapai omzet ± Rp 3,6 Miliar/bulan dengan margin bersih 28% (± Rp 1 Miliar/bulan) di Bulan 36.',
    bullets: [
      'Bulan 12 ± Rp 600 Jt/bln | ± 800 pelanggan berlangganan | Fase investasi R&D & jaringan agen.',
      'Bulan 24 ± Rp 1,8 M/bln | ± 2.500 pelanggan berlangganan | Laba bersih ± Rp 100–300 Jt/bln.',
      'Bulan 36 ± Rp 3,6 M/bln | ± 4.000 pelanggan berlangganan | Laba bersih ± Rp 1 M/bln (Margin bersih ± 28%).',
      'Dilengkapi skenario Konservatif (Rp 2,45 M/bln) dan Optimis (Rp 4,9 M/bln) untuk manajemen risiko arus kas.',
    ],
    keyMetricLabel: 'Laba Bersih Bulan ke-36',
    keyMetricValue: '± Rp 1,0 Miliar / Bulan (28% Net Margin)',
    speakerNotes: 'Tunjukkan bahwa skala ekonomi manufaktur dan akumulasi pelanggan SaaS berulang mendorong kenaikan margin bersih secara eksponensial di tahun ke-3.',
  },
  {
    slideNumber: 10,
    sectionTag: 'Slide 10 · Kebutuhan Dana Seed & Milestone',
    title: 'Putaran Pendanaan Seed Rp 5 Miliar & Milestone Seri A',
    headline: 'Alokasi modal disiplin untuk mengantarkan TebarPintar mencapai 1.000+ unit terpasang.',
    bullets: [
      '30% Stok & Modal Kerja (Rp 1,5 M) batch pertama dan pengamanan komponen supplier.',
      '25% R&D & Sertifikasi (Rp 1,25 M) perangkat IP67, kalibrasi sensor air, firmware & aplikasi.',
      '25% Marketing & Distribusi (Rp 1,25 M) konten bukti pilot, KOL budidaya, agen sentra, pameran.',
      '15% Tim Inti (Rp 750 Jt) & 5% Cadangan Garansi/Risiko (Rp 250 Jt).',
    ],
    keyMetricLabel: 'Milestone Penentu Seri A',
    keyMetricValue: '1.000 Unit Aktif · Retensi 6 Bln > 70% · Margin > 35%',
    speakerNotes: 'Setiap rupiah dana Seed diikat langsung ke 4 milestone terukur sebelum putaran pendanaan berikutnya.',
  },
  {
    slideNumber: 11,
    sectionTag: 'Slide 11 · Tim Inti & Penutupan Celah Kompetensi',
    title: 'Komposisi Tim Founder & Dewan Penasihat Akuakultur',
    headline: 'Sinergi bisnis, rekayasa perangkat keras IoT, dan pertumbuhan pemasaran digital.',
    bullets: [
      'Faisal Fajar (312310123) Bisnis, Penjualan B2B & Kemitraan Koperasi/Pakan.',
      'Muhamad Zulfikar (312310011) Hardware IoT, Sistem Surya & Sensor Kualitas Air.',
      'Muhammad Ramadhani (312310511)/Data Engineer & Digital Marketing Growth.',
      'Mitigasi Celah Tim Penasihat Ahli Akuakultur (akademisi Fakultas Perikanan & praktisi budidaya senior) dengan alokasi ESOP/retainer pada Kuartal 1.',
    ],
    keyMetricLabel: 'Kelengkapan Kompetensi Inti',
    keyMetricValue: '3 Co-Founder + 1 Penasihat Akademisi Akuakultur',
    speakerNotes: 'Sampaikan secara transparan bagaimana kita menutup celah biologi perikanan melalui kolaborasi resmi dengan akademisi dan penyuluh.',
  },
  {
    slideNumber: 12,
    sectionTag: 'Slide 12 · Mitigasi Risiko & Tata Kelola Audit',
    title: 'Manajemen Risiko Lapangan & Transparansi Pasca-Kasus eFishery',
    headline: 'Arsitektur data yang dapat diaudit pihak independen sejak unit pertama dinyalakan.',
    bullets: [
      'Transparansi Investor telemetri perangkat terkunci secara kriptografis dan direkonsiliasi langsung dengan mutasi pembayaran bank serta audit kampus independen.',
      'Ketahanan Lapangan & Sinyal IP67 tahan cuaca, suku cadang modular di agen lokal, dan mode Offline-First (tetap menebar pakan saat internet putus).',
      'Mitigasi Rantai Pasok supplier alternatif (dual-sourcing) dan perhitungan harga yang menyerap fluktuasi kurs.',
    ],
    keyMetricLabel: 'Standar Tata Kelola Data',
    keyMetricValue: '100% Kolam Pilot Diaudit Pihak Independen',
    speakerNotes: 'Slide ini sangat krusial bagi investor saat ini: kita secara proaktif menjawab sensitivitas audit pasca-kasus eFishery.',
  },
  {
    slideNumber: 13,
    sectionTag: 'Slide 13 · Rencana Eksekusi 90 Hari',
    title: 'Langkah Konkret 90 Hari ke Depan',
    headline: 'Dari validasi ketahanan prototipe menuju 30 kolam pilot aktif.',
    bullets: [
      '1. Finalisasi prototipe DFM dan uji ketahanan cuaca/mekanik tanpa henti.',
      '2. Rekrut 30 kolam pilot (lele, nila, koi) lengkap dengan grup kontrol pembanding.',
      '3. Hitung ulang HPP dari penawaran resmi (RFQ) minimal dua supplier nyata.',
      '4. Finalisasi model keuangan 3 skenario & ruang data (Data Room) untuk investor.',
    ],
    keyMetricLabel: 'Target Hari ke-90',
    keyMetricValue: '30 Kolam Pilot Aktif & BoM Manufaktur Terkunci',
    speakerNotes: 'Tutup presentasi dengan ajakan berdiskusi dan demonstrasi langsung model 3D TebarPintar serta simulator ROI kolam.',
  },
];