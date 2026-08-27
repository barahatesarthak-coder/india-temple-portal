export const TEMPLES_DATA = [
  {
    id: "meenakshi-amman",
    name: "Meenakshi Amman Temple",
    sanskritName: "मीनक्षी सुन्दरेश्वरर मन्दिरम्",
    deity: "Goddess Meenakshi (Parvati) & Sundareswarar (Shiva)",
    city: "Madurai",
    state: "Tamil Nadu",
    region: "South",
    style: "Dravidian",
    circuits: ["Pancha Bhoota Stalam", "Shakti Peethas"],
    period: "6th Century CE (Expanded 14th-17th Century by Nayakas)",
    dynasty: "Pandyan & Madurai Nayak Dynasties",
    tagline: "The Zenith of Dravidian Temple Architecture & Living Heritage",
    description: "Centuries-old spiritual epicentre sprawling across 14 acres with 14 monumental Gopurams, the mythical Potramarai Kulam (Golden Lotus Tank), and the iconic 1000-Pillared Hall featuring musical granite pillars.",
    image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    reviewsCount: "128k+",
    rushLevel: "Moderate", // Low, Moderate, High, Peak
    rushPercentage: 58,
    rushHeatmap24h: [
      { hour: "04:00", rush: 30, status: "Low", note: "Suprabhatam line forms" },
      { hour: "05:00", rush: 65, status: "Moderate", note: "Mangala Aarti rush" },
      { hour: "06:00", rush: 80, status: "High", note: "Morning darshan peak" },
      { hour: "07:00", rush: 85, status: "High", note: "Morning queue" },
      { hour: "08:00", rush: 70, status: "Moderate", note: "Regular flow" },
      { hour: "09:00", rush: 75, status: "High", note: "Tourists & pilgrims arrive" },
      { hour: "10:00", rush: 80, status: "High", note: "Darshan queue peak" },
      { hour: "11:00", rush: 60, status: "Moderate", note: "Midday darshan" },
      { hour: "12:00", rush: 40, status: "Low", note: "Temple Sanctum closes at 12:30" },
      { hour: "13:00", rush: 10, status: "Low", note: "Gates closed for midday break" },
      { hour: "14:00", rush: 10, status: "Low", note: "Gates closed" },
      { hour: "15:00", rush: 25, status: "Low", note: "Pilgrims assemble for re-opening" },
      { hour: "16:00", rush: 60, status: "Moderate", note: "Gates reopen (4:00 PM)" },
      { hour: "17:00", rush: 75, status: "High", note: "Evening darshan begins" },
      { hour: "18:00", rush: 90, status: "Peak", note: "Sayarakshai / Sunset Aarti" },
      { hour: "19:00", rush: 95, status: "Peak", note: "Palliyarai Pooja Procession" },
      { hour: "20:00", rush: 80, status: "High", note: "Night Darshan queue" },
      { hour: "21:00", rush: 50, status: "Moderate", note: "Closing rituals" },
      { hour: "22:00", rush: 15, status: "Low", note: "Temple closes at 10:00 PM" }
    ],
    bestDarshanSlots: [
      { time: "05:00 AM – 06:30 AM", label: "Mangala Darshan (Minimal wait, divine atmosphere)" },
      { time: "04:00 PM – 05:15 PM", label: "Afternoon Re-opening Slot (Smooth movement)" }
    ],
    aartiSchedule: [
      { name: "Thiruvanandal (Wake-up Aarti)", time: "05:00 AM", significance: "Awakening of the deities with conch & nadaswaram chants", completed: true },
      { name: "Vizha Pooja (Morning Aarti)", time: "06:30 AM", significance: "Sacred abhishekam with milk, sandalwood, and sacred herbs", completed: true },
      { name: "Kalasandhi Pooja", time: "08:30 AM", significance: "Morning grand offering with Vedic hymns", completed: true },
      { name: "Uchikala Pooja (Noon Aarti)", time: "12:00 PM", significance: "Midday prasadam offering before sanctum rest", completed: false },
      { name: "Sayarakshai (Evening Sunset Aarti)", time: "06:00 PM", significance: "Spectacular lighting of brass lamps & deeparadhana", completed: false },
      { name: "Palliyarai Pooja (Night Chamber Ritual)", time: "09:15 PM", significance: "Ceremonial palanquin procession carrying Lord Sundareswarar to Meenakshi's chamber", completed: false }
    ],
    rulesMatrix: {
      photography: {
        allowed: false,
        badge: "Restricted",
        color: "amber",
        details: "Cameras and phones strictly prohibited inside the main shrine complex. Deposit required at East tower."
      },
      dressCode: {
        allowed: true,
        badge: "Traditional Mandate",
        color: "red",
        details: "Men: Dhoti/Veshti with Angavastram or Kurta-Pyjama (no shirts in inner sanctum). Women: Sari or Salwar Kameez with Dupatta. Western casuals, shorts, and skirts prohibited."
      },
      wheelchair: {
        allowed: true,
        badge: "Ramps & Battery Cars",
        color: "green",
        details: "Wheelchairs and dedicated assistant escorts available at the East & West Gopuram entrances. Battery-operated transit available around the outer Prakaram."
      },
      footwear: {
        allowed: true,
        badge: "Free Token Cloakroom",
        color: "blue",
        details: "Multi-counter organized shoe deposit facility operating with barcoded tokens near all four cardinal gateways."
      },
      mobileLockers: {
        allowed: true,
        badge: "Biometric Smart Lockers",
        color: "emerald",
        details: "Automated digital lockers (₹10/hr) right before metal detector checkpoints at the North and East Gopurams."
      },
      bookingPass: {
        officialUrl: "https://maduraimeenakshi.hrce.tn.gov.in/",
        authority: "HR&CE Dept., Government of Tamil Nadu",
        passTypes: ["Free Dharma Darshan", "Special Quick Darshan (₹100)", "VIP Abhishekam Booking (₹500)"]
      }
    },
    audioLegend: {
      title: "The Legend of Tadaatagai & The Thousand Pillar Symphony",
      duration: "4 min 12 sec",
      soundscapeType: "temple_bells_om_drone",
      narrator: "Pandit R. Srinivasan (Heritage Historian)",
      paragraphs: [
        "Centuries ago, King Malayadwaja Pandya and Queen Kanchanamala performed the sacred Putrakameshti Yajna seeking an heir. From the sacrificial altar arose a 3-year-old girl with three breasts and eyes like a fish—Minakshi. A celestial voice echoed: 'Fear not, her third breast will vanish the moment she beholds her eternal consort.'",
        "Trained in the 64 martial arts, Meenakshi conquered all directions and marched to Mount Kailash. As Lord Shiva stepped forward into the battlefield, her third breast dissolved instantly, and she bowed in sacred surrender.",
        "Their celestial wedding in Madurai was attended by Lord Vishnu Himself as her brother. Within this holy citadel stands the Ayiram Kaal Mandapam—the Hall of 1000 Pillars, sculpted with mathematical harmony such that musical pillars carved from single granite blocks ring with distinct swaras when struck."
      ]
    },
    architectureHighlights: {
      styleDetails: "Dravidian Architectural Grandeur with concentric rectangular Prakaras (enclosures) aligned with cosmic geometry (Vastu Purusha Mandala).",
      features: [
        "14 Soaring Gopurams (Tallest is the South Tower at 52m/170ft with 1,511 stucco figures)",
        "Potramarai Kulam (Golden Lotus Pond where ancient Tamil Sangam poets weighed literary works)",
        "Hall of Thousand Pillars (985 exquisitely carved monolithic granite pillars)",
        "Musical Granite Pillars that produce distinct acoustic pitches"
      ],
      structuralBreakdown: {
        gopuram: "Pyramidal stepped entrance towers ornately decorated with painted stucco mythological figures.",
        vimana: "Golden Kalasha-topped shrine over the Garbhagriha.",
        mandapam: "Hypostyle pillared assembly halls depicting epic battles and dancing celestial Apsaras."
      }
    }
  },
  {
    id: "konark-sun-temple",
    name: "Konark Sun Temple",
    sanskritName: "कोणार्क सूर्य मन्दिरम्",
    deity: "Lord Surya (The Sun God)",
    city: "Konark",
    state: "Odisha",
    region: "East",
    style: "Kalinga (Nagara sub-style)",
    circuits: ["Char Dham (Extended Odisha)", "Golden Triangle of Odisha"],
    period: "13th Century CE (c. 1250 CE)",
    dynasty: "Eastern Ganga Dynasty (King Narasimhadeva I)",
    tagline: "The Grand Stone Chariot of the Cosmic Sun God & UNESCO Wonder",
    description: "Conceived as a colossal 24-wheeled chariot carved entirely from Khondalite stone, pulled by 7 galloping stone steeds to mark the days of the week, featuring intricate erotic sculptures and scientific sundials accurate to seconds.",
    image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    reviewsCount: "94k+",
    rushLevel: "Low",
    rushPercentage: 35,
    rushHeatmap24h: [
      { hour: "06:00", rush: 20, status: "Low", note: "Sunrise photography window" },
      { hour: "07:00", rush: 35, status: "Low", note: "Pleasant early morning breeze" },
      { hour: "08:00", rush: 50, status: "Moderate", note: "Guided heritage tours start" },
      { hour: "09:00", rush: 65, status: "Moderate", note: "Tourist buses arrive" },
      { hour: "10:00", rush: 70, status: "High", note: "Peak daytime visitation" },
      { hour: "11:00", rush: 60, status: "Moderate", note: "Sunny afternoon" },
      { hour: "12:00", rush: 40, status: "Low", note: "High heat on stone walkways" },
      { hour: "13:00", rush: 30, status: "Low", note: "Museum & cafe visits" },
      { hour: "14:00", rush: 45, status: "Low", note: "Afternoon shadow angles" },
      { hour: "15:00", rush: 60, status: "Moderate", note: "Pleasant evening crowds" },
      { hour: "16:00", rush: 80, status: "High", note: "Golden Hour photography" },
      { hour: "17:00", rush: 85, status: "High", note: "Sunset reflection on Wheels" },
      { hour: "18:00", rush: 90, status: "Peak", note: "Grand Light & Sound Show" },
      { hour: "19:00", rush: 70, status: "Moderate", note: "Evening illumination" },
      { hour: "20:00", rush: 20, status: "Low", note: "Monument closes" }
    ],
    bestDarshanSlots: [
      { time: "06:00 AM – 07:30 AM", label: "Golden Sunrise (Watch first rays illuminate the chariot wheels)" },
      { time: "04:30 PM – 06:30 PM", label: "Golden Hour & Evening Light & Sound Show" }
    ],
    aartiSchedule: [
      { name: "Surya Vandana (Heritage Sunrise Chants)", time: "06:00 AM", significance: "Vedic Gayatri Mantra chanting overlooking the Bay of Bengal", completed: true },
      { name: "Archaeological Monument Opening", time: "06:00 AM", significance: "Gates open for international tourists and spiritual seekers", completed: true },
      { name: "Midday Solar Meridian Time Demonstration", time: "12:00 PM", significance: "Official guides demonstrate shadow time calculation on the Spokes", completed: false },
      { name: "Sunset Heritage Illumination", time: "05:45 PM", significance: "Lighting of warm spotlights illuminating stone reliefs", completed: false },
      { name: "Son-et-Lumière (Light & Sound Show)", time: "07:00 PM", significance: "Mesmerizing narration of King Narasimhadeva and Dharmapada in Hindi & English", completed: false }
    ],
    rulesMatrix: {
      photography: {
        allowed: true,
        badge: "Allowed Everywhere",
        color: "green",
        details: "DSLR cameras and mobile phones permitted throughout the monument grounds. Commercial drones require ASI permission."
      },
      dressCode: {
        allowed: true,
        badge: "Modest Casuals",
        color: "blue",
        details: "No strict religious restriction (monument managed by ASI). Comfortable walking shoes and sun protection recommended."
      },
      wheelchair: {
        allowed: true,
        badge: "Paved Ramps Available",
        color: "green",
        details: "ASI provides smooth paved pathways and free wheelchair services at the ticket pavilion."
      },
      footwear: {
        allowed: true,
        badge: "Footwear Permitted",
        color: "blue",
        details: "Footwear allowed on monument lawns and outer platforms. Wooden walkways provided on heated stone surfaces."
      },
      mobileLockers: {
        allowed: true,
        badge: "ASI Cloakroom",
        color: "emerald",
        details: "Luggage and bag lockers available at the ASI Interpretation Centre."
      },
      bookingPass: {
        officialUrl: "https://asi.payumoney.com/quick/konark",
        authority: "Archaeological Survey of India (ASI)",
        passTypes: ["Indian Citizen Entry (₹40)", "SAARC/BIMSTEC (₹40)", "Foreign National (₹600)", "Light & Sound Ticket (₹50)"]
      }
    },
    audioLegend: {
      title: "The Sacrifice of 12-Year-Old Dharmapada & The Magnetic Spire",
      duration: "5 min 10 sec",
      soundscapeType: "temple_bells_om_drone",
      narrator: "Dr. Pratibha Ray (Odia Cultural Scholar)",
      paragraphs: [
        "Twelve hundred master artisans worked tirelessly for twelve years under chief architect Bisu Maharana to construct the celestial chariot of Surya. Yet, the crown stone (Kalasha) atop the towering sanctum defied all engineering—it could not be positioned without collapsing.",
        "King Narasimhadeva issued a grim ultimatum: if the spire was not mounted by sunrise, all twelve hundred artisans would face execution. Despair gripped the camp until Bisu Maharana's 12-year-old son, Dharmapada, who had studied temple shastras since infancy, climbed the mammoth spire and flawlessly aligned the crowning lodestone.",
        "Knowing that envious nobles would claim 1200 craftsmen were outsmarted by a child, Dharmapada leaped from the pinnacle into the roaring sea beneath, sacrificing his life to safeguard the honor and lives of all 1,200 sculptors."
      ]
    },
    architectureHighlights: {
      styleDetails: "Kalinga Rekha Deula and Jagamohana style featuring Khondalite and Chlorite stone, aligned with solar solstices.",
      features: [
        "24 Ornate Wheels acting as high-precision sundials (spokes mark 8 Praharas of the day)",
        "7 Sculptured Galloping Horses representing the 7 days of the week and 7 colors of sunlight",
        "Natamandira (Dancing Hall) depicting 128 traditional Odissi dance postures (Karanas)",
        "Astronomical orientation where the first morning rays entered the Garbhagriha"
      ],
      structuralBreakdown: {
        shikhara: "Deula (Curvilinear tower) originally rising 70 meters, designed to direct cosmic prana.",
        mandapa: "Jagamohana (Assembly Hall) with a tiered pyramidal roof standing resilient against coastal storms.",
        amalaka: "Massive fluted disc at the apex stabilizing the monumental corbelled stone structure."
      }
    }
  },
  {
    id: "kedarnath-temple",
    name: "Kedarnath Dham",
    sanskritName: "श्री केदारनाथ ज्योतिर्लिंग मन्दिरम्",
    deity: "Lord Shiva (Sadashiva / Kedareswara)",
    city: "Rudraprayag",
    state: "Uttarakhand",
    region: "North",
    style: "Himalayan Nagara (Katyuri influence)",
    circuits: ["Char Dham", "12 Jyotirlingas", "Panch Kedar"],
    period: "8th Century CE (Adi Shankaracharya Restoration)",
    dynasty: "Pandava mythical foundation; Adi Shankara revival",
    tagline: "The Highest of the 12 Jyotirlingas Standing Resilient Among Glaciers",
    description: "Perched at 3,583 meters against the snowy Kedardome peak, this ancient granite sanctuary survived the ice age and catastrophic floods, serving as the crown jewel of the Chota Char Dham and Jyotirlinga circuits.",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80",
    rating: 5.0,
    reviewsCount: "210k+",
    rushLevel: "Peak",
    rushPercentage: 92,
    rushHeatmap24h: [
      { hour: "03:00", rush: 50, status: "Moderate", note: "Maha Abhishek line starts in freezing weather" },
      { hour: "04:00", rush: 85, status: "High", note: "Morning queue across temple square" },
      { hour: "05:00", rush: 95, status: "Peak", note: "Mangala Aarti & early darshan" },
      { hour: "06:00", rush: 98, status: "Peak", note: "Helicopter batches land" },
      { hour: "07:00", rush: 95, status: "Peak", note: "Trek arrivals join line" },
      { hour: "08:00", rush: 90, status: "High", note: "General darshan queue" },
      { hour: "09:00", rush: 90, status: "High", note: "Peak morning crowd" },
      { hour: "10:00", rush: 85, status: "High", note: "Continuous queue" },
      { hour: "11:00", rush: 80, status: "High", note: "Midday queue" },
      { hour: "12:00", rush: 70, status: "Moderate", note: "Preparation for midday break" },
      { hour: "13:00", rush: 30, status: "Low", note: "Temple sanctum rest (1:00 PM - 3:00 PM)" },
      { hour: "14:00", rush: 30, status: "Low", note: "Sanctum closed" },
      { hour: "15:00", rush: 65, status: "Moderate", note: "Sanctum reopens" },
      { hour: "16:00", rush: 80, status: "High", note: "Evening arrivals" },
      { hour: "17:00", rush: 90, status: "High", note: "Evening Aarti gathering" },
      { hour: "18:00", rush: 98, status: "Peak", note: "Grand Sandhya Aarti in mist" },
      { hour: "19:00", rush: 95, status: "Peak", note: "Aarti concludes; Shiva Tandava Stotram chants" },
      { hour: "20:00", rush: 50, status: "Moderate", note: "Shayan Aarti & temple closure" }
    ],
    bestDarshanSlots: [
      { time: "04:30 AM – 06:00 AM", label: "Maha Abhishek Darshan (Experience the mystical mountain silence)" },
      { time: "03:00 PM – 04:30 PM", label: "Post-rest Afternoon Slot (Shorter queue before sunset drop in temperature)" }
    ],
    aartiSchedule: [
      { name: "Maha Abhishek Pooja", time: "04:00 AM", significance: "Sacred bathing of the Svayambhu hump-shaped Jyotirlinga with Panchamrit", completed: true },
      { name: "Pratahkaal Aarti (Morning)", time: "06:00 AM", significance: "Lighting of Akhand Jyoti amidst resonance of temple bells and blowing conches", completed: true },
      { name: "Bhog Pooja", time: "12:30 PM", significance: "Midday offering of sacred satvik food prepared by the Rawal priests", completed: false },
      { name: "Sandhya Maha Aarti (Evening)", time: "06:30 PM", significance: "Dramatic torchlit Aarti echoing across the Kedarnath valley and glacial slopes", completed: false },
      { name: "Shayan Aarti", time: "08:30 PM", significance: "Final devotional lullaby before closing the massive stone portals", completed: false }
    ],
    rulesMatrix: {
      photography: {
        allowed: false,
        badge: "Strictly Banned in Sanctum",
        color: "red",
        details: "Photography strictly banned inside the inner sanctum (Garbhagriha). Outer courtyard photography allowed."
      },
      dressCode: {
        allowed: true,
        badge: "Warm Traditional Attire",
        color: "amber",
        details: "Sub-zero temperatures demand heavy thermal woollens, windcheaters, and traditional scarves. Clean traditional wear preferred inside sanctum."
      },
      wheelchair: {
        allowed: true,
        badge: "Palki, Kandi & Ponies",
        color: "amber",
        details: "Due to high altitude terrain, manual Palki (sedan chairs), Kandi (baskets), and mule services are regulated by Gov administration from Gaurikund."
      },
      footwear: {
        allowed: true,
        badge: "Regulated Shoe Counters",
        color: "blue",
        details: "Free organized shoe storage at the temple platform. Woollen socks permitted on the ice-cold stone flags."
      },
      mobileLockers: {
        allowed: true,
        badge: "BKTC Locker Counters",
        color: "emerald",
        details: "Badri Kedar Temple Committee provides safe deposit counters for electronic devices and backpacks."
      },
      bookingPass: {
        officialUrl: "https://badrinath-kedarnath.gov.in/",
        authority: "Shri Badrinath-Kedarnath Temple Committee (BKTC) & Uttarakhand Tourism",
        passTypes: ["Mandatory Yatra Registration (Free)", "Special VIP Pooja Ticket (₹2,500)", "Helicopter Shuttle via IRCTC HeliYatra"]
      }
    },
    audioLegend: {
      title: "The Pandavas' Redemption & The Celestial Bull of Lord Shiva",
      duration: "4 min 45 sec",
      soundscapeType: "temple_bells_om_drone",
      narrator: "Acharya Vidyadhar Nautiyal",
      paragraphs: [
        "Following the devastating Kurukshetra war, the victorious Pandavas sought absolution from Lord Shiva for the sin of Gotra-hatya (slaying of kin). Shiva, unwilling to grant easy pardon, transformed Himself into a celestial bull and hid among the cattle grazing in the high Garhwal Himalayas.",
        "Bhima, recognizing the divine aura of the bull, stood astride two Himalayan ridges. As the herd passed beneath, all cattle walked under his legs except the divine bull. When Bhima attempted to hold the bull, it dove into the earth.",
        "Bhima caught hold of the hump, which remained permanently manifested at Kedarnath. The remaining four parts of Shiva's celestial form appeared at Tungnath (arms), Rudranath (face), Madhyamaheshwar (navel), and Kalpeshwar (hair), forming the sacred Panch Kedar."
      ]
    },
    architectureHighlights: {
      styleDetails: "Stout Himalayan Katyuri-Nagara stone masonry capable of withstanding colossal snow loads and earthquakes without mortar.",
      features: [
        "Interlocking massive grey granite slabs fitted with iron clamps",
        "Triangular Svayambhu rock representing the hump of the divine bull",
        "Statue of Nandi Bull carved from single stone guarding the entrance",
        "Sanctum survived 400 years buried under ice during the Little Ice Age (1300-1900 CE)"
      ],
      structuralBreakdown: {
        garbhagriha: "Square sanctum housing the natural un-carved conical rock lingam.",
        mandapa: "Spacious assembly hall with ornate stone pillars bearing carvings of the five Pandavas and Krishna.",
        shikhara: "Stepped stone tower capped with a wide stone umbrella (Chhatri) and brass urn."
      }
    }
  },
  {
    id: "golden-temple",
    name: "Sri Harmandir Sahib (Golden Temple)",
    sanskritName: "ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ",
    deity: "The Eternal Supreme (Akal Purakh) & Sri Guru Granth Sahib",
    city: "Amritsar",
    state: "Punjab",
    region: "North",
    style: "Indo-Islamic & Rajput-Sikh Harmony",
    circuits: ["Panj Takht", "Punjab Spiritual Trail"],
    period: "1581–1604 CE (Gold foil gilded by Maharaja Ranjit Singh in 1830)",
    dynasty: "Sikh Gurus (Guru Arjan Dev Ji & Guru Ram Das Ji)",
    tagline: "The Golden Sanctuary of Universal Equality, Seva & Eternal Harmony",
    description: "Glittering in the center of the sacred Amrit Sarovar, the Golden Temple features four open doors symbolizing universal welcome to all castes, creeds, and faiths, home to the world's largest free community kitchen (Langar).",
    image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1200&q=80",
    rating: 5.0,
    reviewsCount: "350k+",
    rushLevel: "High",
    rushPercentage: 78,
    rushHeatmap24h: [
      { hour: "02:00", rush: 40, status: "Low", note: "Parkarma cleaning & preparation" },
      { hour: "03:00", rush: 70, status: "Moderate", note: "Palki Sahib procession line forms" },
      { hour: "04:00", rush: 90, status: "High", note: "Palki Sahib ceremony with golden palanquin" },
      { hour: "05:00", rush: 85, status: "High", note: "Asa Di Var Kirtan in morning dawn" },
      { hour: "06:00", rush: 80, status: "High", note: "Morning Parikrama & Holy Dip in Sarovar" },
      { hour: "07:00", rush: 75, status: "High", note: "Continuous Gurbani Kirtan" },
      { hour: "08:00", rush: 80, status: "High", note: "Guru Ka Langar serving thousands" },
      { hour: "09:00", rush: 75, status: "Moderate", note: "Steady bridge queue" },
      { hour: "10:00", rush: 70, status: "Moderate", note: "Visitors exploring museums & library" },
      { hour: "11:00", rush: 65, status: "Moderate", note: "Midday Langar rush" },
      { hour: "12:00", rush: 70, status: "Moderate", note: "Langar hall peak" },
      { hour: "13:00", rush: 60, status: "Moderate", note: "Shaded walkways around Sarovar" },
      { hour: "14:00", rush: 55, status: "Moderate", note: "Smooth darshan bridge movement" },
      { hour: "15:00", rush: 65, status: "Moderate", note: "Afternoon prayers" },
      { hour: "16:00", rush: 75, status: "High", note: "Evening breeze over water" },
      { hour: "17:00", rush: 85, status: "High", note: "Rehras Sahib Path begins" },
      { hour: "18:00", rush: 95, status: "Peak", note: "Golden illumination turns on; breathtaking reflection" },
      { hour: "19:00", rush: 95, status: "Peak", note: "Evening Aarti & Kirtan" },
      { hour: "20:00", rush: 90, status: "High", note: "Night Darshan queue" },
      { hour: "21:00", rush: 92, status: "Peak", note: "Sukh-Aasan ceremony (Palki return)" },
      { hour: "22:00", rush: 70, status: "Moderate", note: "Peaceful midnight vigil" },
      { hour: "23:00", rush: 40, status: "Low", note: "Sanctum washing with milk and rosewater" }
    ],
    bestDarshanSlots: [
      { time: "03:30 AM – 05:00 AM", label: "Palki Sahib Ceremony (Carrying of the Holy Scripture on a golden palanquin)" },
      { time: "09:30 PM – 11:00 PM", label: "Night Illumination & Sukhasan Ceremony" }
    ],
    aartiSchedule: [
      { name: "Palki Sahib Seva (Morning)", time: "04:30 AM", significance: "Ceremonial escorting of Sri Guru Granth Sahib from Akal Takht to Harmandir Sahib", completed: true },
      { name: "Asa Di Var Kirtan", time: "06:00 AM", significance: "Melodious morning ragas sung by classical Raagis", completed: true },
      { name: "Rehras Sahib (Evening)", time: "05:30 PM", significance: "Evening divine prayer recited as dusk falls over the Amrit Sarovar", completed: false },
      { name: "Aarti / Kirtan Sohila", time: "08:00 PM", significance: "Sacred Gurbani chanting before night rest", completed: false },
      { name: "Sukhasan Ceremony (Night)", time: "10:00 PM", significance: "Retirement of the Guru Granth Sahib to the Akal Takht on a flower-decked golden palanquin", completed: false }
    ],
    rulesMatrix: {
      photography: {
        allowed: true,
        badge: "Allowed on Parikrama Only",
        color: "amber",
        details: "Photography allowed on the marble Parikrama walkway. Strictly prohibited on the bridge (Guru Ka Pul) and inside the Sanctum."
      },
      dressCode: {
        allowed: true,
        badge: "Head Cover Mandate",
        color: "amber",
        details: "Head must remain covered at all times (scarves/rumals provided free). Modest full clothing required. No tobacco, alcohol, or leather products permitted."
      },
      wheelchair: {
        allowed: true,
        badge: "Dedicated Seva Wheelchairs",
        color: "green",
        details: "Free stainless steel wheelchairs and dedicated volunteer (Sewadar) assistance available at all four gateway entrances."
      },
      footwear: {
        allowed: true,
        badge: "Massive Free Joda Ghar",
        color: "green",
        details: "Gigantic volunteer-run shoe deposit stations with digital numbering. Feet must be washed in the cleansing water channels before entering."
      },
      mobileLockers: {
        allowed: true,
        badge: "Free Baggage Cloakroom",
        color: "green",
        details: "Safe 24/7 luggage counters (Gathri Ghar) located near the main clock tower plaza."
      },
      bookingPass: {
        officialUrl: "https://sgpc.net/",
        authority: "Shiromani Gurdwara Parbandhak Committee (SGPC)",
        passTypes: ["Universal Free Entry (No tickets ever required)", "Guru Ka Langar (24/7 Free Dining)", "Serai Accommodation Booking"]
      }
    },
    audioLegend: {
      title: "Foundation by Sufi Saint Mian Mir & The Panacea of Amrit Sarovar",
      duration: "4 min 30 sec",
      soundscapeType: "temple_bells_om_drone",
      narrator: "Giani Harpreet Singh (Spiritual Chronicler)",
      paragraphs: [
        "In 1588 CE, Guru Arjan Dev Ji took a historic step that echoed universal human brotherhood: he invited the revered Muslim Sufi saint of Lahore, Hazrat Mian Mir, to lay the foundation stone of Sri Harmandir Sahib.",
        "Unlike traditional Hindu temples built on elevated platforms, the Guru designed Harmandir Sahib at a lower level than the surrounding land, requiring devotees to step downward—symbolizing the shedding of human ego before the divine.",
        "Surrounded by the holy Pool of Nectar (Amrit Sarovar), the temple's 750 kilograms of pure gold foil reflects timeless light, while its 24-hour Langar feeds over 100,000 pilgrims every single day without distinction of religion or caste."
      ]
    },
    architectureHighlights: {
      styleDetails: "Exquisite confluence of Indo-Islamic cusped arches, Rajput jharokhas, and Sikh gilded dome architecture.",
      features: [
        "Double-storey marble sanctum topped with a gilded fluted dome (Chattri)",
        "Inlaid Pietra Dura floral marble work with semi-precious stones (Jaratkari)",
        "Bridge of the Guru (Guru Ka Pul) spanning across the Amrit Sarovar",
        "Darshani Deorhi entrance gate with historic silver and ivory doors"
      ],
      structuralBreakdown: {
        sarovar: "Large sacred water body fed by the Ravi River canals, lined with white marble walkways.",
        sanctum: "Two-storied gold-plated structure housing the continuous recitation of the holy Guru Granth Sahib.",
        akalTakht: "The Throne of the Timeless One facing the temple, representing the balance of temporal (Miri) and spiritual (Piri) power."
      }
    }
  },
  {
    id: "brihadisvara-temple",
    name: "Brihadisvara Temple (Big Temple)",
    sanskritName: "बृहदीश्वर मन्दिरम् (तंजावूर)",
    deity: "Lord Shiva (Peruvudaiyar / Rajarajeshwaram)",
    city: "Thanjavur",
    state: "Tamil Nadu",
    region: "South",
    style: "Chola Dravidian (UNESCO)",
    circuits: ["Great Living Chola Temples", "Tamil Nadu Heritage Trail"],
    period: "Completed 1010 CE (1000+ Years Old)",
    dynasty: "Chola Empire (Emperor Rajaraja Chola I)",
    tagline: "The Pinnacle of Chola Architectural Genius & Granite Wonder",
    description: "Built entirely of 130,000 tons of interlocking granite without binding mortar, featuring a 66-meter high Vimana crowned by an 80-ton single monolithic granite Kumbam, casting no shadow at noon on the equinox.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    reviewsCount: "115k+",
    rushLevel: "Low",
    rushPercentage: 42,
    rushHeatmap24h: [
      { hour: "06:00", rush: 30, status: "Low", note: "Gates open; cool morning on granite floors" },
      { hour: "07:00", rush: 45, status: "Low", note: "Devotees perform pradakshina" },
      { hour: "08:00", rush: 55, status: "Moderate", note: "Morning Abhishek rituals" },
      { hour: "09:00", rush: 60, status: "Moderate", note: "Heritage architecture enthusiasts arrive" },
      { hour: "10:00", rush: 65, status: "Moderate", note: "Courtyard exploration" },
      { hour: "11:00", rush: 50, status: "Moderate", note: "Midday heat rising on open stone" },
      { hour: "12:00", rush: 30, status: "Low", note: "Temple sanctum closes for afternoon" },
      { hour: "13:00", rush: 10, status: "Low", note: "Sanctum closed (12:30 PM - 4:00 PM)" },
      { hour: "14:00", rush: 10, status: "Low", note: "Sanctum closed" },
      { hour: "15:00", rush: 25, status: "Low", note: "Visitors assemble in shaded cloister corridors" },
      { hour: "16:00", rush: 60, status: "Moderate", note: "Gates reopen; pleasant breeze" },
      { hour: "17:00", rush: 75, status: "High", note: "Sunset turns granite golden red" },
      { hour: "18:00", rush: 85, status: "High", note: "Evening Deeparadhana" },
      { hour: "19:00", rush: 80, status: "High", note: "Evening illuminated view" },
      { hour: "20:00", rush: 40, status: "Low", note: "Closing rituals" }
    ],
    bestDarshanSlots: [
      { time: "06:30 AM – 08:00 AM", label: "Morning Solitude (Walk barefoot on cool ancient granite slabs)" },
      { time: "05:00 PM – 06:45 PM", label: "Golden Dusk (Vimana catches evening sunlight against blue skies)" }
    ],
    aartiSchedule: [
      { name: "Ushakkala Pooja (Dawn)", time: "06:00 AM", significance: "Morning invocation with Tamil Thevaram hymns and sacred conch blowing", completed: true },
      { name: "Kalasandhi Pooja", time: "09:00 AM", significance: "Abhishekam of the colossal 3.7-meter Shiva Lingam", completed: true },
      { name: "Uchikala Pooja (Noon)", time: "12:00 PM", significance: "Midday prayer before closing the sanctum gates", completed: false },
      { name: "Sayarakshai (Sunset Pooja)", time: "06:00 PM", significance: "Grand evening camphor Aarti echoing inside the monolithic sanctum", completed: false },
      { name: "Arthajama Pooja (Night)", time: "08:30 PM", significance: "Final peaceful milk offering before night silence", completed: false }
    ],
    rulesMatrix: {
      photography: {
        allowed: true,
        badge: "Allowed in Courtyard",
        color: "green",
        details: "Photography permitted throughout the sprawling 240-meter granite courtyard. Prohibited inside the Garbhagriha."
      },
      dressCode: {
        allowed: true,
        badge: "Traditional / Modest",
        color: "amber",
        details: "Traditional Indian attire recommended. Shoulders and knees must be covered. Footwear must be removed before courtyard."
      },
      wheelchair: {
        allowed: true,
        badge: "Courtyard Ramps",
        color: "green",
        details: "ASI ramps available for courtyard access. ASI provides wheelchair assistance at the Rajarajan Gopuram entrance."
      },
      footwear: {
        allowed: true,
        badge: "Free Footwear Stand",
        color: "blue",
        details: "Regulated shoe collection counter located just outside the Keralantakan Gopuram."
      },
      mobileLockers: {
        allowed: true,
        badge: "ASI Cloakroom",
        color: "emerald",
        details: "Luggage deposit counter managed by the Archaeological Survey of India."
      },
      bookingPass: {
        officialUrl: "https://thanjavur.nic.in/tourism/brihadeeswarar-temple/",
        authority: "HR&CE Tamil Nadu & Archaeological Survey of India",
        passTypes: ["Free General Darshan", "Special Archana Ticket (₹50)", "ASI Heritage Guide Tour"]
      }
    },
    audioLegend: {
      title: "The 80-Ton Monolith & The Inclined Ramp of Sarapallam",
      duration: "4 min 05 sec",
      soundscapeType: "temple_bells_om_drone",
      narrator: "Prof. S. Swaminathan (Dravidian Epigraphist)",
      paragraphs: [
        "In the flat alluvial plains of the Kaveri delta, where no granite quarry exists for 60 kilometers, Emperor Rajaraja Chola commanded the construction of a monument that would touch the heavens. Over 130,000 tons of granite were ferried on barges across the Kaveri River.",
        "How was the colossal 81.3-ton single granite capstone (Kumbam) lifted to the top of the 66-meter Vimana without modern cranes? Chola engineers constructed a massive earthen ramp starting from the village of Sarapallam, 6 kilometers away, rolling the monolith up the incline using thousands of elephants and log rollers.",
        "The temple also houses an astonishing secret: between the inner and outer walls of the Vimana runs a secret ambulatory passageway adorned with original 1000-year-old Chola frescoes depicting Lord Shiva as Tripurantaka, rediscovered only in the 1930s."
      ]
    },
    architectureHighlights: {
      styleDetails: "Classic Chola Dravidian architecture where the Vimana (Sanctum tower) dominates the skyline, unlike later Vijayanagara temples where Gopurams became taller.",
      features: [
        "Vimana rises 13 pyramidal storeys (66 meters tall) with mathematical precision",
        "Single 81-ton monolithic granite Kumbam (Apex dome)",
        "Massive monolithic Nandi Bull statue (2 meters high, 6 meters long) carved from a single boulder",
        "Over 108 sculptured postures of Natya Shastra dance (Karanas) carved along the upper tier"
      ],
      structuralBreakdown: {
        vimana: "Dravidian pyramid tower (Dakshina Meru) engineered entirely with interlocking stone joints.",
        ardhamandapa: "Intermediate hall connected with the sanctum with massive Dvarapalas (guardian deities).",
        prakara: "Colossal fortified double enclosure wall lined with 252 Shiva lingams."
      }
    }
  },
  {
    id: "somnath-temple",
    name: "Somnath Jyotirlinga Temple",
    sanskritName: "श्री सोमनाथ ज्योतिर्लिंग मन्दिरम्",
    deity: "Lord Shiva (Somnath - Lord of the Moon)",
    city: "Prabhas Patan, Veraval",
    state: "Gujarat",
    region: "West",
    style: "Maru-Gurjara (Chaulukya style)",
    circuits: ["12 Jyotirlingas", "Gujarat Temple Trail", "Char Dham (Extended)"],
    period: "Reconstructed 1951 CE (Original antiquity pre-historic Vedic)",
    dynasty: "Sardar Vallabhbhai Patel modern revival; Solanki medieval style",
    tagline: "The First of the Twelve Jyotirlingas Standing Proud on the Arabian Coast",
    description: "Revered as the 'Shrine of the Moon God', Somnath has been destroyed and resurrected across centuries as a symbol of eternal civilizational endurance, featuring the famous Baan Stambh (Arrow Pillar).",
    image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    reviewsCount: "180k+",
    rushLevel: "Moderate",
    rushPercentage: 62,
    rushHeatmap24h: [
      { hour: "06:00", rush: 40, status: "Low", note: "Morning gates open with ocean breeze" },
      { hour: "07:00", rush: 70, status: "Moderate", note: "Mangala Aarti queue" },
      { hour: "08:00", rush: 75, status: "High", note: "Morning Darshan rush" },
      { hour: "09:00", rush: 80, status: "High", note: "Pilgrim groups arrive" },
      { hour: "10:00", rush: 75, status: "High", note: "Steady queue" },
      { hour: "11:00", rush: 65, status: "Moderate", note: "Midday queue" },
      { hour: "12:00", rush: 85, status: "High", note: "Noon Bhog Aarti" },
      { hour: "13:00", rush: 40, status: "Low", note: "Afternoon lull" },
      { hour: "14:00", rush: 35, status: "Low", note: "Quiet visiting window" },
      { hour: "15:00", rush: 50, status: "Moderate", note: "Afternoon queues form" },
      { hour: "16:00", rush: 65, status: "Moderate", note: "Sea promenade visits" },
      { hour: "17:00", rush: 80, status: "High", note: "Evening crowds gather" },
      { hour: "18:00", rush: 90, status: "High", note: "Evening Aarti preparations" },
      { hour: "19:00", rush: 98, status: "Peak", note: "Grand Sandhya Aarti & Sound & Light Show" },
      { hour: "20:00", rush: 90, status: "High", note: "Sound and Light Show ('Jay Somnath')" },
      { hour: "21:00", rush: 60, status: "Moderate", note: "Shayan Aarti" },
      { hour: "22:00", rush: 20, status: "Low", note: "Temple gates close" }
    ],
    bestDarshanSlots: [
      { time: "06:00 AM – 07:15 AM", label: "Morning Ocean Darshan (Watch the sunrise over the Arabian Sea)" },
      { time: "02:00 PM – 03:30 PM", label: "Afternoon Lull (Minimal queue time, unobstructed sanctum view)" }
    ],
    aartiSchedule: [
      { name: "Pratah Aarti (Dawn)", time: "07:00 AM", significance: "Morning awakening with resonant damru beats and chanting", completed: true },
      { name: "Madhyahn Aarti (Noon)", time: "12:00 PM", significance: "Midday grand offering with traditional conch blowing", completed: false },
      { name: "Sandhya Aarti (Evening)", time: "07:00 PM", significance: "Magnificent evening Aarti accompanied by live temple orchestra and sea waves", completed: false },
      { name: "Sound & Light Show (Jay Somnath)", time: "08:00 PM", significance: "Spectacular 3D projection mapping narrated by Amitabh Bachchan", completed: false }
    ],
    rulesMatrix: {
      photography: {
        allowed: false,
        badge: "Strictly Prohibited",
        color: "red",
        details: "No cameras, mobile phones, or smartwatches permitted inside the high-security temple compound. Free digital lockers provided."
      },
      dressCode: {
        allowed: true,
        badge: "Traditional Dress",
        color: "amber",
        details: "Modest Indian or formal clothing required. Shorts, sleeveless, and western beachwear strictly barred."
      },
      wheelchair: {
        allowed: true,
        badge: "Battery Vehicles & Chairs",
        color: "green",
        details: "Shri Somnath Trust provides complimentary battery carts from parking to sanctum for senior citizens and differently-abled devotees."
      },
      footwear: {
        allowed: true,
        badge: "Free Digital Shoe Counter",
        color: "green",
        details: "Spacious shoe counter with computerized tokens at the main entrance plaza."
      },
      mobileLockers: {
        allowed: true,
        badge: "Free High-Security Lockers",
        color: "green",
        details: "Free multi-counter cloakrooms for all bags, mobile phones, and electronic gadgets."
      },
      bookingPass: {
        officialUrl: "https://somnath.org/",
        authority: "Shree Somnath Trust",
        passTypes: ["Free General Darshan", "VIP Darshan Pass (₹200)", "Someshwar Mahapuja Booking (₹1,100)"]
      }
    },
    audioLegend: {
      title: "The Curse of Daksha Prajapati & The Unbroken Sea-Line of Baan Stambh",
      duration: "4 min 20 sec",
      soundscapeType: "temple_bells_om_drone",
      narrator: "Acharya Someshwar Dave",
      paragraphs: [
        "According to the Skanda Purana, Chandra (the Moon God) was married to the twenty-seven daughters of Daksha Prajapati. However, Chandra showed special affection only to Rohini, neglecting the other twenty-six sisters. Enraged, King Daksha cursed Chandra to lose his divine luster and wither away with tuberculosis.",
        "Chandra descended to Prabhas Kshetra, bathed at the sacred confluence of the Saraswati, Hiran, and Kapila rivers (Triveni Sangam), and performed severe penance worshipping Lord Shiva. Pleased with his devotion, Shiva placed Chandra upon His forehead, restoring his light incrementally—establishing the waxing and waning cycles of the moon.",
        "On the sea-facing wall of Somnath stands the ancient Baan Stambh (Arrow Pillar), bearing an astonishing Sanskrit inscription: from this exact geographical point, traveling directly south along the meridian, there is no piece of land until the South Pole (Antarctica)—a profound cartographic revelation known to ancient Indian rishis centuries before modern GPS."
      ]
    },
    architectureHighlights: {
      styleDetails: "Kailash Mahameru Prasad Maru-Gurjara style crafted from sandstone, engineered to resist salty ocean winds.",
      features: [
        "155-foot high main Shikhara topped with a 10-ton Kalasha and a 27-foot flagpole",
        "Baan Stambh (Arrow Pillar) pointing uninterrupted across the ocean to Antarctica",
        "Sabha Mandap (Assembly Hall) with intricate floral corbelling and celestial dancing figures",
        "Shoreline promenade (Samudra Darshan Path) overlooking crashing Arabian Sea waves"
      ],
      structuralBreakdown: {
        garbhagriha: "Massive square inner sanctum housing the natural Svayambhu Jyotirlinga.",
        nrityamandapa: "Intricately carved dome hall with 8 concentric stone rings celebrating celestial arts.",
        pitha: "Elevated plinth carved with rows of elephants (Gajathara), horses (Ashwathara), and human life (Narathara)."
      }
    }
  },
  {
    id: "jagannath-puri",
    name: "Jagannath Temple (Puri)",
    sanskritName: "श्री जगन्नाथ मन्दिरम् (पुरी)",
    deity: "Lord Jagannath (Krishna), Balabhadra & Subhadra",
    city: "Puri",
    state: "Odisha",
    region: "East",
    style: "Kalinga (Rekha Deula & Jagamohana)",
    circuits: ["Char Dham", "Odisha Coastal Pilgrimage", "Vaishnava 108 Divya Desams"],
    period: "12th Century CE (King Anantavarman Chodaganga)",
    dynasty: "Eastern Ganga Dynasty",
    tagline: "The Sacred Abode of the Lord of the Universe & The World's Greatest Chariot Festival",
    description: "One of the primordial Char Dham pilgrimage sites, famous for its 65-meter towering spire where the flag flutters against the wind direction, the mystical absence of bird flight over the dome, and the miraculous Mahaprasad cooked in 7 earthen pots stacked vertically.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    reviewsCount: "260k+",
    rushLevel: "Peak",
    rushPercentage: 88,
    rushHeatmap24h: [
      { hour: "05:00", rush: 50, status: "Moderate", note: "Dwaraphita (Gate Opening) & Mangala Alati" },
      { hour: "06:00", rush: 75, status: "High", note: "Mailam & Tadapalagi rituals" },
      { hour: "07:00", rush: 85, status: "High", note: "Surya Pooja & Gopala Ballava Bhoga" },
      { hour: "08:00", rush: 90, status: "Peak", note: "Morning Sahana Mela (Free Inner Darshan)" },
      { hour: "09:00", rush: 95, status: "Peak", note: "Crowds gather inside Natamandapa" },
      { hour: "10:00", rush: 90, status: "High", note: "Bhisheka & Rajadhiraja dressing" },
      { hour: "11:00", rush: 85, status: "High", note: "Madhyanna Dhupa preparation" },
      { hour: "12:00", rush: 95, status: "Peak", note: "Mahaprasad arrives at Ananda Bazar" },
      { hour: "13:00", rush: 90, status: "High", note: "Ananda Bazar community dining" },
      { hour: "14:00", rush: 40, status: "Low", note: "Pahuda (Deity Afternoon Rest 2:00 - 4:00 PM)" },
      { hour: "15:00", rush: 35, status: "Low", note: "Sanctum closed" },
      { hour: "16:00", rush: 70, status: "Moderate", note: "Sanctum reopens (Sandhya Dhupa)" },
      { hour: "17:00", rush: 85, status: "High", note: "Chunara servitors climb the 65m dome for Flag Changing" },
      { hour: "18:00", rush: 98, status: "Peak", note: "Spectacular Patitapabana Flag Changing Ceremony (Dhwaja Parivartan)" },
      { hour: "19:00", rush: 90, status: "High", note: "Sandhya Alati" },
      { hour: "20:00", rush: 85, status: "High", note: "Badasinghara Bhoga" },
      { hour: "21:00", rush: 75, status: "Moderate", note: "Badasinghara Alati & Gita Govinda recitation" },
      { hour: "22:00", rush: 40, status: "Low", note: "Ratri Pahuda (Gates lock for the night)" }
    ],
    bestDarshanSlots: [
      { time: "05:30 AM – 07:00 AM", label: "Mangala Alati & Sahana Mela (Closest access to the Ratnavedi)" },
      { time: "05:00 PM – 06:15 PM", label: "Flag Changing Ritual (Watch sevaks climb the spire freehand)" }
    ],
    aartiSchedule: [
      { name: "Mangala Alati (Dawn)", time: "05:30 AM", significance: "First morning darshan with conch blowing and camphor fires", completed: true },
      { name: "Gopala Ballava Bhoga", time: "08:30 AM", significance: "Breakfast offering of sweetened popped rice, ripe bananas, and curd", completed: true },
      { name: "Sakala Dhupa (Morning Feast)", time: "10:00 AM", significance: "Elaborate 16-upachara worship offering traditional Odia pitha cakes", completed: true },
      { name: "Madhyanna Dhupa (Noon Feast)", time: "01:00 PM", significance: "The great 56-bhog offering served to Lord Jagannath and Goddess Vimala", completed: false },
      { name: "Dhwaja Parivartan (Flag Changing)", time: "05:30 PM", significance: "Daring daily climb by the Chunara servitor to change the Patitapabana flag 214 feet high", completed: false },
      { name: "Badasinghara Alati (Night)", time: "10:30 PM", significance: "Deities adorned with floral garlands and silk robes with verses of Jayadeva's Gita Govinda", completed: false }
    ],
    rulesMatrix: {
      photography: {
        allowed: false,
        badge: "Strictly Prohibited",
        color: "red",
        details: "No cameras, smartphones, or recording equipment allowed past the Singhadwara (Lion's Gate)."
      },
      dressCode: {
        allowed: true,
        badge: "Traditional Indian Attire",
        color: "red",
        details: "Traditional clothing strictly enforced. Men: Dhoti/Kurta. Women: Sari or Salwar. Leather goods (belts, wallets) strictly barred."
      },
      wheelchair: {
        allowed: true,
        badge: "Entry Ramp at North Gate",
        color: "amber",
        details: "Wheelchair ramps located at the Hastidwara (Elephant Gate). Inner sanctum stairs require servitor escort."
      },
      footwear: {
        allowed: true,
        badge: "Grand Shoe Cloakrooms",
        color: "green",
        details: "Large regulated shoe stands at Singhadwara and Vyaghradwara (Tiger Gate)."
      },
      mobileLockers: {
        allowed: true,
        badge: "Temple Police Lockers",
        color: "emerald",
        details: "Police-managed digital lockers available right beside the Baisi Pahacha (22 holy steps)."
      },
      bookingPass: {
        officialUrl: "https://jagannath.odisha.gov.in/",
        authority: "Shree Jagannath Temple Administration (SJTA)",
        passTypes: ["Free Dharma Darshan", "Special Paramanik Ticket", "Mahaprasad / Ananda Bazar Access (Open)"]
      }
    },
    audioLegend: {
      title: "The Floating Daru Log of Nilamadhava & The 7-Pot Culinary Wonder",
      duration: "5 min 20 sec",
      soundscapeType: "temple_bells_om_drone",
      narrator: "Dr. Sarat Chandra Mahapatra (Puri Heritage Custodian)",
      paragraphs: [
        "King Indradyumna of Avanti dreamt of Lord Vishnu manifesting as Nilamadhava. He dispatched Brahmin Vidyapati to locate the deity, who discovered Him secretly worshipped in the deep forests of Odisha by tribal king Viswavasu. When the Lord vanished, a divine voice commanded the King to look for a fragrant neem tree log (Daru) floating ashore at the Puri coast.",
        "The celestial architect Vishwakarma appeared as an aged sculptor named Ananta Maharana, agreeing to carve the sacred deities on one condition: no one must open the carving chamber for 21 days. Overcome with anxiety on the 14th day when all hammering sound ceased, Queen Gundicha insisted on opening the doors.",
        "Inside, the sculptor had vanished, leaving behind the sacred unfinished forms with large cosmic round eyes and outstretched arms—signifying that the Divine needs neither hands nor feet to embrace every yearning devotee across the universe."
      ]
    },
    architectureHighlights: {
      styleDetails: "Mature Kalinga architectural style comprising four axial structures: Vimana (Deula), Jagamohana, Natamandapa, and Bhogamandapa.",
      features: [
        "Nilachakra (Blue Wheel) made of 8-metal alloy (Ashtadhatu) crowning the 214-foot Rekha Deula",
        "Patitapabana flag that miraculously flutters opposite to the wind blowing direction",
        "Baisi Pahacha (22 sacred stairs) imbued with deep spiritual significance",
        "Ananda Bazar: The world's largest open-air divine food market"
      ],
      structuralBreakdown: {
        deula: "Curvilinear spire towering 65 meters with corbelled internal stone arches.",
        jagamohana: "Pyramidal assembly hall where thousands of devotees assemble for daily prayers.",
        natamandapa: "Festival dancing hall featuring intricate relief carvings of Krishna-Leela and celestial musicians."
      }
    }
  },
  {
    id: "kailasa-ellora",
    name: "Kailasa Temple (Cave 16, Ellora)",
    sanskritName: "कैलास मन्दिरम् (एलोरा गुहा १६)",
    deity: "Lord Shiva (Kailasanatha)",
    city: "Aurangabad / Chhatrapati Sambhaji Nagar",
    state: "Maharashtra",
    region: "West",
    style: "Rashtrakuta Rock-Cut Monolith (Dravidian inspired)",
    circuits: ["UNESCO Maharashtra Circuit", "Ajanta-Ellora Heritage Trail"],
    period: "8th Century CE (c. 756–773 CE)",
    dynasty: "Rashtrakuta Empire (King Krishna I)",
    tagline: "The World's Greatest Monolithic Megalith Carved Top-to-Bottom from a Single Mountain",
    description: "An engineering impossibility carved out of 200,000 tons of solid basalt rock from the top down using only hammers and chisels, recreating the mythical Himalayan Mount Kailash in breathtaking architectural detail.",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    rating: 5.0,
    reviewsCount: "88k+",
    rushLevel: "Low",
    rushPercentage: 28,
    rushHeatmap24h: [
      { hour: "06:00", rush: 15, status: "Low", note: "Cave opening; peaceful morning light" },
      { hour: "07:00", rush: 25, status: "Low", note: "Photographers capture top-down perspective" },
      { hour: "08:00", rush: 40, status: "Low", note: "Pleasant temperatures" },
      { hour: "09:00", rush: 55, status: "Moderate", note: "Tour groups arrive" },
      { hour: "10:00", rush: 65, status: "Moderate", note: "Cave 16 courtyard fills" },
      { hour: "11:00", rush: 60, status: "Moderate", note: "Upper galleries exploration" },
      { hour: "12:00", rush: 50, status: "Moderate", note: "Cool interiors inside monolithic stone halls" },
      { hour: "13:00", rush: 45, status: "Low", note: "Museum & cafe lunch break" },
      { hour: "14:00", rush: 55, status: "Moderate", note: "Cave 16 to 34 exploration" },
      { hour: "15:00", rush: 65, status: "Moderate", note: "Golden afternoon light on carvings" },
      { hour: "16:00", rush: 70, status: "High", note: "Dramatic side lighting on Ravana shaking Kailash" },
      { hour: "17:00", rush: 50, status: "Moderate", note: "Sunset reflection on basalt cliffs" },
      { hour: "18:00", rush: 10, status: "Low", note: "Monument closes at 06:00 PM" }
    ],
    bestDarshanSlots: [
      { time: "06:30 AM – 08:30 AM", label: "Morning Solitude (Experience the silent echoing grandeur inside the basalt canyon)" },
      { time: "03:30 PM – 05:30 PM", label: "Golden Hour (Sunlight highlights the monumental Ravana carving and life-size elephants)" }
    ],
    aartiSchedule: [
      { name: "Archaeological Monument Opening", time: "06:00 AM", significance: "Gates open for international heritage seekers and art historians", completed: true },
      { name: "Vedic Echo Acoustics Demonstration", time: "11:00 AM", significance: "Guides demonstrate the flawless stone acoustic harmonics inside the main mandapa", completed: false },
      { name: "Monument Sunset Closure", time: "06:00 PM", significance: "Final security sweep as twilight settles over the Charanandri hills", completed: false }
    ],
    rulesMatrix: {
      photography: {
        allowed: true,
        badge: "Allowed Everywhere",
        color: "green",
        details: "Still photography and videography permitted across all galleries. Tripods require prior ASI authorization."
      },
      dressCode: {
        allowed: true,
        badge: "Modest Casuals & Walking Shoes",
        color: "blue",
        details: "Comfortable trekking or walking shoes mandatory due to uneven stone steps and multi-level cliff stairs."
      },
      wheelchair: {
        allowed: true,
        badge: "Ground Level Courtyard Access",
        color: "green",
        details: "ASI ramps provide wheelchair access to the base courtyard and lower plinth of Cave 16."
      },
      footwear: {
        allowed: true,
        badge: "Footwear Permitted in Courtyard",
        color: "blue",
        details: "Shoes permitted in the open courtyard and galleries. Removed only upon entering the upper sanctum."
      },
      mobileLockers: {
        allowed: true,
        badge: "ASI Tourist Counter",
        color: "emerald",
        details: "Cloakroom counters available at the Ellora Caves entrance complex."
      },
      bookingPass: {
        officialUrl: "https://asi.payumoney.com/quick/ellora",
        authority: "Archaeological Survey of India (ASI) & UNESCO World Heritage",
        passTypes: ["Indian Citizen Ticket (₹40)", "Foreign Tourist Ticket (₹600)", "Golf Cart Shuttle (₹50)"]
      }
    },
    audioLegend: {
      title: "The Queen's Fast & The Miracle of Top-Down Sculpting",
      duration: "4 min 50 sec",
      soundscapeType: "temple_bells_om_drone",
      narrator: "Dr. Arvind Jamkhedkar (Eminent Archaeologist)",
      paragraphs: [
        "According to the medieval Katha-Kalpa-Taru, the Rashtrakuta Queen Manikavati took a solemn vow to fast until she could see the golden finial (Shikhara) of a glorious Shiva temple built for her ailing husband King Krishna I.",
        "Knowing that traditional bottom-up temple construction would take decades—leaving the Queen to perish—the visionary chief master sculptor Kokasa proposed a radical architectural paradigm: they would carve the entire temple starting from the very top of the volcanic mountain ridge downward.",
        "Within a few days, the crowning Shikhara emerged flawlessly from the mountain crest, allowing the Queen to sight the temple finial and break her fast. Over the next 100 years, three generations of sculptors carved away 200,000 tons of basalt rock to reveal two-storey courtyards, free-standing victory pillars (Dhwajastambhas), and life-sized stone elephants holding the mountain aloft."
      ]
    },
    architectureHighlights: {
      styleDetails: "Monolithic Rock-Cut architecture exhibiting advanced Rashtrakuta mastery of Dravidian spatial proportions.",
      features: [
        "Carved completely from top to bottom from a single 100-foot vertical basalt cliff",
        "Life-sized monolithic Elephants and 50-foot monolithic Dhvajastambha pillars standing in open air",
        "Monumental bas-relief panel of 'Ravananugraha' showing Ravana shaking Mount Kailash beneath Shiva's toe",
        "Two-story side cloisters with 42 monumental narrative panels of Mahabharata and Ramayana"
      ],
      structuralBreakdown: {
        monolith: "Single piece of living basalt mountain with zero mortar, joints, or external stone blocks.",
        vimana: "3-tiered Dravidian tower mimicking the snow-peaks of Mount Kailash.",
        mandapam: "Hypostyle central hall supported by 16 massive square stone columns."
      }
    }
  },
  {
    id: "kashi-vishwanath",
    name: "Kashi Vishwanath Temple",
    sanskritName: "श्री काशी विश्वनाथ ज्योतिर्लिंग मन्दिरम्",
    deity: "Lord Shiva (Vishwanath - Lord of the Cosmos)",
    city: "Varanasi",
    state: "Uttar Pradesh",
    region: "North",
    style: "Nagara (Corridor Expansion Modern Harmony)",
    circuits: ["12 Jyotirlingas", "Pancha Tirtha of Kashi", "Sapta Puri"],
    period: "Antiquity timeless; Reconstructed 1780 CE by Maharani Ahilyabai Holkar",
    dynasty: "Holkar Maratha Dynasty & Varanasi Trust",
    tagline: "The Cosmic Luminous Pillar of Light & Spiritual Capital of India",
    description: "Located on the sacred western bank of the Ganges in the world's oldest living city, where Lord Shiva is believed to whisper the Moksha Taraka Mantra into the ears of all departing souls, connected directly to the river via the Grand Vishwanath Dham Corridor.",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    reviewsCount: "310k+",
    rushLevel: "Peak",
    rushPercentage: 94,
    rushHeatmap24h: [
      { hour: "02:30", rush: 60, status: "Moderate", note: "Mangala Aarti queue forms at Ganga gate" },
      { hour: "03:00", rush: 85, status: "High", note: "Mangala Aarti entrance" },
      { hour: "04:00", rush: 95, status: "Peak", note: "Mangala Aarti live chanting" },
      { hour: "05:00", rush: 90, status: "High", note: "Dawn darshan & holy Ganges bathers" },
      { hour: "06:00", rush: 85, status: "High", note: "Continuous queue along corridor" },
      { hour: "07:00", rush: 90, status: "High", note: "Morning peak" },
      { hour: "08:00", rush: 95, status: "Peak", note: "Corridor queue reaches Ghats" },
      { hour: "09:00", rush: 90, status: "High", note: "Steady queue movement" },
      { hour: "10:00", rush: 85, status: "High", note: "Midday Darshan" },
      { hour: "11:00", rush: 90, status: "High", note: "Bhog Aarti preparations" },
      { hour: "12:00", rush: 95, status: "Peak", note: "Bhog Aarti with classical shehnai" },
      { hour: "13:00", rush: 70, status: "Moderate", note: "Post-Bhog darshan" },
      { hour: "14:00", rush: 60, status: "Moderate", note: "Afternoon lull" },
      { hour: "15:00", rush: 70, status: "Moderate", note: "Corridor breeze from river" },
      { hour: "16:00", rush: 80, status: "High", note: "Evening queue gathers" },
      { hour: "17:00", rush: 90, status: "High", note: "Pilgrims assemble for Saptarshi Aarti" },
      { hour: "18:00", rush: 98, status: "Peak", note: "Grand Saptarshi Aarti (7 Vedic Priests)" },
      { hour: "19:00", rush: 98, status: "Peak", note: "Ganga Aarti synchronization at Dashashwamedh" },
      { hour: "20:00", rush: 90, status: "High", note: "Night Darshan queue" },
      { hour: "21:00", rush: 85, status: "High", note: "Ratri Shringar Aarti" },
      { hour: "22:00", rush: 70, status: "Moderate", note: "Shayan Aarti & temple portals close" }
    ],
    bestDarshanSlots: [
      { time: "03:00 AM – 04:30 AM", label: "Mangala Aarti (The most spiritually charged atmosphere in Kashi)" },
      { time: "02:00 PM – 03:30 PM", label: "Afternoon Corridor Slot (Shortest waiting time inside the complex)" }
    ],
    aartiSchedule: [
      { name: "Mangala Aarti (Brahma Muhurta)", time: "03:00 AM", significance: "Sacred awakening of the Jyotirlinga with Panchamrit abhishekam", completed: true },
      { name: "Bhog Aarti (Midday)", time: "11:15 AM", significance: "Grand offering of satvik culinary dishes and royal sweets", completed: true },
      { name: "Saptarshi Aarti (Evening)", time: "07:00 PM", significance: "Solemn Vedic ritual performed simultaneously by 7 priests representing the 7 celestial Rishis", completed: false },
      { name: "Ratri Shringar Aarti", time: "09:00 PM", significance: "Deity decorated with silver crown and fragrant flowers", completed: false },
      { name: "Shayan Aarti (Night)", time: "10:30 PM", significance: "Final lullaby chanting before the temple portals close for the night", completed: false }
    ],
    rulesMatrix: {
      photography: {
        allowed: false,
        badge: "Strictly Prohibited in Inner Complex",
        color: "red",
        details: "Mobile phones and cameras not permitted inside the inner temple courtyard. Free lockers available in corridor."
      },
      dressCode: {
        allowed: true,
        badge: "Traditional Dress for Sparsh Darshan",
        color: "amber",
        details: "Sparsh Darshan (touching the Lingam) requires mandatory Dhoti-Kurta (Men) and Sari (Women). Western casuals permitted only for Jaldhara/Sight Darshan."
      },
      wheelchair: {
        allowed: true,
        badge: "Full Barrier-Free Corridor",
        color: "green",
        details: "The new 5-lakh sq. ft. corridor provides seamless battery carts, escalators, and wheelchair ramps from Manikarnika Ghat directly to the sanctum."
      },
      footwear: {
        allowed: true,
        badge: "Smart Cloakrooms",
        color: "green",
        details: "Multi-counter high-capacity automated shoe deposits at both Godowlia Gate and Ganga Ghat Gate."
      },
      mobileLockers: {
        allowed: true,
        badge: "Free Digital Token Lockers",
        color: "green",
        details: "Modern air-conditioned locker halls operating 24/7 across the corridor."
      },
      bookingPass: {
        officialUrl: "https://shrikashivishwanath.org/",
        authority: "Shri Kashi Vishwanath Special Area Development Board",
        passTypes: ["Free General Line", "Sugam Darshan VIP Pass (₹300)", "Mangala Aarti Pass (₹500)", "Rudrabhishek Booking"]
      }
    },
    audioLegend: {
      title: "The Pillar of Infinite Light (Jyotirlinga) & Maharani Ahilyabai's Vision",
      duration: "4 min 35 sec",
      soundscapeType: "temple_bells_om_drone",
      narrator: "Mahant Dr. Kameshwar Upadhyaya",
      paragraphs: [
        "In the beginning of cosmic creation, Brahma and Vishnu debated supreme supremacy. Suddenly, a boundless, blazing column of light pierced through all fourteen dimensions. Brahma flew upward as a celestial swan to find its zenith, while Vishnu plunged downward as Varaha to discover its roots.",
        "Thousands of cosmic years elapsed without finding its ends. Vishnu acknowledged the infinite mystery of Shiva, while Brahma falsely claimed to have found the summit, producing the Ketaki flower as false witness. Shiva emerged from the pillar of light, blessing Vishnu for his truthfulness and declaring Kashi as His eternal Anandavana where cosmic liberation (Moksha) is guaranteed.",
        "In 1780 CE, when the holy site lay desecrated, the saintly Maratha queen Maharani Ahilyabai Holkar of Indore had a divine vision in her meditation and rebuilt the present golden-spire sanctum, ensuring that the eternal light of Vishwanath would illuminate humanity uninterrupted."
      ]
    },
    architectureHighlights: {
      styleDetails: "Refined Nagara style with gold-plated spires, now surrounded by a monumental 50,000 sq meter stone pilgrim corridor.",
      features: [
        "Two massive Golden Spires (Shikharas) gilded with 1-ton pure gold gifted by Maharaja Ranjit Singh in 1835",
        "Direct ceremonial vista and walkway connecting the sanctum to the sacred River Ganga at Lalita Ghat",
        "Gyanvapi sacred well where the primordial Shiva Lingam was safeguarded",
        "Mandir Chowk surrounded by heritage sandstone colonnades and viewing pavilions"
      ],
      structuralBreakdown: {
        garbhagriha: "Square sanctum housing the smooth black stone Svayambhu Vishweshwara Jyotirlinga on a silver plinth.",
        shikhara: "Stepped Nagara spire crowned with golden Kalasha and the sacred Trishula (Trident).",
        corridor: "Granite and Chunar sandstone colonnaded pilgrim boulevard designed for seamless crowd movement."
      }
    }
  },
  {
    id: "ramanathaswamy-temple",
    name: "Ramanathaswamy Temple (Rameswaram)",
    sanskritName: "श्री रामनाथस्वामी मन्दिरम् (रामेश्वरम्)",
    deity: "Lord Shiva (Ramanatha - Worshipped by Rama)",
    city: "Rameswaram Island",
    state: "Tamil Nadu",
    region: "South",
    style: "Dravidian (Monumental Corridor Masterpiece)",
    circuits: ["Char Dham", "12 Jyotirlingas", "Ramayana Trail"],
    period: "12th–16th Century CE (Expanded by Setupati Rulers of Ramnad)",
    dynasty: "Pandyan & Setupati Dynasties",
    tagline: "The Longest Temple Corridor in the World & The 22 Sacred Theerthams",
    description: "Located on the sacred island where Lord Rama built the Rama Setu to Lanka, renowned across the world for its 1,212-meter third corridor supported by 1,212 carved pillars, and the spiritual ritual of bathing in 22 sacred wells.",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    reviewsCount: "140k+",
    rushLevel: "High",
    rushPercentage: 74,
    rushHeatmap24h: [
      { hour: "04:00", rush: 60, status: "Moderate", note: "Spattika Linga Darshan line forms" },
      { hour: "05:00", rush: 85, status: "High", note: "Spattika Linga Darshan (05:00 - 06:00 AM)" },
      { hour: "06:00", rush: 90, status: "High", note: "Sea bath at Agni Theertham starts" },
      { hour: "07:00", rush: 95, status: "Peak", note: "22 Theertham bathing queue peak" },
      { hour: "08:00", rush: 90, status: "High", note: "Morning darshan queue" },
      { hour: "09:00", rush: 85, status: "High", note: "Corridor exploration" },
      { hour: "10:00", rush: 80, status: "High", note: "Steady darshan stream" },
      { hour: "11:00", rush: 70, status: "Moderate", note: "Midday queue" },
      { hour: "12:00", rush: 75, status: "Moderate", note: "Midday Pooja" },
      { hour: "13:00", rush: 30, status: "Low", note: "Sanctum closed (01:00 PM - 03:00 PM)" },
      { hour: "14:00", rush: 25, status: "Low", note: "Corridor resting" },
      { hour: "15:00", rush: 60, status: "Moderate", note: "Sanctum reopens (03:00 PM)" },
      { hour: "16:00", rush: 75, status: "High", note: "Afternoon Theertham batches" },
      { hour: "17:00", rush: 85, status: "High", note: "Evening darshan rush" },
      { hour: "18:00", rush: 95, status: "Peak", note: "Sayarakshai Pooja" },
      { hour: "19:00", rush: 90, status: "High", note: "Evening corridor lighting" },
      { hour: "20:00", rush: 80, status: "High", note: "Arthajama Pooja" },
      { hour: "21:00", rush: 40, status: "Low", note: "Temple gates close" }
    ],
    bestDarshanSlots: [
      { time: "05:00 AM – 06:00 AM", label: "Spattika Linga Darshan (Sacred crystal lingam darshan in the dawn quiet)" },
      { time: "03:00 PM – 04:30 PM", label: "Post-rest Afternoon Darshan (Ideal after completing the 22 Theertham baths)" }
    ],
    aartiSchedule: [
      { name: "Spattika Linga Deeparadhana", time: "05:00 AM", significance: "Sacred darshan of the transparent crystal Lingam consecrated by Adi Shankara", completed: true },
      { name: "Thiruvananthal Pooja", time: "05:30 AM", significance: "Morning awakening ceremony with nadaswaram hymns", completed: true },
      { name: "Kalasandhi Pooja", time: "07:00 AM", significance: "Morning main worship following the completion of holy water baths", completed: true },
      { name: "Uchikala Pooja (Noon)", time: "12:00 PM", significance: "Midday abhishekam and prasadam offering", completed: false },
      { name: "Sayarakshai (Sunset)", time: "06:00 PM", significance: "Evening grand deeparadhana illuminating the monumental corridors", completed: false },
      { name: "Palliyarai Pooja (Night)", time: "08:45 PM", significance: "Night procession of Lord Shiva to the sacred chamber of Parvathavardhini", completed: false }
    ],
    rulesMatrix: {
      photography: {
        allowed: false,
        badge: "Strictly Prohibited",
        color: "red",
        details: "Cameras and mobile phones are banned inside the temple corridors and sanctum. Safe lockers provided at the East Tower."
      },
      dressCode: {
        allowed: true,
        badge: "Strict Traditional Mandate",
        color: "red",
        details: "Men: Dhoti with shirt removed or Angavastram. Women: Sari or Salwar Kameez. Wet clothes from the 22 theertham bath must be changed before entering the sanctum."
      },
      wheelchair: {
        allowed: true,
        badge: "Wheelchairs for Corridors",
        color: "green",
        details: "Wheelchairs and ramps available at the West and East Gopurams for elderly pilgrims traversing the long corridors."
      },
      footwear: {
        allowed: true,
        badge: "East & West Cloakrooms",
        color: "blue",
        details: "Free organized shoe stands near Agni Theertham entrance and the West Car Street."
      },
      mobileLockers: {
        allowed: true,
        badge: "Electronic Smart Lockers",
        color: "emerald",
        details: "Secure bag and mobile storage counters available outside the main Rajagopuram."
      },
      bookingPass: {
        officialUrl: "https://rameswaramtemple.tnhrce.in/",
        authority: "HR&CE Dept., Government of Tamil Nadu",
        passTypes: ["Free General Darshan", "22 Theertham Bathing Pass (₹25)", "Special Quick Darshan (₹100)", "Spattika Linga VIP (₹200)"]
      }
    },
    audioLegend: {
      title: "The Ramalingam of Sita & The Hanumalingam from Mount Kailash",
      duration: "4 min 40 sec",
      soundscapeType: "temple_bells_om_drone",
      narrator: "Sri K. Sundaram (Vedic Sthapathi)",
      paragraphs: [
        "After vanquishing Ravana in Lanka, Lord Rama returned to the shores of Rameswaram. To absolve the sin of slaying Ravana (who was a learned Vedic scholar and devotee of Shiva), the great sages advised Rama to consecrate a Shiva Lingam at this exact coastal meridian.",
        "Rama dispatched Hanuman to fly to Mount Kailash and bring a divine Lingam from Lord Shiva Himself. As the auspicious astrological muhurtam approached and Hanuman had not yet returned, Devi Sita lovingly crafted a sacred Lingam from the ocean sands with her own hands—the revered Ramalingam.",
        "When Hanuman arrived with two lingams from Kailash and saw the sanctum already established, he was inconsolable. To honor his boundless devotion, Lord Rama decreed that Hanuman's lingam (Vishwalingam) must always be worshipped first by every pilgrim before touching the Ramalingam—a sacred tradition upheld to this very day."
      ]
    },
    architectureHighlights: {
      styleDetails: "Magnificent Nayaka-Dravidian architecture renowned for the world's most extensive continuous covered stone cloister.",
      features: [
        "The Third Corridor measures 1,212 meters in perimeter supported by 1,212 monolithic carved pillars",
        "22 Holy Theerthams (Sacred natural wells) inside the temple, each with distinct mineral temperatures and taste",
        "Towering 126-foot high East Rajagopuram rising nine tiers above the sea",
        "Painted ceiling depicting cosmic chakras and royal patrons using natural vegetable dyes"
      ],
      structuralBreakdown: {
        corridor: "Hyper-perspective hypostyle colonnade engineered with flawless optical vanishing lines.",
        garbhagriha: "Granite sanctum housing both the sand-sculpted Ramalingam and Hanuman's Vishwalingam.",
        theerthams: "22 sacred freshwater subterranean wells distributed geometrically across the temple courtyards."
      }
    }
  }
];
