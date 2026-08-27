export const ARCHITECTURE_STYLES = {
  nagara: {
    id: "nagara",
    name: "Nagara Style",
    sanskritName: "नागर शैली (North Indian Temple Architecture)",
    region: "Northern, Eastern, Central & Western India (Himalayas to Vindhyas)",
    origin: "5th Century CE (Gupta Period onward)",
    philosophy: "Designed to evoke the cosmic mountain peaks of Mount Meru and Kailash reaching vertically into the heavens.",
    color: "#C05621",
    subStyles: ["Latina / Rekha-Prasada (Simple single tower)", "Phamsana (Stepped pyramidal roof)", "Shekhari (Composite multiple miniature spires)", "Kalinga (Odisha)", "Maru-Gurjara (Gujarat & Rajasthan)", "Chandela (Khajuraho)"],
    keyDifferences: [
      "No elaborate boundary walls or monumental gateway towers (unlike South Indian Gopurams)",
      "Main tower (Shikhara) is curvilinear and rises directly over the Garbhagriha",
      "Built on a high elevated stone platform called Jagati",
      "Crowned with a fluted disc (Amalaka) and a pot finial (Kalasha)",
      "Water tanks (Kunds) usually located outside the temple plinth"
    ],
    hotspots: [
      {
        id: "kalasha",
        x: 50,
        y: 8,
        name: "Kalasha",
        sanskrit: "कलश (The Divine Finial Urn)",
        category: "Apex",
        description: "The pot-shaped crowning finial made of brass, gold, or stone placed at the absolute apex of the Shikhara. It symbolizes cosmic containment, divine nectar (Amrita), and spiritual fullness (Purnata)."
      },
      {
        id: "amalaka",
        x: 50,
        y: 16,
        name: "Amalaka",
        sanskrit: "आमलक (Stone Ribbed Sun-Disc)",
        category: "Superstructure",
        description: "A colossal segmented or ribbed circular stone disc resembling the sacred Indian Gooseberry (Amla). It functions structurally to hold the corbelled vertical stone ribs in compression while representing the cosmic sun."
      },
      {
        id: "shikhara",
        x: 50,
        y: 35,
        name: "Shikhara",
        sanskrit: "शिखर (Curvilinear Mountain Spire)",
        category: "Superstructure",
        description: "The soaring curvilinear mountain-like superstructure rising above the Garbhagriha. It curves gently inwards as it ascends, creating a soaring optical illusion of reaching the infinite sky."
      },
      {
        id: "antarala",
        x: 42,
        y: 58,
        name: "Antarala",
        sanskrit: "अन्तराल (Vestibule / Antechamber)",
        category: "Transition Zone",
        description: "The intermediate transition corridor between the Garbhagriha (inner sanctum) and the Mandapa (assembly hall). Devotees pause here to transition consciousness from collective prayer to solitary communion."
      },
      {
        id: "mandapa",
        x: 28,
        y: 65,
        name: "Mandapa / Sabha Mandap",
        sanskrit: "मण्डप (Hypostyle Pillared Hall)",
        category: "Assembly",
        description: "The pillared hall where devotees gather for prayers, sacred music, dance, and philosophical discourses. It features pyramidal tiered roofs (Phamsana style) lower in height than the main Shikhara."
      },
      {
        id: "garbhagriha",
        x: 65,
        y: 72,
        name: "Garbhagriha",
        sanskrit: "गर्भगृह (Womb Chamber / Inner Sanctum)",
        category: "Sacred Center",
        description: "The dark, unadorned cubical sanctum sanctorum housing the main consecrated deity (Moolavar). Built with thick stone walls to preserve mystical energetic resonance (Prana Pratishtha) with zero distractions."
      },
      {
        id: "pradakshina-patha",
        x: 65,
        y: 84,
        name: "Pradakshina Patha",
        sanskrit: "प्रदक्षिणा पथ (Circumambulatory Ambulatory)",
        category: "Ritual Pathway",
        description: "The enclosed or open passage encircling the sanctum, allowing devotees to walk clockwise around the sacred deity to align with natural cosmic vortex energies."
      },
      {
        id: "jagati",
        x: 50,
        y: 92,
        name: "Jagati & Pitha",
        sanskrit: "जगती एवं पीठ (Elevated Plinth & Base)",
        category: "Foundation",
        description: "A high raised stone terrace platform upon which the entire temple rests, elevating the sacred sphere above the mundane earth. Decorated with friezes of elephants, horses, and human activities."
      }
    ],
    examples: [
      { name: "Kashi Vishwanath Temple", location: "Varanasi, UP", year: "1780 CE" },
      { name: "Konark Sun Temple", location: "Odisha", year: "1250 CE" },
      { name: "Kedarnath Dham", location: "Uttarakhand", year: "8th Cent CE" },
      { name: "Khajuraho Kandariya Mahadeva", location: "Madhya Pradesh", year: "1030 CE" }
    ]
  },

  dravidian: {
    id: "dravidian",
    name: "Dravidian Style",
    sanskritName: "द्रविड़ शैली (South Indian Temple Architecture)",
    region: "Southern India (Tamil Nadu, Karnataka, Andhra Pradesh, Kerala)",
    origin: "7th Century CE (Pallava, Chola, Pandyan & Vijayanagara Dynasties)",
    philosophy: "Conceived as an entire walled sacred city (Kshetram) reflecting the cosmic order with concentric courtyards (Prakaras).",
    color: "#7A2E1E",
    subStyles: ["Pallava Rock-Cut & Shore (Mahabalipuram)", "Early Chola Granular", "Imperial Chola Colossal (Thanjavur & Gangaikonda)", "Pandyan Gopuram Focus", "Vijayanagara & Nayaka Pillared Splendor"],
    keyDifferences: [
      "Surrounded by monumental concentric compound walls (Prakara)",
      "Towering gateway entrances called Gopurams that are often much taller than the central sanctum",
      "Sanctum tower is called Vimana (stepped pyramid with horizontal tiers, not curved)",
      "Always includes a sacred temple water tank (Pushkarini / Kalyani / Teppakulam)",
      "Monumental pillared halls (e.g. 1000-pillar Mandapams) with intricate acoustic sculptures"
    ],
    hotspots: [
      {
        id: "rajagopuram",
        x: 18,
        y: 20,
        name: "Raja Gopuram",
        sanskrit: "राजगोपुरम् (Monumental Gateway Tower)",
        category: "Entrance Gate",
        description: "Colossal multi-tiered monumental entrance tower marking the threshold into the sacred city. Decorated with hundreds of polychrome stucco figures depicting cosmic mythologies and guardians."
      },
      {
        id: "vimana",
        x: 75,
        y: 28,
        name: "Vimana & Shikhara (Dome)",
        sanskrit: "विमानम् (Stepped Pyramidal Sanctum Tower)",
        category: "Superstructure",
        description: "The stepped pyramid tower constructed in receding horizontal tiers (Talas) crowned by a single cupola or domical roof (Shikhara) and golden Stupi finials directly above the Garbhagriha."
      },
      {
        id: "garbhagriha-dravid",
        x: 75,
        y: 72,
        name: "Garbhagriha (Sanctum)",
        sanskrit: "गर्भगृह (Inner Chamber)",
        category: "Sacred Center",
        description: "The square sanctum sanctorum housing the presiding deity. Entered only through an intensely guarded antechamber (Ardhamandapa) flanked by fierce stone Dvarapalas."
      },
      {
        id: "prakara",
        x: 48,
        y: 50,
        name: "Prakara (Enclosure Walls)",
        sanskrit: "प्राकार (Concentric Compound Walls)",
        category: "Sacred Enclosure",
        description: "High stone perimeter walls forming concentric rectangular courtyards. In major temples like Srirangam and Madurai, up to seven concentric Prakaras symbolize the seven planes of spiritual ascension."
      },
      {
        id: "pushkarini",
        x: 35,
        y: 78,
        name: "Pushkarini / Teppakulam",
        sanskrit: "पुष्करिणी (Sacred Temple Water Tank)",
        category: "Purification Water",
        description: "Stepped rectangular freshwater tank used for ceremonial purification, ritual holy dips, and floating festival processions (Teppotsavam)."
      },
      {
        id: "kalyana-mandapam",
        x: 52,
        y: 68,
        name: "Kalyana & 1000-Pillar Mandapa",
        sanskrit: "कल्याण मण्डपम् (Pillared Festival Hall)",
        category: "Civic & Ritual Hall",
        description: "Sprawling open hypostyle halls featuring monolithic granite columns carved with rearing Yalis (mythical lion-elephant beasts), riders, and musical acoustic resonance."
      },
      {
        id: "dwajasthambam",
        x: 28,
        y: 62,
        name: "Dhwajastambha & Balipeetham",
        sanskrit: "ध्वजस्तम्भ (Sacred Flagstaff)",
        category: "Cosmic Axis",
        description: "Gold or brass-encased tall pillar erected in direct axis with the sanctum deity, marking the point where the temple flag is hoisted during annual Brahmotsavam festivals."
      }
    ],
    examples: [
      { name: "Meenakshi Amman Temple", location: "Madurai, TN", year: "6th–17th Cent CE" },
      { name: "Brihadisvara Temple", location: "Thanjavur, TN", year: "1010 CE" },
      { name: "Ramanathaswamy Temple", location: "Rameswaram, TN", year: "12th Cent CE" },
      { name: "Srirangam Ranganathaswamy", location: "Tiruchirappalli, TN", year: "9th Cent CE" }
    ]
  },

  vesara: {
    id: "vesara",
    name: "Vesara Style (Hybrid)",
    sanskritName: "वेसर शैली (Deccan / Karnataka Architecture)",
    region: "Deccan Plateau, Karnataka & Central Maharashtra (Krishna-Tungabhadra basin)",
    origin: "7th-13th Century CE (Chalukyas of Badami, Rashtrakutas & Hoysalas)",
    philosophy: "A sophisticated synthesis combining the vertical curvilinear soaring grace of Nagara with the stepped geometric tiers of Dravidian architecture.",
    color: "#D4AF37",
    subStyles: ["Badami Chalukya (Aihole, Pattadakal, Badami)", "Rashtrakuta Rock-Cut (Ellora)", "Western Chalukya (Kalyani)", "Hoysala Star-Shaped Soapstone Wonders (Belur, Halebidu, Somnathpura)"],
    keyDifferences: [
      "Stellate (star-shaped) or complex polygonal ground plans with multiple acute angles",
      "Intricately carved Chloritic Schist (soapstone) allowing high-relief micro-carvings resembling jewelry",
      "Vimana is tiered like Dravidian but adopts the curvilinear silhouette of Nagara",
      "Polished lathe-turned soapstone pillars inside the Navaranga (hall)",
      "High multi-layered friezes along the base running continuously around all 32 points of the star"
    ],
    hotspots: [
      {
        id: "stellate-plan",
        x: 60,
        y: 82,
        name: "Stellate (Star-Shaped) Jagati",
        sanskrit: "नक्षत्र आकार पीठ (Star-Shaped Ground Plinth)",
        category: "Geometric Base",
        description: "The sanctum and plinth are arranged in a 16 or 32-pointed star pattern formed by rotating squares on a central axis, dramatically increasing outer wall surface area for frieze carvings."
      },
      {
        id: "hybrid-vimana",
        x: 55,
        y: 30,
        name: "Vesara Hybrid Vimana",
        sanskrit: "वेसर विमान (Synthesized Tower)",
        category: "Superstructure",
        description: "Features horizontal Dravidian storeys whose vertical profiles are modulated into a soft Nagara parabolic curve, topped with miniature decorative shikhara replicas (Aedicules)."
      },
      {
        id: "lathe-pillars",
        x: 35,
        y: 65,
        name: "Lathe-Turned Soapstone Pillars",
        sanskrit: "घूर्णित स्तम्भ (Turned Monolithic Columns)",
        category: "Interior Hall",
        description: "Columns carved on primitive mechanical rotating water lathes, giving them mirror-polished glossy surfaces with intricate fluted bell moldings."
      },
      {
        id: "sukanasi",
        x: 46,
        y: 42,
        name: "Sukanasi (Nose of the Temple)",
        sanskrit: "शुकनासी (Antarala Crest / Tower Nose)",
        category: "Frontal Arch",
        description: "An ornate frontal projection emerging like an eagle's beak from the base of the tower above the antechamber, adorned with the dynastic royal emblem (e.g. Sala fighting the tiger)."
      },
      {
        id: "frieze-bands",
        x: 50,
        y: 90,
        name: "Continuous Tiered Friezes",
        sanskrit: "अलंकार पट्टी (Narrative Stone Friezes)",
        category: "Sculptural Relief",
        description: "Eight continuous horizontal relief bands running around the entire perimeter depicting: Elephants (strength), Horses (speed), Foliage (beauty), Makaras (water), and epic episodes of the Ramayana and Mahabharata."
      }
    ],
    examples: [
      { name: "Chennakeshava Temple", location: "Belur, Karnataka", year: "1117 CE" },
      { name: "Hoysaleswara Temple", location: "Halebidu, Karnataka", year: "1121 CE" },
      { name: "Kailasa Temple (Cave 16)", location: "Ellora, Maharashtra", year: "756 CE" },
      { name: "Pattadakal Virupaksha", location: "Karnataka", year: "740 CE" }
    ]
  }
};

export const ANATOMY_TERMS_GLOSSARY = [
  { term: "Garbhagriha", sanskrit: "गर्भगृह", meaning: "Womb chamber / inner sanctum housing the principal consecrated murti." },
  { term: "Shikhara / Vimana", sanskrit: "शिखर / विमान", meaning: "The monumental spire or pyramidal tower constructed directly over the sanctum." },
  { term: "Amalaka", sanskrit: "आमलक", meaning: "Segmented ribbed stone disc at the apex of Nagara spires, representing the cosmic sun." },
  { term: "Kalasha", sanskrit: "कलश", meaning: "The crowning divine urn/vase holding holy water, grain, or amrita at the highest pinnacle." },
  { term: "Mandapa", sanskrit: "मण्डप", meaning: "Pillared public assembly and dance hall preceding the inner sanctuary." },
  { term: "Antarala", sanskrit: "अन्तराल", meaning: "Intermediate vestibule or threshold between the mandapa and the garbhagriha." },
  { term: "Gopuram", sanskrit: "गोपुरम्", meaning: "Towering gateway superstructure in Dravidian architecture leading into temple courtyards." },
  { term: "Prakara", sanskrit: "प्राकार", meaning: "Concentric outer enclosing stone walls forming protective courtyards." },
  { term: "Pushkarini", sanskrit: "पुष्करिणी", meaning: "Sacred stepped ritual water tank used for purification and float festivals." },
  { term: "Jagati", sanskrit: "जगती", meaning: "Raised stone terrace platform serving as the foundation and circumambulatory deck." }
];
