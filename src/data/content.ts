export const SITE = 'https://kuahjetty.com';

export const locales = ['ms', 'en', 'zh'] as const;
export type Locale = (typeof locales)[number];

export const localeMeta: Record<
  Locale,
  { path: string; htmlLang: string; ogLocale: string; mapHl: string; label: string; shortLabel: string }
> = {
  ms: { path: '/', htmlLang: 'ms', ogLocale: 'ms_MY', mapHl: 'ms', label: 'Bahasa Melayu', shortLabel: 'BM' },
  en: { path: '/en/', htmlLang: 'en', ogLocale: 'en_MY', mapHl: 'en', label: 'English', shortLabel: 'EN' },
  zh: { path: '/zh/', htmlLang: 'zh-Hant', ogLocale: 'zh_TW', mapHl: 'zh-TW', label: '中文', shortLabel: '中文' },
};

const ms = {
  meta: {
    title: 'Jeti Kuah Langkawi — Panduan Pelancongan',
    description:
      'Panduan lengkap Jeti Kuah Langkawi: jadual feri ke Kuala Perlis & Kuala Kedah, harga tiket, parkir, serta tarikan & makanan berdekatan Dataran Lang.',
    ogTitle: 'Jeti Kuah Langkawi — Panduan Pelancongan',
    ogDescription:
      'Panduan praktikal Jeti Kuah: jadual feri, tambang, parkir, makan dan tarikan sekitar gerbang laut Kuah.',
    twitterTitle: 'Jeti Kuah Langkawi — Panduan Pelancongan',
    twitterDescription: 'Jadual feri, tiket, parkir, makan dan tarikan sekitar Jeti Kuah.',
  },
  header: {
    skipLink: 'Lompat ke kandungan',
    logoAlt: 'Logo Jeti Kuah — Gerbang Laut Langkawi',
    navLabel: 'Navigasi utama',
    langLabel: 'Pilih bahasa',
    nav: [
      { href: '#panduan', label: 'Panduan' },
      { href: '#makan', label: 'Makan' },
      { href: '#sekitar', label: 'Sekitar' },
      { href: '#faq', label: 'FAQ' },
    ],
  },
  hero: {
    eyebrow: 'Gerbang laut Langkawi',
    h1a: 'Jeti',
    h1b: 'Kuah.',
    lead: 'Tempat feri, bandar dan ikon Langkawi bertemu — titik mula yang praktikal untuk tiba, berlepas atau menikmati waterfront Kuah sebelum meneruskan perjalanan.',
    imageAlt: 'Pemandangan waterfront Kuah dengan jeti dan laut Langkawi',
    ctaPrimary: 'Lihat peta',
    ctaSecondary: 'Buka Google Maps ↗',
  },
  stats: [
    { label: 'Penilaian rujukan', value: '4.3 / 5', note: 'Google Maps · boleh berubah' },
    { label: 'Waktu rujukan', value: '08:00–18:00', note: 'Setiap hari · semak jadual feri' },
    { label: 'Masuk kawasan awam', value: 'Percuma', note: 'Tiket diperlukan untuk perjalanan feri' },
    { label: 'Lokasi', value: 'Kuah, Langkawi', note: '07000 Langkawi, Kedah, Malaysia' },
  ],
  guide: {
    eyebrow: 'Bukan sekadar terminal',
    title: 'Singgah dengan rancangan yang lebih jelas.',
    intro:
      'Jeti Kuah ialah hab feri utama di bandar Kuah. Ia paling berguna apabila anda tahu bila hendak tiba, di mana mahu berehat dan apa yang boleh dibuat sebelum atau selepas perjalanan laut.',
    wideCard: {
      kicker: 'Jika menaiki feri',
      title: 'Tiba sekurang-kurangnya 60 minit awal.',
      text: 'Berikan ruang untuk daftar masuk, pemeriksaan, mencari pintu berlepas dan pergerakan penumpang. Pada hujung minggu atau cuti, datang lebih awal ialah pilihan lebih selesa.',
      badge: '60',
    },
    cards: [
      {
        kicker: 'Waktu terbaik',
        title: 'Pagi awal atau lewat petang',
        text: 'Lebih nyaman untuk berjalan di waterfront dan lebih mesra kamera berbanding cahaya tengah hari.',
      },
      {
        kicker: 'Tempoh lawatan',
        title: '30–60 minit',
        text: 'Untuk jeti sahaja. Tambah masa jika mahu berjalan ke Dataran Lang atau Taman Lagenda.',
      },
      {
        kicker: 'Tiket & kos',
        title: 'Tiada tiket tarikan',
        text: 'Kawasan awam jeti boleh dimasuki tanpa tiket tarikan. Tambang feri berbeza mengikut laluan dan operator; semak harga semasa sebelum berangkat.',
      },
      {
        kicker: 'Parkir',
        title: 'Sekitar terminal & Jetty Point',
        text: 'Ruang parkir tersedia di sekitar kompleks. Kadar, akses dan kekosongan boleh berubah — elakkan tiba terlalu hampir dengan waktu feri.',
      },
    ],
  },
  routes: {
    eyebrow: 'Cara ke sini',
    title: 'Satu jeti, beberapa cara tiba.',
    imageAlt: 'Bangunan terminal Jeti Kuah Langkawi',
    imageCaption: 'Terminal feri Kuah',
    items: [
      {
        title: 'Dari tanah besar dengan feri',
        text: 'Perkhidmatan feri penumpang menghubungkan Langkawi dengan Kuala Perlis dan Kuala Kedah. Jadual berubah mengikut operator dan keadaan operasi, jadi semak perjalanan semasa sebelum bergerak.',
      },
      {
        title: 'Dari Lapangan Terbang Langkawi',
        text: 'Gunakan kereta sewa, e-hailing atau teksi menuju bandar Kuah dan ikut papan tanda ke terminal feri / Jetty Point. Beri masa tambahan pada waktu trafik lebih padat.',
      },
      {
        title: 'Dari kawasan lain di pulau',
        text: 'E-hailing dan teksi paling mudah jika tidak memandu. Jika membawa kereta, sasarkan kawasan Jetty Point / Jeti Kuah dan ikut susun atur parkir di lokasi.',
      },
    ],
    cta: 'Semak operator feri ↗',
  },
  map: {
    eyebrow: 'Peta & orientasi',
    title: 'Di hujung selatan bandar Kuah.',
    intro:
      'Jeti terletak bersebelahan kawasan waterfront, Jetty Point dan mercu tanda Dataran Lang — mudah dijadikan satu kelompok persinggahan.',
    addressLabel: 'Alamat',
    address: 'Straits Court Condominium, Kuah, 07000 Langkawi, Kedah, Malaysia',
    mapTitle: 'Peta Jeti Kuah, Langkawi',
  },
  food: {
    eyebrow: 'Makan di sekitar Kuah',
    title: 'Selepas feri, cari rasa tempatan.',
    intro:
      'Pilihan di bawah berada di sekitar bandar Kuah dan sesuai dijadikan rujukan sebelum atau selepas perjalanan. Waktu operasi boleh berubah.',
    places: [
      {
        name: 'Restoran Nur Hafizah',
        type: 'Nasi campur Melayu',
        note: 'Pilihan lauk tempatan yang mudah untuk makan tengah hari selepas tiba di Kuah.',
        query: 'Restoran Nur Hafizah Kuah Langkawi',
      },
      {
        name: 'As Nasi Campur',
        type: 'Hidangan tempatan',
        note: 'Singgahan santai di kawasan waterfront untuk nasi campur dan lauk harian.',
        query: 'As Nasi Campur Baron Waterfront Kuah Langkawi',
      },
      {
        name: 'Idamanriah Cafe Roti Canai',
        type: 'Sarapan & roti canai',
        note: 'Sesuai untuk sarapan ringkas sebelum bergerak ke terminal atau sekitar bandar Kuah.',
        query: 'Idamanriah Cafe Roti Canai Kuah Langkawi',
      },
      {
        name: 'Arts Cafe Langkawi',
        type: 'Kafe',
        note: 'Pilihan kopi dan hidangan ringan di pusat Kuah apabila mahu berehat lebih lama.',
        query: 'Arts Cafe Langkawi Kuah',
      },
    ],
  },
  nearby: {
    eyebrow: 'Tarikan berdekatan',
    title: 'Jangan terus beredar dari waterfront.',
    intro:
      'Jika jadual anda longgar, kawasan Kuah menawarkan beberapa persinggahan yang mudah digabungkan tanpa perlu menjelajah jauh ke bahagian lain pulau.',
    places: [
      {
        name: 'Dataran Lang',
        kicker: 'Ikon Langkawi',
        image: '/images/dataran-lang.webp',
        alt: 'Patung helang besar di Dataran Lang berhampiran Jeti Kuah',
        note: 'Mercu tanda helang gergasi di tepi laut; sangat sesuai digabungkan dengan lawatan ke jeti.',
      },
      {
        name: 'Taman Lagenda',
        kicker: 'Taman waterfront',
        image: '/images/taman-lagenda.webp',
        alt: 'Pintu masuk Taman Lagenda Langkawi di Kuah',
        note: 'Taman bertema kisah dan legenda Langkawi, berhampiran Dataran Lang dan kawasan jeti.',
      },
      {
        name: 'Masjid Al-Hana',
        kicker: 'Warisan Kuah',
        image: '/images/masjid-al-hana.webp',
        alt: 'Masjid Al-Hana di bandar Kuah Langkawi',
        note: 'Masjid utama di Kuah dengan seni bina yang mudah dikenali, sesuai sebagai persinggahan bandar.',
      },
    ],
    extra: {
      label: 'Satu lagi pilihan',
      title: 'MAHA Tower, Kuah',
      text: 'Mercu tanda moden di bandar Kuah yang boleh dimasukkan dalam laluan bandar jika anda mempunyai lebih banyak masa.',
      cta: 'Lihat lokasi ↗',
      query: 'MAHA Tower Kuah Langkawi',
    },
  },
  faq: {
    eyebrow: 'Soalan lazim',
    title: 'Perkara kecil yang elok tahu sebelum tiba.',
    items: [
      {
        q: 'Adakah perlu membeli tiket untuk masuk ke Jeti Kuah?',
        a: 'Tidak untuk memasuki kawasan awam terminal. Tiket hanya diperlukan apabila anda hendak menaiki feri atau memasuki kawasan berlepas yang dikawal. Tambang bergantung pada laluan dan operator.',
      },
      {
        q: 'Berapa awal perlu tiba sebelum feri berlepas?',
        a: 'Sebagai panduan selamat, tiba sekurang-kurangnya 60 minit sebelum waktu berlepas. Beri masa tambahan pada hujung minggu, cuti umum atau jika perlu melalui pemeriksaan bagasi dan dokumen.',
      },
      {
        q: 'Ada tempat letak kereta berhampiran terminal?',
        a: 'Ya, terdapat ruang parkir di sekitar kompleks jeti dan Jetty Point. Ketersediaan, aturan dan kadar parkir boleh berubah, jadi sediakan sedikit masa tambahan ketika waktu sibuk.',
      },
      {
        q: 'Bilakah waktu terbaik untuk singgah jika bukan menaiki feri?',
        a: 'Awal pagi atau lewat petang biasanya lebih selesa untuk berjalan di kawasan waterfront dan mengambil gambar. Cahaya juga lebih lembut berbanding tengah hari.',
      },
      {
        q: 'Berapa lama patut diperuntukkan?',
        a: 'Sekitar 30–60 minit memadai untuk melihat kawasan jeti dan waterfront. Jika digabungkan dengan Dataran Lang dan Taman Lagenda, peruntukkan kira-kira 1.5–2.5 jam mengikut rentak sendiri.',
      },
      {
        q: 'Boleh dapat Grab atau teksi dari Jeti Kuah?',
        a: 'Ya. Jeti Kuah ialah hab ketibaan utama dan e-hailing serta teksi lazim digunakan untuk bergerak ke penginapan atau tarikan lain di Langkawi. Masa menunggu bergantung pada keadaan semasa.',
      },
      {
        q: 'Berapa lama perjalanan feri dari tanah besar ke Jeti Kuah?',
        a: 'Sebagai anggaran lazim, perjalanan dari Kuala Perlis mengambil masa sekitar 3 jam manakala dari Kuala Kedah sekitar 1 jam 45 minit. Tempoh sebenar bergantung pada laluan, operator, cuaca dan keadaan laut, jadi semak jadual semasa sebelum merancang.',
      },
    ],
  },
  verify: {
    label: 'Rujukan perjalanan',
    title: 'Semak maklumat operasi sebelum hari perjalanan.',
    text: 'Jadual feri, tambang, kaunter, parkir dan waktu terminal boleh berubah. Gunakan laman operator feri dan Google Maps sebagai semakan semasa.',
    cta: 'Laman feri ↗',
  },
  footer: {
    logoAlt: 'Jeti Kuah',
    about:
      'Laman ini ialah panduan bebas dan bukan laman rasmi Jeti Kuah, mana-mana pengendali feri atau LADA.',
    credits:
      'Kredit foto tempatan: Marufish (CC BY-SA 2.0), Zamwan (CC BY-SA 4.0), Bernard Spragg NZ (CC0), Hzh (CC BY-SA 4.0), Olga Oslina (CC BY 2.0) melalui Wikimedia Commons.',
    ratingNote: 'Maklumat penilaian dan waktu rujukan berasal daripada paparan Google Maps dan boleh berubah.',
  },
};

export type Copy = typeof ms;

const en: Copy = {
  meta: {
    title: 'Kuah Jetty Langkawi — Travel Guide',
    description:
      'Complete Kuah Jetty Langkawi guide: ferry schedule to Kuala Perlis & Kuala Kedah, ticket prices, parking, plus nearby attractions like Eagle Square and local food.',
    ogTitle: 'Kuah Jetty Langkawi — Travel Guide',
    ogDescription:
      'A practical guide to Kuah Jetty: ferry schedules, fares, parking, food and attractions around Kuah’s sea gateway.',
    twitterTitle: 'Kuah Jetty Langkawi — Travel Guide',
    twitterDescription: 'Ferry schedule, tickets, parking, food and attractions around Kuah Jetty.',
  },
  header: {
    skipLink: 'Skip to content',
    logoAlt: 'Kuah Jetty logo — sea gateway to Langkawi',
    navLabel: 'Main navigation',
    langLabel: 'Choose language',
    nav: [
      { href: '#panduan', label: 'Guide' },
      { href: '#makan', label: 'Food' },
      { href: '#sekitar', label: 'Nearby' },
      { href: '#faq', label: 'FAQ' },
    ],
  },
  hero: {
    eyebrow: 'Langkawi’s sea gateway',
    h1a: 'Kuah',
    h1b: 'Jetty.',
    lead: 'Where ferry, town and Langkawi’s icons meet — a practical starting point to arrive, depart or enjoy the Kuah waterfront before continuing your journey.',
    imageAlt: 'Kuah waterfront with the jetty and the Langkawi sea',
    ctaPrimary: 'View map',
    ctaSecondary: 'Open Google Maps ↗',
  },
  stats: [
    { label: 'Reference rating', value: '4.3 / 5', note: 'Google Maps · may change' },
    { label: 'Reference hours', value: '08:00–18:00', note: 'Daily · check ferry schedule' },
    { label: 'Public area access', value: 'Free', note: 'Ticket needed for ferry travel' },
    { label: 'Location', value: 'Kuah, Langkawi', note: '07000 Langkawi, Kedah, Malaysia' },
  ],
  guide: {
    eyebrow: 'More than a terminal',
    title: 'Stop by with a clearer plan.',
    intro:
      'Kuah Jetty is the main ferry hub in Kuah town. It serves you best when you know when to arrive, where to rest and what to do before or after the sea crossing.',
    wideCard: {
      kicker: 'If taking the ferry',
      title: 'Arrive at least 60 minutes early.',
      text: 'Allow time for check-in, inspections, finding your departure gate and passenger movement. On weekends or holidays, arriving earlier is the more comfortable option.',
      badge: '60',
    },
    cards: [
      {
        kicker: 'Best time',
        title: 'Early morning or late afternoon',
        text: 'More comfortable for a waterfront walk and friendlier for photos than the midday light.',
      },
      {
        kicker: 'Visit duration',
        title: '30–60 minutes',
        text: 'For the jetty alone. Add time if you plan to walk to Dataran Lang or Taman Lagenda.',
      },
      {
        kicker: 'Tickets & costs',
        title: 'No attraction ticket',
        text: 'The public area of the jetty is free to enter. Ferry fares vary by route and operator; check current prices before you set off.',
      },
      {
        kicker: 'Parking',
        title: 'Around the terminal & Jetty Point',
        text: 'Parking is available around the complex. Rates, access and availability can change — avoid arriving too close to your ferry time.',
      },
    ],
  },
  routes: {
    eyebrow: 'Getting here',
    title: 'One jetty, several ways to arrive.',
    imageAlt: 'Kuah Jetty terminal building, Langkawi',
    imageCaption: 'Kuah ferry terminal',
    items: [
      {
        title: 'From the mainland by ferry',
        text: 'Passenger ferry services connect Langkawi with Kuala Perlis and Kuala Kedah. Schedules change by operator and operating conditions, so check current sailings before you travel.',
      },
      {
        title: 'From Langkawi Airport',
        text: 'Use a rental car, e-hailing or taxi towards Kuah town and follow signs to the ferry terminal / Jetty Point. Allow extra time in busier traffic.',
      },
      {
        title: 'From elsewhere on the island',
        text: 'E-hailing and taxis are easiest if you are not driving. With a car, aim for the Jetty Point / Kuah Jetty area and follow the on-site parking layout.',
      },
    ],
    cta: 'Check ferry operator ↗',
  },
  map: {
    eyebrow: 'Map & orientation',
    title: 'At the southern end of Kuah town.',
    intro:
      'The jetty sits beside the waterfront, Jetty Point and the Eagle Square landmark — easy to combine into one cluster of stops.',
    addressLabel: 'Address',
    address: 'Straits Court Condominium, Kuah, 07000 Langkawi, Kedah, Malaysia',
    mapTitle: 'Map of Kuah Jetty, Langkawi',
  },
  food: {
    eyebrow: 'Eating around Kuah',
    title: 'After the ferry, find local flavours.',
    intro:
      'The picks below are around Kuah town and make handy references before or after your crossing. Opening hours may change.',
    places: [
      {
        name: 'Restoran Nur Hafizah',
        type: 'Malay nasi campur',
        note: 'An easy local lunch choice with a good variety of dishes after you arrive in Kuah.',
        query: 'Restoran Nur Hafizah Kuah Langkawi',
      },
      {
        name: 'As Nasi Campur',
        type: 'Local dishes',
        note: 'A relaxed stop in the waterfront area for nasi campur and daily dishes.',
        query: 'As Nasi Campur Baron Waterfront Kuah Langkawi',
      },
      {
        name: 'Idamanriah Cafe Roti Canai',
        type: 'Breakfast & roti canai',
        note: 'Good for a quick breakfast before heading to the terminal or around Kuah town.',
        query: 'Idamanriah Cafe Roti Canai Kuah Langkawi',
      },
      {
        name: 'Arts Cafe Langkawi',
        type: 'Café',
        note: 'Coffee and light bites in central Kuah when you want to linger a little longer.',
        query: 'Arts Cafe Langkawi Kuah',
      },
    ],
  },
  nearby: {
    eyebrow: 'Nearby attractions',
    title: 'Don’t leave the waterfront just yet.',
    intro:
      'If your schedule is loose, the Kuah area offers several stops that combine easily without exploring far across the island.',
    places: [
      {
        name: 'Dataran Lang (Eagle Square)',
        kicker: 'Langkawi icon',
        image: '/images/dataran-lang.webp',
        alt: 'Giant eagle sculpture at Dataran Lang near Kuah Jetty',
        note: 'A giant eagle landmark by the sea; pairs perfectly with a jetty visit.',
      },
      {
        name: 'Taman Lagenda',
        kicker: 'Waterfront park',
        image: '/images/taman-lagenda.webp',
        alt: 'Entrance to Taman Lagenda in Kuah, Langkawi',
        note: 'A park themed on Langkawi legends, near Dataran Lang and the jetty area.',
      },
      {
        name: 'Masjid Al-Hana',
        kicker: 'Kuah heritage',
        image: '/images/masjid-al-hana.webp',
        alt: 'Masjid Al-Hana in Kuah town, Langkawi',
        note: 'Kuah’s main mosque with easily recognised architecture, a convenient town stop.',
      },
    ],
    extra: {
      label: 'One more option',
      title: 'MAHA Tower, Kuah',
      text: 'A modern landmark in Kuah town that fits a town route if you have extra time.',
      cta: 'View location ↗',
      query: 'MAHA Tower Kuah Langkawi',
    },
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Little things worth knowing before you arrive.',
    items: [
      {
        q: 'Do I need a ticket to enter Kuah Jetty?',
        a: 'Not for the public areas of the terminal. A ticket is only needed when boarding a ferry or entering the controlled departure area. Fares depend on the route and operator.',
      },
      {
        q: 'How early should I arrive before my ferry departs?',
        a: 'As a safe guide, arrive at least 60 minutes before departure. Allow extra time on weekends, public holidays or if you need to go through baggage and document checks.',
      },
      {
        q: 'Is there parking near the terminal?',
        a: 'Yes, there is parking around the jetty complex and Jetty Point. Availability, layout and rates can change, so allow a little extra time during busy periods.',
      },
      {
        q: 'When is the best time to visit if I am not taking a ferry?',
        a: 'Early morning or late afternoon is usually more comfortable for walking the waterfront and taking photos. The light is also softer than at midday.',
      },
      {
        q: 'How long should I allow?',
        a: 'About 30–60 minutes is enough for the jetty and waterfront. Combined with Dataran Lang and Taman Lagenda, allow roughly 1.5–2.5 hours at your own pace.',
      },
      {
        q: 'Can I get a Grab or taxi from Kuah Jetty?',
        a: 'Yes. Kuah Jetty is the main arrival hub and e-hailing and taxis are commonly used to reach accommodation or other attractions in Langkawi. Waiting times depend on current conditions.',
      },
      {
        q: 'How long is the ferry ride from the mainland to Kuah Jetty?',
        a: 'As a rough guide, the crossing takes about 3 hours from Kuala Perlis and about 1 hour 45 minutes from Kuala Kedah. Actual duration depends on the route, operator, weather and sea conditions, so check the current schedule before planning.',
      },
    ],
  },
  verify: {
    label: 'Travel reference',
    title: 'Check operating details before travel day.',
    text: 'Ferry schedules, fares, counters, parking and terminal hours can change. Use the ferry operator’s site and Google Maps for the latest status.',
    cta: 'Ferry site ↗',
  },
  footer: {
    logoAlt: 'Kuah Jetty',
    about:
      'This site is an independent guide and is not the official site of Kuah Jetty, any ferry operator or LADA.',
    credits:
      'Local photo credits: Marufish (CC BY-SA 2.0), Zamwan (CC BY-SA 4.0), Bernard Spragg NZ (CC0), Hzh (CC BY-SA 4.0), Olga Oslina (CC BY 2.0) via Wikimedia Commons.',
    ratingNote: 'Rating and reference hours come from Google Maps listings and may change.',
  },
};

const zh: Copy = {
  meta: {
    title: '瓜鎮碼頭 蘭卡威 旅遊指南',
    description:
      '蘭卡威瓜鎮碼頭完整指南：往返玻璃市港口與吉打港口的渡輪班次與船票價格、停車資訊，以及巨鷹廣場等周邊景點與在地美食推薦。',
    ogTitle: '瓜鎮碼頭 蘭卡威 旅遊指南',
    ogDescription: '瓜鎮碼頭實用指南：渡輪班次、票價、停車、美食與海濱周邊景點。',
    twitterTitle: '瓜鎮碼頭 蘭卡威 旅遊指南',
    twitterDescription: '渡輪班次、船票、停車、美食與瓜鎮碼頭周邊景點。',
  },
  header: {
    skipLink: '跳至主要內容',
    logoAlt: '瓜鎮碼頭標誌 — 蘭卡威海上門戶',
    navLabel: '主導覽',
    langLabel: '選擇語言',
    nav: [
      { href: '#panduan', label: '指南' },
      { href: '#makan', label: '美食' },
      { href: '#sekitar', label: '周邊' },
      { href: '#faq', label: '常見問題' },
    ],
  },
  hero: {
    eyebrow: '蘭卡威的海上門戶',
    h1a: '瓜鎮',
    h1b: '碼頭',
    lead: '渡輪、市鎮與蘭卡威地標在此交會——無論抵達、出發，或是在繼續旅程前漫步瓜鎮海濱，這裡都是最實用的起點。',
    imageAlt: '瓜鎮海濱與碼頭及蘭卡威海景',
    ctaPrimary: '查看地圖',
    ctaSecondary: '開啟 Google Maps ↗',
  },
  stats: [
    { label: '參考評分', value: '4.3 / 5', note: 'Google Maps · 可能變動' },
    { label: '參考時間', value: '08:00–18:00', note: '每天 · 渡輪班次請另行確認' },
    { label: '公共區域入場', value: '免費', note: '乘搭渡輪需另行購票' },
    { label: '位置', value: '瓜鎮，蘭卡威', note: '07000 Langkawi, Kedah, 馬來西亞' },
  ],
  guide: {
    eyebrow: '不只是一座碼頭',
    title: '帶著更清晰的計畫造訪。',
    intro:
      '瓜鎮碼頭是瓜鎮市區的主要渡輪樞紐。事先掌握抵達時間、休憩地點與搭船前後的安排，能讓整段行程更加順暢。',
    wideCard: {
      kicker: '若要乘搭渡輪',
      title: '至少提前 60 分鐘抵達。',
      text: '預留辦理登船、安全檢查、尋找登船口與人流移動的時間。週末或假日期間，早點抵達會更從容。',
      badge: '60',
    },
    cards: [
      {
        kicker: '最佳時段',
        title: '清晨或傍晚',
        text: '漫步海濱更舒適，光線也比正午柔和，更適合拍照。',
      },
      {
        kicker: '遊覽時間',
        title: '30–60 分鐘',
        text: '僅遊覽碼頭已足夠；若想步行前往巨鷹廣場或傳奇公園，請再預留時間。',
      },
      {
        kicker: '門票與費用',
        title: '無需景點門票',
        text: '碼頭公共區域免費開放；渡輪票價依航線與營運商而異，出發前請確認最新價格。',
      },
      {
        kicker: '停車',
        title: '碼頭與 Jetty Point 周邊',
        text: '碼頭園區周邊設有停車位。費率、動線與車位情況可能變動，請避免太接近開船時間才抵達。',
      },
    ],
  },
  routes: {
    eyebrow: '交通方式',
    title: '一座碼頭，多種抵達方式。',
    imageAlt: '蘭卡威瓜鎮碼頭航廈建築',
    imageCaption: '瓜鎮渡輪碼頭',
    items: [
      {
        title: '從馬來半島搭渡輪',
        text: '渡輪航線連接蘭卡威與玻璃市港口及吉打港口。班表會依營運商與實際營運狀況調整，出發前請查詢最新航班。',
      },
      {
        title: '從蘭卡威機場出發',
        text: '可租車、使用叫車 App 或計程車前往瓜鎮市區，再依路標前往渡輪碼頭／Jetty Point。交通繁忙時請預留額外時間。',
      },
      {
        title: '從島上其他地區',
        text: '若不自行開車，叫車 App 與計程車最方便。自行開車可將目的地設為 Jetty Point／瓜鎮碼頭，並依現場動線停放車輛。',
      },
    ],
    cta: '查看渡輪營運商 ↗',
  },
  map: {
    eyebrow: '地圖與方位',
    title: '位於瓜鎮市區南端。',
    intro: '碼頭緊鄰海濱、Jetty Point 與巨鷹廣場地標，適合安排成同一區的順遊路線。',
    addressLabel: '地址',
    address: 'Straits Court Condominium, Kuah, 07000 Langkawi, Kedah, Malaysia',
    mapTitle: '蘭卡威瓜鎮碼頭地圖',
  },
  food: {
    eyebrow: '瓜鎮美食',
    title: '下船之後，品嚐在地好味道。',
    intro: '以下店家多位於瓜鎮市區，適合作為搭船前後的用餐參考。營業時間可能調整。',
    places: [
      {
        name: 'Restoran Nur Hafizah',
        type: '馬來自助飯',
        note: '抵達瓜鎮後方便的在地午餐選擇，菜色選擇豐富。',
        query: 'Restoran Nur Hafizah Kuah Langkawi',
      },
      {
        name: 'As Nasi Campur',
        type: '在地家常料理',
        note: '海濱區的悠閒用餐點，供應自助飯與每日菜色。',
        query: 'As Nasi Campur Baron Waterfront Kuah Langkawi',
      },
      {
        name: 'Idamanriah Cafe Roti Canai',
        type: '早餐與印度煎餅',
        note: '前往碼頭或遊覽瓜鎮前，適合快速吃頓早餐。',
        query: 'Idamanriah Cafe Roti Canai Kuah Langkawi',
      },
      {
        name: 'Arts Cafe Langkawi',
        type: '咖啡廳',
        note: '位於瓜鎮市中心，想多待一會兒時適合喝杯咖啡、吃點輕食。',
        query: 'Arts Cafe Langkawi Kuah',
      },
    ],
  },
  nearby: {
    eyebrow: '周邊景點',
    title: '先別急著離開海濱。',
    intro: '若行程寬裕，瓜鎮一帶有多個容易串連的順遊景點，無需深入島上其他區域。',
    places: [
      {
        name: '巨鷹廣場（Dataran Lang）',
        kicker: '蘭卡威地標',
        image: '/images/dataran-lang.webp',
        alt: '瓜鎮碼頭旁巨鷹廣場的大型老鷹雕像',
        note: '海邊的巨鷹地標，與碼頭行程最適合搭配同遊。',
      },
      {
        name: '傳奇公園（Taman Lagenda）',
        kicker: '海濱公園',
        image: '/images/taman-lagenda.webp',
        alt: '蘭卡威瓜鎮傳奇公園入口',
        note: '以蘭卡威傳說為主題的公園，鄰近巨鷹廣場與碼頭區。',
      },
      {
        name: '阿漢娜清真寺（Masjid Al-Hana）',
        kicker: '瓜鎮特色',
        image: '/images/masjid-al-hana.webp',
        alt: '蘭卡威瓜鎮市區的阿漢娜清真寺',
        note: '瓜鎮主要清真寺，建築外觀醒目，適合作為市區順遊點。',
      },
    ],
    extra: {
      label: '另一個選擇',
      title: 'MAHA Tower，瓜鎮',
      text: '瓜鎮市區的現代地標，時間充裕時可納入市區路線。',
      cta: '查看位置 ↗',
      query: 'MAHA Tower Kuah Langkawi',
    },
  },
  faq: {
    eyebrow: '常見問題',
    title: '抵達前值得知道的小事。',
    items: [
      {
        q: '進入瓜鎮碼頭需要門票嗎？',
        a: '進入碼頭公共區域無需門票。只有乘搭渡輪或進入管制區的候船區時才需要船票。票價依航線與營運商而異。',
      },
      {
        q: '開船前應提前多久抵達？',
        a: '保險起見，建議至少提前 60 分鐘抵達。週末、假日或需辦理行李與證件檢查時，請預留更多時間。',
      },
      {
        q: '碼頭附近有停車場嗎？',
        a: '有。碼頭園區與 Jetty Point 周邊設有停車位。車位、動線與費率可能變動，尖峰時段請預留額外時間。',
      },
      {
        q: '不搭渡輪的話，什麼時候造訪最好？',
        a: '清晨或傍晚通常較舒適，適合漫步海濱與拍照，光線也比正午柔和。',
      },
      {
        q: '建議安排多久時間？',
        a: '單純遊覽碼頭與海濱約 30–60 分鐘。若搭配巨鷹廣場與傳奇公園，依個人節奏約需 1.5–2.5 小時。',
      },
      {
        q: '從瓜鎮碼頭叫得到 Grab 或計程車嗎？',
        a: '可以。瓜鎮碼頭是主要的抵達樞紐，叫車 App 與計程車都很常用於前往住宿或島上其他景點。等候時間視當時情況而定。',
      },
      {
        q: '從馬來半島搭渡輪到瓜鎮碼頭需要多久？',
        a: '一般約略參考：從玻璃市港口出發約 3 小時，從吉打港口出發約 1 小時 45 分鐘。實際時間會受航線、營運商、天候與海況影響，規劃行程前請再查詢最新班表。',
      },
    ],
  },
  verify: {
    label: '行前提醒',
    title: '出發前一天，再次確認營運資訊。',
    text: '渡輪班表、票價、櫃檯、停車與碼頭開放時間均可能變動，請以渡輪營運商官網與 Google Maps 的最新資訊為準。',
    cta: '渡輪官網 ↗',
  },
  footer: {
    logoAlt: '瓜鎮碼頭',
    about: '本網站為獨立指南，非瓜鎮碼頭、任何渡輪營運商或蘭卡威發展局（LADA）之官方網站。',
    credits:
      '在地照片來源：Marufish（CC BY-SA 2.0）、Zamwan（CC BY-SA 4.0）、Bernard Spragg NZ（CC0）、Hzh（CC BY-SA 4.0）、Olga Oslina（CC BY 2.0），經由 Wikimedia Commons。',
    ratingNote: '評分與參考時間取自 Google Maps 頁面，可能隨時變動。',
  },
};

export const copy: Record<Locale, Copy> = { ms, en, zh };

export const mapsPlaceUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const mapsEmbedUrl = (hl: string) =>
  `https://www.google.com/maps?q=6.3060687,99.85149&hl=${hl}&z=16&output=embed`;

export const mapsLink = 'https://maps.app.goo.gl/3TuZgLJLMEKkpxg3A';
export const ferryOperatorUrl = 'https://www.langkawiferryline.com/';
