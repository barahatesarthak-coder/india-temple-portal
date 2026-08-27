export const PILGRIMAGE_CIRCUITS = [
  {
    id: "char-dham",
    name: "Maha Char Dham Circuit",
    sanskritName: "महा चार धाम यात्रा (The Four Sacred Cardinal Cardinal Points)",
    establishedBy: "Adi Shankaracharya (8th Century CE)",
    totalDistanceKm: 6280,
    estimatedDays: "18–21 Days",
    bestSeason: "May to October (Kedarnath/Badrinath are snow-bound Nov–Apr)",
    tagline: "The Four Cosmic Corners of Bharat: North, South, East & West",
    description: "The ultimate Hindu spiritual pilgrimage encompassing four sacred sanctuaries situated at the four cardinal directions of India, designed to grant complete spiritual liberation (Moksha) across four cosmic yugas.",
    recommendedOrder: ["Puri (East - Satya Yuga)", "Rameswaram (South - Treta Yuga)", "Dwarka (West - Dvapara Yuga)", "Badrinath (North - Kali Yuga)"],
    stops: [
      {
        stopNumber: 1,
        name: "Jagannath Temple (Puri)",
        state: "Odisha",
        direction: "East (Bay of Bengal)",
        deity: "Lord Jagannath (Vishnu / Krishna)",
        templeId: "jagannath-puri",
        elevation: "Sea Level",
        transit: "Biju Patnaik Intl Airport (BBI, Bhubaneswar 60km) or Puri Railway Terminus (PURI)",
        significance: "Where the Lord dines and partakes of the holy 56 Mahaprasad feast.",
        dressCode: "Traditional Dhoti / Sari mandatory. No leather items."
      },
      {
        stopNumber: 2,
        name: "Ramanathaswamy Temple (Rameswaram)",
        state: "Tamil Nadu",
        direction: "South (Indian Ocean)",
        deity: "Lord Shiva (Consecrated by Rama)",
        templeId: "ramanathaswamy-temple",
        elevation: "Sea Level",
        transit: "Madurai Airport (IXM, 175km) or Rameswaram Express Railway (RMM) via Pamban Sea Bridge",
        significance: "Where Lord Rama absolved sins by bathing in 22 sacred subterranean Theerthams.",
        dressCode: "Traditional Dhoti / Sari. Change to dry clothes after Theertham bath."
      },
      {
        stopNumber: 3,
        name: "Dwarkadhish Temple (Jagat Mandir)",
        state: "Gujarat",
        direction: "West (Arabian Sea)",
        deity: "Lord Krishna (King of Dwarka)",
        templeId: "dwarka-temple",
        elevation: "Sea Level",
        transit: "Jamnagar Airport (JGA, 130km) or Dwarka Railway Station (DWK)",
        significance: "Where the Lord ruled His golden submerged kingdom of Dwarka.",
        dressCode: "Modest traditional attire. Footwear removed at Gomti river ghat."
      },
      {
        stopNumber: 4,
        name: "Badrinath Dham",
        state: "Uttarakhand",
        direction: "North (Garhwal Himalayas)",
        deity: "Lord Badri Vishal (Meditating Vishnu)",
        templeId: "badrinath-temple",
        elevation: "3,133 Meters (10,279 ft)",
        transit: "Jolly Grant Airport (DED, Dehradun 315km) or Rishikesh / Helipad at Badrinath",
        significance: "Where Lord Vishnu performed severe penance under the sacred Badri (Berry) tree in the freezing snow.",
        dressCode: "Heavy thermal woollens and traditional shawls."
      }
    ],
    travelTips: [
      "Obtain mandatory Char Dham Biometric / Online Registration pass from Uttarakhand Tourism before travelling.",
      "Acclimatize for 24 hours at Joshimath or Haridwar before heading to high-altitude Himalayan shrines.",
      "Carry sufficient cash as high-altitude ATM connectivity can be variable in mountain passes.",
      "Ensure advance booking for special Abhishekam tickets at Puri and Rameswaram to avoid peak 4-hour queues."
    ],
    packingChecklist: [
      { item: "Valid Government Photo ID (Aadhaar / Passport / Voter ID)", essential: true },
      { item: "Uttarakhand Char Dham Online Yatra e-Pass QR code", essential: true },
      { item: "Traditional Dhoti-Kurta / Sarees (minimum 2 sets)", essential: true },
      { item: "Thermal inners & windproof down jacket (for Badrinath/Kedarnath)", essential: true },
      { item: "Waterproof pouch for smartphones & temple tokens", essential: true },
      { item: "Altitude sickness medicine (Diamox) & personal first-aid kit", essential: true },
      { item: "Slip-on footwear for easy removal at shoe cloakrooms", essential: false }
    ]
  },

  {
    id: "12-jyotirlingas",
    name: "12 Jyotirlingas Circuit",
    sanskritName: "द्वादश ज्योतिर्लिंग यात्रा (The 12 Radiant Columns of Light)",
    establishedBy: "Vedic Puranic Antiquity & Adi Shankaracharya Hymns",
    totalDistanceKm: 8750,
    estimatedDays: "24–28 Days (or 4 regional clusters)",
    bestSeason: "October to March (Pleasant weather across Maharashtra, Gujarat & Central India)",
    tagline: "The Twelve Eternal Manifestations of Lord Shiva as Infinite Light",
    description: "The most revered Shaivite pilgrimage circuit spanning 8 Indian states. According to the Shiva Purana, reciting the names of the 12 Jyotirlingas destroys sins accumulated over seven lifetimes.",
    recommendedOrder: [
      "1. Somnath (Gujarat)",
      "2. Mallikarjuna (Andhra Pradesh)",
      "3. Mahakaleshwar (Madhya Pradesh)",
      "4. Omkareshwar (Madhya Pradesh)",
      "5. Kedarnath (Uttarakhand)",
      "6. Bhimashankar (Maharashtra)",
      "7. Kashi Vishwanath (Uttar Pradesh)",
      "8. Trimbakeshwar (Maharashtra)",
      "9. Vaidyanath / Baidyanath (Jharkhand)",
      "10. Nageshwar (Gujarat)",
      "11. Rameshwar (Tamil Nadu)",
      "12. Grishneshwar (Maharashtra)"
    ],
    stops: [
      {
        stopNumber: 1,
        name: "Somnath Jyotirlinga",
        city: "Prabhas Patan",
        state: "Gujarat",
        significance: "First of the 12 Jyotirlingas; consecrated by the Moon God Chandra on the Arabian Sea.",
        templeId: "somnath-temple",
        bestTime: "Oct – Mar",
        transit: "Diu Airport (85km) or Veraval Railway Station (VRL, 7km)"
      },
      {
        stopNumber: 2,
        name: "Mallikarjuna Jyotirlinga",
        city: "Srisailam",
        state: "Andhra Pradesh",
        significance: "Perched on the Nallamala Hills along Krishna River; both a Jyotirlinga and a Shakti Peetha.",
        templeId: "mallikarjuna-temple",
        bestTime: "Sep – Feb",
        transit: "Hyderabad Airport (RGIA, 200km) or Markapur Road Railway (MRK, 85km)"
      },
      {
        stopNumber: 3,
        name: "Mahakaleshwar Jyotirlinga",
        city: "Ujjain",
        state: "Madhya Pradesh",
        significance: "Only South-facing (Dakshinmurti) Jyotirlinga; famous for the sacred Bhasma Aarti at 4 AM.",
        templeId: "mahakaleshwar-temple",
        bestTime: "Oct – Mar",
        transit: "Indore Airport (IDR, 55km) or Ujjain Junction (UJN)"
      },
      {
        stopNumber: 4,
        name: "Omkareshwar Jyotirlinga",
        city: "Mandhata Island",
        state: "Madhya Pradesh",
        significance: "Located on an island in the Narmada River shaped naturally like the sacred 'OM' symbol.",
        templeId: "omkareshwar-temple",
        bestTime: "Oct – Mar",
        transit: "Indore Airport (IDR, 80km) or Khandwa Junction (KNW, 70km)"
      },
      {
        stopNumber: 5,
        name: "Kedarnath Jyotirlinga",
        city: "Rudraprayag",
        state: "Uttarakhand",
        significance: "The highest Jyotirlinga at 3,583m amidst Himalayan glaciers; represents Shiva's celestial hump.",
        templeId: "kedarnath-temple",
        bestTime: "May – Jun & Sep – Oct",
        transit: "Dehradun Airport (DED, 240km to Gaurikund) + 16km mountain trek / Helicopter"
      },
      {
        stopNumber: 6,
        name: "Bhimashankar Jyotirlinga",
        city: "Pune District",
        state: "Maharashtra",
        significance: "Origin of the holy Bhima River amidst Sahyadri rainforests where Shiva defeated demon Bhima.",
        templeId: "bhimashankar-temple",
        bestTime: "Aug – Feb",
        transit: "Pune Airport (PNQ, 110km) or Mumbai CST (220km)"
      },
      {
        stopNumber: 7,
        name: "Kashi Vishwanath Jyotirlinga",
        city: "Varanasi",
        state: "Uttar Pradesh",
        significance: "Spiritual capital of India; golden-spire Jyotirlinga on the western banks of River Ganga.",
        templeId: "kashi-vishwanath",
        bestTime: "Oct – Mar",
        transit: "Lal Bahadur Shastri Airport (VNS, 25km) or Varanasi Junction (BSB)"
      },
      {
        stopNumber: 8,
        name: "Trimbakeshwar Jyotirlinga",
        city: "Nashik",
        state: "Maharashtra",
        significance: "Unique 3-faced Lingam representing Brahma, Vishnu, and Shiva; origin of River Godavari.",
        templeId: "trimbakeshwar-temple",
        bestTime: "Sep – Mar",
        transit: "Nashik Airport (ISK, 50km) or Nashik Road Railway (NK, 38km)"
      },
      {
        stopNumber: 9,
        name: "Baidyanath / Vaidyanath Dham",
        city: "Deoghar",
        state: "Jharkhand",
        significance: "Where Ravana worshipped Shiva; renowned for the million-pilgrim Kanwar Yatra with holy Ganga water.",
        templeId: "baidyanath-temple",
        bestTime: "Oct – Feb (Shravan July/Aug for Kanwar)",
        transit: "Deoghar Airport (DGH, 8km) or Jasidih Junction (JSME, 7km)"
      },
      {
        stopNumber: 10,
        name: "Nageshwar Jyotirlinga",
        city: "Dwarka",
        state: "Gujarat",
        significance: "Lord of Serpents; protects against all poisonous fears and astrological afflictions.",
        templeId: "nageshwar-temple",
        bestTime: "Oct – Mar",
        transit: "Jamnagar Airport (145km) or Dwarka Railway Station (DWK, 17km)"
      },
      {
        stopNumber: 11,
        name: "Rameswaram Jyotirlinga",
        city: "Rameswaram Island",
        state: "Tamil Nadu",
        significance: "Southernmost Jyotirlinga consecrated by Lord Rama; longest temple corridor in the world.",
        templeId: "ramanathaswamy-temple",
        bestTime: "Oct – Apr",
        transit: "Madurai Airport (IXM, 175km) or Rameswaram Railway (RMM)"
      },
      {
        stopNumber: 12,
        name: "Grishneshwar Jyotirlinga",
        city: "Verul (near Ellora)",
        state: "Maharashtra",
        significance: "The 12th and final Jyotirlinga, built from red volcanic rock beside the UNESCO Ellora Caves.",
        templeId: "grishneshwar-temple",
        bestTime: "Oct – Mar",
        transit: "Aurangabad Airport (IXU, 30km) or Aurangabad Railway Station (30km)"
      }
    ],
    travelTips: [
      "For Mahakaleshwar, book the 04:00 AM Bhasma Aarti online 60 days in advance via the official Ujjain temple portal.",
      "The Maharashtra cluster (Bhimashankar, Trimbakeshwar, Grishneshwar) can be completed easily in a 4-day road trip from Mumbai/Pune.",
      "The Gujarat cluster (Somnath and Nageshwar/Dwarka) pairs naturally with the coastal Arabian sea expressway."
    ],
    packingChecklist: [
      { item: "Bhasma Aarti Registration printouts (for Ujjain)", essential: true },
      { item: "Cotton Dhotis for men (Sparsh Abhishek requirement across most Jyotirlingas)", essential: true },
      { item: "Small brass vessels (Lota) for offering holy water/bilva patra", essential: false },
      { item: "Power banks & multi-plug adapters for long train/road connections", essential: true }
    ]
  },

  {
    id: "pancha-bhoota",
    name: "Pancha Bhoota Stalam Circuit",
    sanskritName: "पञ्चभूत स्थलम् (The Five Cosmic Elemental Shrines)",
    establishedBy: "Vedic Agamas & South Indian Siddha Masters",
    totalDistanceKm: 820,
    estimatedDays: "5–7 Days",
    bestSeason: "November to February",
    tagline: "The Five Shiva Shrines Embodying Earth, Water, Fire, Air & Cosmic Space",
    description: "An extraordinary geographical and cosmic wonder where five ancient Shiva temples in South India are aligned precisely with nature's five fundamental elements (Pancha Mahabhutas). Three of these temples sit exactly on the 79° 41' E geographic meridian!",
    recommendedOrder: ["Ekambareswarar (Earth)", "Jambukeswarar (Water)", "Annamalaiyar (Fire)", "Srikalahasteeswara (Air)", "Nataraja Chidambaram (Space/Ether)"],
    stops: [
      {
        stopNumber: 1,
        name: "Ekambareswarar Temple (Kanchipuram)",
        state: "Tamil Nadu",
        element: "Prithvi (Earth / पृथ्वी)",
        symbolism: "Lord Shiva worshipped as a Prithvi Lingam made of sand by Goddess Parvati under a 3,500-year-old mango tree.",
        transit: "Chennai Airport (MAA, 70km) or Kanchipuram Railway"
      },
      {
        stopNumber: 2,
        name: "Jambukeswarar Temple, Thiruvanaikaval",
        state: "Tamil Nadu",
        element: "Appu (Water / जल)",
        symbolism: "The sanctum lingam sits immersed in an eternal underground freshwater spring that never runs dry.",
        transit: "Tiruchirappalli Intl Airport (TRZ, 12km) or Trichy Fort Railway"
      },
      {
        stopNumber: 3,
        name: "Arunachaleswarar Temple, Tiruvannamalai",
        state: "Tamil Nadu",
        element: "Tejas / Agni (Fire / अग्नि)",
        symbolism: "Shiva manifests as the blazing beacon of light atop Mount Arunachala; celebrated during the Karthigai Deepam festival.",
        transit: "Chennai Airport (MAA, 185km) or Tiruvannamalai Railway (TNM)"
      },
      {
        stopNumber: 4,
        name: "Srikalahasteeswara Temple (Srikalahasti)",
        state: "Andhra Pradesh",
        element: "Vayu (Air / वायु)",
        symbolism: "Even in an airtight underground sanctum, the flame of the ghee lamp flickers continuously due to Shiva's breath.",
        transit: "Tirupati Airport (TIR, 28km) or Srikalahasti Railway (KHT)"
      },
      {
        stopNumber: 5,
        name: "Thillai Nataraja Temple, Chidambaram",
        state: "Tamil Nadu",
        element: "Akasha (Space/Ether / आकाश)",
        symbolism: "Shiva performs the cosmic dance of bliss (Ananda Tandava). The Chidambara Rahasya represents formless infinite space behind a golden veil.",
        transit: "Puducherry Airport (65km) or Chidambaram Railway (CDM)"
      }
    ],
    travelTips: [
      "Notice the miraculous geographical alignment: Kedarnath, Kaleshwaram, Kalahasti, Kanchipuram, and Chidambaram all lie along the 79° East longitude line!",
      "Perform the Girivalam (14km barefoot walk around Mount Arunachala) on full moon nights for profound spiritual clarity.",
      "Witness the daily 9:00 PM Rahasya Pooja at Chidambaram where the golden bilva leaf garland is revealed in empty space."
    ],
    packingChecklist: [
      { item: "Traditional South Indian Cotton Veshti / Sarees", essential: true },
      { item: "Comfortable footwear for Girivalam outer circumambulation", essential: true },
      { item: "Small torchlight / flashlight for evening Temple prakaram walks", essential: false }
    ]
  }
];
