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
    title: "Jeti Kuah Langkawi: Feri, Tiket, Daftar Masuk & Peta",
    description:
      "Panduan Jeti Kuah Langkawi: semak feri Kuala Perlis/Kuala Kedah, tiket, daftar masuk 60 minit awal, parkir dan peta. Bezakan Kuah daripada Telaga Terminal.",
    ogTitle: "Jeti Kuah Langkawi: Feri, Tiket, Daftar Masuk & Peta",
    ogDescription:
      "Panduan Jeti Kuah Langkawi: semak feri Kuala Perlis/Kuala Kedah, tiket, daftar masuk 60 minit awal, parkir dan peta. Bezakan Kuah daripada Telaga Terminal.",
    twitterTitle: "Jeti Kuah Langkawi: Feri, Tiket, Daftar Masuk & Peta",
    twitterDescription: "Panduan Jeti Kuah Langkawi: semak feri Kuala Perlis/Kuala Kedah, tiket, daftar masuk 60 minit awal, parkir dan peta. Bezakan Kuah daripada Telaga Terminal.",
  },
  header: {
    skipLink: 'Lompat ke kandungan',
    logoAlt: 'Logo Jeti Kuah — Gerbang Laut Langkawi',
    navLabel: 'Navigasi utama',
    langLabel: 'Pilih bahasa',
    nav: [
      {
  "href": "#feri",
  "label": "Feri & tiket"
},
      { href: '#makan', label: 'Makan' },
      { href: '#sekitar', label: 'Sekitar' },
      { href: '#faq', label: 'FAQ' },
    ],
  },
  hero: {
    eyebrow: 'Gerbang laut Langkawi',
    h1a: "Jeti Kuah",
    h1b: "Langkawi.",
    lead: 'Tempat feri, bandar dan ikon Langkawi bertemu — titik mula yang praktikal untuk tiba, berlepas atau menikmati waterfront Kuah sebelum meneruskan perjalanan.',
    imageAlt: 'Pemandangan waterfront Kuah dengan jeti dan laut Langkawi',
    ctaPrimary: "Rancang perjalanan feri",
    ctaSecondary: 'Buka Google Maps ↗',
  },
  stats: [
    { label: 'Penilaian rujukan', value: '4.3 / 5', note: "Google Maps · 8,501 ulasan · 2026-10-19" },
    { label: 'Waktu rujukan', value: '08:00–18:00', note: "Penyenaraian peta · bukan jadual feri" },
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
      text: "Langkawi Ferry Line meminta penumpang berada di terminal sekurang-kurangnya 60 minit sebelum berlepas. Datang lebih awal jika perlu pemeriksaan atau pada hari sibuk; ikut arahan tiket anda.",
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
    address: "Kompleks Jetty Point, Kuah, 07000 Langkawi, Kedah, Malaysia",
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
        a: "Langkawi Ferry Line meminta penumpang berada di terminal sekurang-kurangnya 60 minit sebelum berlepas. Datang lebih awal jika perlu pemeriksaan atau pada hari sibuk; ikut arahan tiket anda.",
      },
      {
        q: 'Ada tempat letak kereta berhampiran terminal?',
        a: 'Ya, terdapat ruang parkir di sekitar kompleks jeti dan Jetty Point. Ketersediaan, aturan dan kadar parkir boleh berubah, jadi sediakan sedikit masa tambahan ketika waktu sibuk.',
      },
      {
        q: 'Bilakah waktu terbaik untuk singgah jika bukan menaiki feri?',
        a: "Pilih waktu yang nyaman dalam waktu akses yang dibenarkan. Semak keadaan cuaca dan waktu akses semasa; lawatan santai tidak memberi akses ke kawasan berlepas terkawal.",
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
        a: "Naturally Langkawi menerbitkan anggaran 1 jam 15 minit dari Kuala Perlis dan 1 jam 45 minit dari Kuala Kedah. Ini rujukan perancangan, bukan tempoh yang dijamin; sahkan pelayaran pilihan dengan operator.",
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
    ratingNote: "Google Maps: 4.3/5 daripada 8,501 ulasan, disemak 2026-10-19. Rekod semakan ini bukan data langsung.",
  },
};

export type Copy = typeof ms;

const en: Copy = {
  meta: {
    title: "Kuah Jetty Langkawi: Ferries, Tickets, Check-in & Map",
    description:
      "Plan Kuah Jetty Langkawi: Kuala Perlis/Kuala Kedah ferry checks, tickets, 60-minute check-in guidance, parking and directions. Distinguish Kuah from Telaga Terminal.",
    ogTitle: "Kuah Jetty Langkawi: Ferries, Tickets, Check-in & Map",
    ogDescription:
      "Plan Kuah Jetty Langkawi: Kuala Perlis/Kuala Kedah ferry checks, tickets, 60-minute check-in guidance, parking and directions. Distinguish Kuah from Telaga Terminal.",
    twitterTitle: "Kuah Jetty Langkawi: Ferries, Tickets, Check-in & Map",
    twitterDescription: "Plan Kuah Jetty Langkawi: Kuala Perlis/Kuala Kedah ferry checks, tickets, 60-minute check-in guidance, parking and directions. Distinguish Kuah from Telaga Terminal.",
  },
  header: {
    skipLink: 'Skip to content',
    logoAlt: 'Kuah Jetty logo — sea gateway to Langkawi',
    navLabel: 'Main navigation',
    langLabel: 'Choose language',
    nav: [
      {
  "href": "#feri",
  "label": "Ferries & tickets"
},
      { href: '#makan', label: 'Food' },
      { href: '#sekitar', label: 'Nearby' },
      { href: '#faq', label: 'FAQ' },
    ],
  },
  hero: {
    eyebrow: 'Langkawi’s sea gateway',
    h1a: "Kuah Jetty",
    h1b: "Langkawi.",
    lead: 'Where ferry, town and Langkawi’s icons meet — a practical starting point to arrive, depart or enjoy the Kuah waterfront before continuing your journey.',
    imageAlt: 'Kuah waterfront with the jetty and the Langkawi sea',
    ctaPrimary: "Plan your ferry journey",
    ctaSecondary: 'Open Google Maps ↗',
  },
  stats: [
    { label: 'Reference rating', value: '4.3 / 5', note: "Google Maps · 8,501 reviews · 2026-10-19" },
    { label: 'Reference hours', value: '08:00–18:00', note: "Map listing · not a ferry timetable" },
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
      text: "Langkawi Ferry Line asks passengers to be inside the terminal at least 60 minutes before departure. Allow extra time for checks or busy dates and follow your ticket instructions.",
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
    address: "Kompleks Jetty Point, Kuah, 07000 Langkawi, Kedah, Malaysia",
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
        a: "Langkawi Ferry Line asks passengers to be inside the terminal at least 60 minutes before departure. Allow extra time for checks or busy dates and follow your ticket instructions.",
      },
      {
        q: 'Is there parking near the terminal?',
        a: 'Yes, there is parking around the jetty complex and Jetty Point. Availability, layout and rates can change, so allow a little extra time during busy periods.',
      },
      {
        q: 'When is the best time to visit if I am not taking a ferry?',
        a: "Choose a comfortable time within permitted access hours. Check current access and weather; a sightseeing visit does not grant entry to controlled departure areas.",
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
        a: "Naturally Langkawi publishes estimates of 1 hour 15 minutes from Kuala Perlis and 1 hour 45 minutes from Kuala Kedah. Treat these as planning references, not guaranteed durations; confirm your selected sailing with the operator.",
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
    ratingNote: "Google Maps: 4.3/5 from 8,501 reviews, checked 2026-10-19. This dated snapshot is not a live feed.",
  },
};

const zh: Copy = {
  meta: {
    title: "蘭卡威瓜鎮碼頭 Kuah Jetty｜渡輪、船票、報到與地圖",
    description:
      "規劃蘭卡威瓜鎮碼頭：查詢玻璃市港及吉打港渡輪、船票、提前60分鐘報到、停車與交通，並分清Kuah與Telaga兩個碼頭。",
    ogTitle: "蘭卡威瓜鎮碼頭 Kuah Jetty｜渡輪、船票、報到與地圖",
    ogDescription: "規劃蘭卡威瓜鎮碼頭：查詢玻璃市港及吉打港渡輪、船票、提前60分鐘報到、停車與交通，並分清Kuah與Telaga兩個碼頭。",
    twitterTitle: "蘭卡威瓜鎮碼頭 Kuah Jetty｜渡輪、船票、報到與地圖",
    twitterDescription: "規劃蘭卡威瓜鎮碼頭：查詢玻璃市港及吉打港渡輪、船票、提前60分鐘報到、停車與交通，並分清Kuah與Telaga兩個碼頭。",
  },
  header: {
    skipLink: '跳至主要內容',
    logoAlt: '瓜鎮碼頭標誌 — 蘭卡威海上門戶',
    navLabel: '主導覽',
    langLabel: '選擇語言',
    nav: [
      {
  "href": "#feri",
  "label": "渡輪與船票"
},
      { href: '#makan', label: '美食' },
      { href: '#sekitar', label: '周邊' },
      { href: '#faq', label: '常見問題' },
    ],
  },
  hero: {
    eyebrow: '蘭卡威的海上門戶',
    h1a: "瓜鎮碼頭",
    h1b: "蘭卡威",
    lead: '渡輪、市鎮與蘭卡威地標在此交會——無論抵達、出發，或是在繼續旅程前漫步瓜鎮海濱，這裡都是最實用的起點。',
    imageAlt: '瓜鎮海濱與碼頭及蘭卡威海景',
    ctaPrimary: "規劃渡輪行程",
    ctaSecondary: '開啟 Google Maps ↗',
  },
  stats: [
    { label: '參考評分', value: '4.3 / 5', note: "Google Maps · 8,501則評價 · 2026-10-19" },
    { label: '參考時間', value: '08:00–18:00', note: "地圖條目時間，並非船班時刻表" },
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
      text: "Langkawi Ferry Line要求乘客至少於開船前60分鐘進入客運站。繁忙日期或需要檢查時應更早抵達，並遵從實際船票上的指示。",
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
    address: "Kompleks Jetty Point, Kuah, 07000 Langkawi, Kedah, Malaysia",
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
        a: "Langkawi Ferry Line要求乘客至少於開船前60分鐘進入客運站。繁忙日期或需要檢查時應更早抵達，並遵從實際船票上的指示。",
      },
      {
        q: '碼頭附近有停車場嗎？',
        a: '有。碼頭園區與 Jetty Point 周邊設有停車位。車位、動線與費率可能變動，尖峰時段請預留額外時間。',
      },
      {
        q: '不搭渡輪的話，什麼時候造訪最好？',
        a: "請在允許通行的時段選擇舒適的時間，並查詢當天氣象與現場開放安排；一般觀光不能進入受管制的候船區。",
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
        a: "Naturally Langkawi公布的參考航程為玻璃市港約1小時15分鐘、吉打港約1小時45分鐘。這些是規劃參考，並非保證航程；請另向營運方確認所選班次。",
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
    ratingNote: "Google Maps評分4.3/5，共8,501則評價，核對日期2026-10-19。這是當次紀錄，並非即時資料。",
  },
};

export const copy: Record<Locale, Copy> = { ms, en, zh };

export const mapsPlaceUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const mapsEmbedUrl = (hl: string) =>
  `https://www.google.com/maps?q=6.3060687,99.85149&hl=${hl}&z=16&output=embed`;

export const mapsLink = 'https://maps.app.goo.gl/3TuZgLJLMEKkpxg3A';
export const ferryOperatorUrl = 'https://www.langkawiferryline.com/';
