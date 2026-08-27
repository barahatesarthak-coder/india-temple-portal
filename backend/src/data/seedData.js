export const SEED_REGIONS = [
  { id: 'north', name: 'North India', states: ['Uttarakhand', 'Uttar Pradesh', 'Jammu & Kashmir', 'Punjab', 'Himachal Pradesh', 'Delhi', 'Haryana', 'Rajasthan'] },
  { id: 'south', name: 'South India', states: ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh', 'Telangana'] },
  { id: 'east', name: 'East India', states: ['Odisha', 'West Bengal', 'Bihar', 'Jharkhand'] },
  { id: 'west', name: 'West India', states: ['Gujarat', 'Maharashtra', 'Goa'] },
  { id: 'central', name: 'Central India', states: ['Madhya Pradesh', 'Chhattisgarh'] },
  { id: 'northeast', name: 'North-East India', states: ['Assam', 'Meghalaya', 'Tripura', 'Arunachal Pradesh', 'Manipur', 'Mizoram', 'Nagaland', 'Sikkim'] }
];

export const SEED_CATEGORIES = [
  { id: 'jyotirlinga', name: '12 Jyotirlinga Shrines', description: 'The twelve sacred shrines where Lord Shiva is worshipped as a radiant pillar of light.' },
  { id: 'char-dham', name: 'Maha Char Dham', description: 'Four holiest pilgrimage sites defined by Adi Shankaracharya marking the four corners of India.' },
  { id: 'chota-char-dham', name: 'Chota Char Dham', description: 'Himalayan pilgrimage circuit in Uttarakhand consisting of Yamunotri, Gangotri, Kedarnath, and Badrinath.' },
  { id: 'shakti-peetha', name: '51 Shakti Peethas', description: 'Sacred shrines of divine feminine energy where body parts of Goddess Sati fell.' },
  { id: 'unesco-heritage', name: 'UNESCO World Heritage Sites', description: 'Recognized globally for exceptional architectural mastery and historical significance.' },
  { id: 'dravidian', name: 'Dravidian Architecture', description: 'Characterized by towering pyramidical Gopurams, pillared mandapas, and vast temple tanks.' },
  { id: 'nagara', name: 'Nagara Architecture', description: 'Characterized by beehive-shaped curvilinear spires (Shikhara) typical in Northern and Central India.' },
  { id: 'vesara', name: 'Vesara & Hoysala Architecture', description: 'Hybrid style with star-shaped ground plans and intricate soapstone carvings.' }
];

export const SEED_TEMPLES = [
  {
    id: 'kashi-vishwanath',
    slug: 'kashi-vishwanath-temple-varanasi',
    name: 'Kashi Vishwanath Temple',
    hindiName: 'श्री काशी विश्वनाथ मंदिर',
    deity: 'Lord Shiva (Vishwanatha / Vishweshwara)',
    state: 'Uttar Pradesh',
    city: 'Varanasi',
    region: 'North India',
    category: 'jyotirlinga',
    period: 'Ancient (Rebuilt 1780 CE by Maharani Ahilyabai Holkar)',
    architecturalStyle: 'Nagara Style with Gold Plated Spires',
    shortDescription: 'One of the holiest twelve Jyotirlingas, situated on the western bank of the sacred river Ganga in Varanasi.',
    historicalBackground: 'Kashi Vishwanath is one of the most venerated Shiva temples in Hindu civilization. Mentioned in the Skanda Purana, the temple has stood at the spiritual heart of Varanasi for millennia. Destroyed and rebuilt several times throughout history, the current sanctum structure was constructed by the visionary Queen Ahilyabai Holkar of Indore in 1780. In 1835, Maharaja Ranjit Singh of Punjab donated 1 tonne of pure gold to plate its iconic shikharas. The recent Kashi Vishwanath Corridor project (2021) seamlessly connected the temple directly with the sacred Ghats of the Ganga.',
    historicalSignificance: 'Considered the spiritual capital of India, it is believed that a darshan of Vishwanath combined with a dip in the Ganga liberates the soul from the cycle of rebirth (Moksha).',
    religiousSignificance: 'Lord Shiva is revered here as the Lord of the Universe (Vishweshwara). Adi Shankaracharya, Ramakrishna Paramahamsa, Swami Vivekananda, and Goswami Tulsidas have all prayed at this holy shrine.',
    architecture: 'Constructed in classic Nagara style with octagonal layout. Features 15.5-meter high golden spires, intricate stone carvings, the Gyanvapi well, and the expansive marble-paved corridor.',
    darshanTimings: '03:00 AM – 11:00 PM (Daily)',
    poojaSchedule: [
      { name: 'Mangala Aarti', time: '03:00 AM - 04:00 AM', description: 'Dawn awakening ceremony with sacred chants and panchamrit abhishek' },
      { name: 'Bhog Aarti', time: '11:15 AM - 12:20 PM', description: 'Mid-day offering of sacred prasad and chhatra seva' },
      { name: 'Sandhya Aarti', time: '07:00 PM - 08:15 PM', description: 'Evening twilight prayer with elaborate camphor illumination' },
      { name: 'Shringar Aarti', time: '09:00 PM - 10:15 PM', description: 'Night embellishment of the Jyotirlinga with flowers and incense' },
      { name: 'Shayan Aarti', time: '10:30 PM - 11:00 PM', description: 'Bedtime rituals before the temple closes for the night' }
    ],
    rituals: 'Rudrabhishek, Panchamrit Snan, Ganga Aarti offerings, Laghurudra path, and bilva patra samarpan.',
    festivals: ['Maha Shivaratri', 'Dev Deepawali', 'Rangbhari Ekadashi', 'Shravan Maas Pilgrimage'],
    dressCode: 'Traditional Indian attire recommended. For specific sanctum Abhishek: Dhoti-Kurta / Veshti for men, Saree / Salwar Kameez for women. Western shorts/sleeveless restricted inside garbhagriha.',
    visitorGuidelines: [
      'Electronic devices, smart watches, belts with metal buckles, and mobile phones must be deposited in official lockers before entry.',
      'VIP darshan and Sugam Darshan tickets can be booked via the official temple trust portal.',
      'Wheelchair access and battery-operated carts are available for elderly pilgrims via the Ganga Corridor gate.',
      'Strict security screening in place; carry valid government photo ID.'
    ],
    bestTimeToVisit: 'October to March (Pleasant weather) and during Shravana Month (July-August) for spiritual fervor.',
    transportation: {
      byAir: 'Lal Bahadur Shastri International Airport, Babatpur (24 km)',
      byTrain: 'Varanasi Junction (VBS) - 4.5 km, Banaras (BSBS) - 4 km, Pt. Deen Dayal Upadhyaya Jn (DDU) - 17 km',
      byRoad: 'Well-connected via NH19, NH31 with extensive state and private bus services.'
    },
    accommodation: 'State Tourism Rahi Yatri Niwas, Trust Dormitories, Luxury Heritage Hotels along Ghats, and Dharamshalas.',
    nearbyFacilities: ['Official Locker Facilities', 'Shoe Stands', 'RO Drinking Water', 'Prasad Counters', 'Medical Aid Center', 'Bookstalls'],
    coordinates: { lat: 25.3109, lng: 83.0107 },
    images: [
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    status: 'approved',
    circuits: ['12 Jyotirlingas Circuit', 'Kashi-Ayodhya-Prayagraj Tirth Circuit'],
    contact: {
      phone: '+91-542-2392629',
      email: 'info@shrikashivishwanath.org',
      website: 'https://shrikashivishwanath.org'
    }
  },
  {
    id: 'tirupati-balaji',
    slug: 'sri-venkateswara-temple-tirupati',
    name: 'Sri Venkateswara Swamy Temple',
    hindiName: 'श्री वेंकटेश्वर स्वामी मंदिर (तिरुमाला)',
    deity: 'Lord Venkateswara (Govinda / Balaji / Srinivasa)',
    state: 'Andhra Pradesh',
    city: 'Tirupati (Tirumala)',
    region: 'South India',
    category: 'dravidian',
    period: '300 CE (Expanded by Pallavas, Cholas, Vijayanagara Emperors)',
    architecturalStyle: 'Dravidian Architecture with Ananda Nilayam Golden Vimana',
    shortDescription: 'Perched on the sacred Venkatadri hill of the Seshachalam range, it is one of the most revered and visited Vaishnavite pilgrimage shrines in the world.',
    historicalBackground: 'The temple is dedicated to Lord Venkateswara, an incarnation of Lord Vishnu who manifested to rescue mankind from the trials of Kali Yuga. The shrine has been patronized by every major South Indian dynasty including the Pallavas of Kanchipuram, Cholas of Thanjavur, Pandyas of Madurai, and King Krishnadevaraya of the Vijayanagara Empire who contributed enormous gold and jewel offerings.',
    historicalSignificance: 'Regarded as Bhuloka Vaikuntham (abode of Vishnu on Earth). King Krishnadevaraya visited seven times and donated the golden plating for the Ananda Nilayam dome.',
    religiousSignificance: 'Pilgrims tonsure their hair (Mundan) as an act of surrendering ego. The celebrated Tirupati Laddu Prasadam carries a coveted Geographical Indication (GI) tag.',
    architecture: 'Classical Dravidian marvel featuring three massive circumambulatory enclosures (Prakarams), the gold-gilded Ananda Nilayam Gopuram, the Rangamandapa, and the sacred Swami Pushkarini temple tank.',
    darshanTimings: '06:00 AM – 11:30 PM (Varies with daily sevas)',
    poojaSchedule: [
      { name: 'Suprabhatam', time: '03:00 AM - 03:30 AM', description: 'Auspicious dawn awakening prayer praising Lord Srinivasa' },
      { name: 'Thomala Seva', time: '03:45 AM - 04:30 AM', description: 'Flower adornment seva using fragrant garlands from the temple garden' },
      { name: 'Archana', time: '04:45 AM - 05:30 AM', description: 'Recitation of 1,008 sacred names of the Lord (Sahasranamarchana)' },
      { name: 'Sarva Darshan', time: '07:30 AM - 07:00 PM', description: 'Free general darshan for all pilgrims in queue complexes' },
      { name: 'Ekanta Seva', time: '01:30 AM (Next Day)', description: 'Night repose seva with sweet milk and pan offerings' }
    ],
    rituals: 'Kalyanotsavam, Unjal Seva (Swing ceremony), Vasanthotsavam, Sahasra Deepalankara Seva, and Tulabharam.',
    festivals: ['Srivari Annual Brahmotsavam', 'Vaikunta Ekadashi', 'Rathasapthami', 'Ugadi Asthanam'],
    dressCode: 'Strict Traditional Dress Code. Men: Dhoti/Pancha with Angavastram or Kurta-Pyjama. Women: Saree, Half-Saree with Dupatta, or Churidar with Dupatta. Jeans, T-shirts, shorts strictly prohibited.',
    visitorGuidelines: [
      'Advance reservation of Special Entry Darshan (₹300) is highly recommended via the TTD official portal.',
      'Footwear must be deposited at designated free counters before climbing the ghats or entering the Vaikuntam Queue Complex.',
      'Pilgrims walking up the Alipiri or Srivari Mettu footpaths are eligible for Divya Darshan tokens.',
      'Smoking, alcohol, and non-vegetarian food are strictly prohibited across the entire Tirumala sacred hills.'
    ],
    bestTimeToVisit: 'September to February (Pleasant winter climate) and during the 9-day annual Brahmotsavam festival.',
    transportation: {
      byAir: 'Tirupati International Airport, Renigunta (38 km from Tirumala)',
      byTrain: 'Tirupati Main Railway Station (TPTY) - 22 km, Renigunta Jn (RU) - 30 km',
      byRoad: 'Tirumala Ghat Roads have round-the-clock APSRTC electric and diesel buses running every 2 minutes from Tirupati.'
    },
    accommodation: 'TTD manages thousands of rooms in Padmavathi, Srinivasam, and Vishnu Nivasam guesthouses, plus luxury resorts at Tirupati.',
    nearbyFacilities: ['Free Annaprasadam Complex (Serves 100k+ meals daily)', 'Medical Clinics', 'Battery Vehicles', 'Locker Centers', 'Prasadam Distribution'],
    coordinates: { lat: 13.6833, lng: 79.3472 },
    images: [
      'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    status: 'approved',
    circuits: ['South India Divine Heritage Circuit', 'Divya Desam Pilgrimage Tour'],
    contact: {
      phone: '+91-877-2277777',
      email: 'helpdesk@tirumala.org',
      website: 'https://ttdevasthanams.ap.gov.in'
    }
  },
  {
    id: 'meenakshi-amman',
    slug: 'meenakshi-sundareshwarar-temple-madurai',
    name: 'Meenakshi Sundareshwarar Temple',
    hindiName: 'मीनाक्षी अम्मन मंदिर (मदुरै)',
    deity: 'Goddess Meenakshi (Parvati) and Lord Sundareshwarar (Shiva)',
    state: 'Tamil Nadu',
    city: 'Madurai',
    region: 'South India',
    category: 'dravidian',
    period: '6th Century CE (Magnificently expanded 1623–1655 CE by Nayak Dynasty)',
    architecturalStyle: 'Dravidian Architecture with 14 Iconic Multi-Tiered Gopurams',
    shortDescription: 'An architectural wonder of the world located on the southern bank of the Vaigai River in the historic city of Madurai.',
    historicalBackground: 'Madurai is one of the oldest continuously inhabited cities in the world. The temple complex is the geometric and spiritual center of Madurai. Mentioned in ancient Tamil Sangam literature, the present structure was rebuilt and expanded to magnificent heights by King Thirumalai Nayak of the Madurai Nayak dynasty between 1623 and 1655 CE.',
    historicalSignificance: 'Nominated among the New 7 Wonders of the World, the temple boasts the legendary Hall of Thousand Pillars (Aayiram Kaal Mandapam), musical granite pillars that resonate with harmonic frequencies, and the sacred Golden Lotus Pond (Potramarai Kulam).',
    religiousSignificance: 'Goddess Meenakshi holds primary prominence here; traditionally, devotees worship Goddess Meenakshi first before paying homage to Lord Sundareshwarar.',
    architecture: 'Surrounded by 14 monumental Gopurams, the tallest being the Southern tower (51.9 m). The complex covers 14 acres with over 33,000 intricately carved and polychrome painted sculptures.',
    darshanTimings: '05:00 AM – 12:30 PM & 04:00 PM – 10:00 PM',
    poojaSchedule: [
      { name: 'Thiruvanandal Pooja', time: '05:00 AM - 06:00 AM', description: 'Early morning ritual with devotional hymns and conch sounds' },
      { name: 'Kala Sandhi Pooja', time: '06:30 AM - 07:15 AM', description: 'Morning offering to Lord Sundareshwarar and Mother Meenakshi' },
      { name: 'Uchikala Pooja', time: '11:30 AM - 12:15 PM', description: 'Noon maha naivedyam offering' },
      { name: 'Sayaratchai Pooja', time: '06:30 PM - 07:15 PM', description: 'Evening twilight worship with instrumental nadaswaram' },
      { name: 'Palliarai Pooja', time: '09:30 PM - 10:00 PM', description: 'Famous bedtime procession carrying the silver sandals of Shiva to the shrine of Meenakshi' }
    ],
    rituals: 'Kalyanam (Divine Wedding Seva), Thanga Ther (Golden Chariot) procession, Navaratri Kolu display, and daily Palliarai procession.',
    festivals: ['Chithirai Thiruvizha (Celestial Wedding)', 'Navaratri Festival', 'Avani Moola Utsavam', 'Float Festival (Teppakulam)'],
    dressCode: 'Modest traditional Indian clothing. Men: Dhotis or formal trousers with shirts. Women: Sarees or Churidar with Dupatta. Western shorts, capris, sleeveless tops strictly prohibited.',
    visitorGuidelines: [
      'Cell phones and cameras are strictly banned inside the inner temple complex under Madras High Court orders. Free/nominal safe lockers exist at all 4 Gopuram entrances.',
      'Explore the Temple Art Museum inside the 1,000 Pillar Hall to admire ancient bronzes and stone architecture.',
      'Audio guides and certified English/Hindi/Tamil guides are available at the East Tower entrance.',
      'Specially marked priority queues are available for senior citizens and differently-abled devotees.'
    ],
    bestTimeToVisit: 'October to March for pleasant temperatures, or April-May during the glorious Chithirai Festival.',
    transportation: {
      byAir: 'Madurai International Airport (IXM) - 12 km from temple',
      byTrain: 'Madurai Junction Railway Station (MDU) - 1.5 km',
      byRoad: 'Madurai Integrated Bus Terminus (Mattuthavani) connects with Chennai, Bangalore, Coimbatore, and Trichy.'
    },
    accommodation: 'Numerous heritage hotels, boutique stays, and state-run TTDC hotel units around West and North Veli Streets.',
    nearbyFacilities: ['Cloak Rooms', 'Official Locker System', 'Handicraft & Brass Souvenir Emporiums', 'Tourist Information Bureau'],
    coordinates: { lat: 9.9195, lng: 78.1193 },
    images: [
      'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    status: 'approved',
    circuits: ['South India Divine Heritage Circuit', 'Pancha Bhoota Sthalam Trail'],
    contact: {
      phone: '+91-452-2344360',
      email: 'meenakshitemple@tnhrce.org',
      website: 'https://maduraimeenakshi.hrce.tn.gov.in'
    }
  },
  {
    id: 'kedarnath-temple',
    slug: 'kedarnath-temple-rudraprayag',
    name: 'Kedarnath Temple',
    hindiName: 'श्री केदारनाथ धाम मंदिर',
    deity: 'Lord Shiva (Kedareshwara / Sadashiva)',
    state: 'Uttarakhand',
    city: 'Kedarnath (Rudraprayag District)',
    region: 'North India',
    category: 'chota-char-dham',
    period: '8th Century CE (Established by Adi Shankaracharya; origins trace to Pandavas)',
    architecturalStyle: 'Katyuri Architectural Style with massive interlocking grey stone slabs',
    shortDescription: 'Perched at an altitude of 3,583 meters near the Mandakini River in the Garhwal Himalayas, it is the highest of the 12 Jyotirlingas.',
    historicalBackground: 'According to Hindu epic Mahabharata, after the Kurukshetra war, the Pandavas sought forgiveness from Lord Shiva. Shiva took the form of a bull and dove into the ground at Kedarnath, leaving his hump on the surface. The historic stone temple was consecrated by Adi Shankaracharya in the 8th century CE, who attained Mahasamadhi behind this very temple. The temple miraculously survived the catastrophic 2013 Himalayan flash floods intact due to the divine Bhim Shila boulder.',
    historicalSignificance: 'The northernmost Jyotirlinga, part of both the Maha 12 Jyotirlingas and the Chota Char Dham Himalayan pilgrimage circuit.',
    religiousSignificance: 'Worship of the conical swayambhu rock lingam represents the hump of Shiva as Nandi. The temple remains open for only 6 months each year (Akshaya Tritiya to Diwali). During winter, the deity is moved to Ukhimath.',
    architecture: 'Built on a raised rectangular stone plinth with gigantic, beautifully dressed grey granite slabs without mortar using ancient interlocking stone joinery.',
    darshanTimings: '04:00 AM – 03:00 PM & 05:00 PM – 09:00 PM (Summer Season Only)',
    poojaSchedule: [
      { name: 'Maha Abhishek', time: '04:00 AM - 06:00 AM', description: 'Sacred morning bathing ritual of the Jyotirlinga' },
      { name: 'Rudrabhishek Pooja', time: '06:00 AM - 07:00 AM', description: 'Recitation of Sri Rudram Chamakam' },
      { name: 'General Darshan', time: '07:00 AM - 03:00 PM', description: 'Public touch darshan and holy water offering' },
      { name: 'Shringar Aarti', time: '06:30 PM - 07:30 PM', description: 'Grand evening aarti with conch, brass bells, and Himalayan breezes' },
      { name: 'Shayan Aarti', time: '08:30 PM - 09:00 PM', description: 'Night closing prayer' }
    ],
    rituals: 'Panchamrit Abhishek, Ghee Lepan Seva, Shravani Pooja, and Samadhi Parikrama.',
    festivals: ['Kapat Opening (Akshaya Tritiya)', 'Kapat Closing (Bhai Dooj)', 'Shravan Purnima', 'Badri-Kedar Utsav'],
    dressCode: 'Warm woolen clothing is mandatory due to extreme sub-zero mountain weather. Heavy jackets, thermal innerwear, gloves, and waterproof trekking shoes are essential.',
    visitorGuidelines: [
      'Biometric registration on the Uttarakhand Tourism portal is mandatory prior to travel.',
      '16 km high-altitude trek from Gaurikund. Ponies, Dolis (palanquins), and Pitthus (porters) available at fixed government rates.',
      'Helicopter services operate from Guptkashi, Phata, and Sirsi (must be booked strictly on official IRCTC Heli Yatra portal).',
      'Medical fitness screening checkposts exist at Sonprayag and Gaurikund. Carry emergency mountain sickness medication (Diamox).'
    ],
    bestTimeToVisit: 'May to June and September to October. Heavy rainfall occurs in July-August.',
    transportation: {
      byAir: 'Jolly Grant Airport, Dehradun (238 km to Gaurikund) + Helicopter from Phata/Guptkashi',
      byTrain: 'Rishikesh Railway Station (216 km) / Yog Nagari Rishikesh (YNRK)',
      byRoad: 'National Highway 107 up to Sonprayag/Gaurikund, followed by 16 km mountain pilgrimage trek.'
    },
    accommodation: 'GMVN Tourist Rest Houses, Swiss Cottage Tents, and basic dharamshalas on the Kedarnath base camp.',
    nearbyFacilities: ['Emergency Oxygen Booths', 'Base Camp Hospital', 'GMVN Canteens', 'Helipads', 'Mountain Rescue Posts'],
    coordinates: { lat: 30.7352, lng: 79.0669 },
    images: [
      'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    status: 'approved',
    circuits: ['Chota Char Dham', '12 Jyotirlingas Circuit', 'Panch Kedar Yatra'],
    contact: {
      phone: '+91-135-2741600',
      email: 'support@bkkc.gov.in',
      website: 'https://badrinath-kedarnath.gov.in'
    }
  },
  {
    id: 'somnath-temple',
    slug: 'somnath-jyotirlinga-temple-veraval',
    name: 'Somnath Temple',
    hindiName: 'श्री सोमनाथ ज्योतिर्लिंग मंदिर',
    deity: 'Lord Shiva (Someshwara / Lord of the Moon)',
    state: 'Gujarat',
    city: 'Prabhas Patan (Veraval)',
    region: 'West India',
    category: 'jyotirlinga',
    period: 'Ancient (Rebuilt 1951 CE inaugurated by Dr. Rajendra Prasad)',
    architecturalStyle: 'Chalukya / Kailash Mahameru Prasad Architectural Style',
    shortDescription: 'The first among the twelve sacred Jyotirlingas of Lord Shiva, magnificently situated on the shores of the Arabian Sea in Saurashtra.',
    historicalBackground: 'Known as the "Eternal Shrine", Somnath represents the triumph of faith over destruction. Rebuilt multiple times through centuries of invasions, the grand revival of the modern temple was championed by Sardar Vallabhbhai Patel after Indian independence and completed in May 1951 in the presence of India\'s first President, Dr. Rajendra Prasad.',
    historicalSignificance: 'Regarded as the "Aadi Jyotirlinga" (the premier Jyotirlinga). The temple houses the famous Baan Stambh (Arrow Pillar) pointing in an unobstructed direct line over ocean waters to Antarctica.',
    religiousSignificance: 'Legend says the Moon God (Chandra / Soma) regained his radiance after taking a holy bath at the confluence of the sacred Triveni Sangam (Hiran, Kapila, and Saraswati rivers) and worshipping Shiva.',
    architecture: 'Masterpiece of Chalukya style built by the Sompura Salats. Features a 50-meter high shikhara, 27-ton kalash summit, massive flag pole, and intricate stone friezes depicting deities and celestial musicians.',
    darshanTimings: '06:00 AM – 10:00 PM (Daily)',
    poojaSchedule: [
      { name: 'Morning Aarti', time: '07:00 AM - 07:30 AM', description: 'Dawn offering with classical Saurashtra rhythmic bells' },
      { name: 'Midday Aarti', time: '12:00 PM - 12:30 PM', description: 'Rajbhog aarti and maha prasad naivedyam' },
      { name: 'Evening Aarti', time: '07:00 PM - 07:30 PM', description: 'Twilight sea-facing aarti with illumination' },
      { name: 'Sound & Light Show (Jay Somnath)', time: '08:00 PM - 09:00 PM', description: 'Multi-lingual 3D laser sound and light show narrated by Amitabh Bachchan' }
    ],
    rituals: 'Dhwajarohan (Sacred Flag Hoisting on the 150-foot mast), Someshwar Maha Puja, Rudrabhishek, and Gangajal Abhishek.',
    festivals: ['Maha Shivaratri (3-day grand mela)', 'Shravan Month Festivities', 'Kartik Purnima Fair', 'Golokdham Utsav'],
    dressCode: 'Decent formal or traditional Indian attire. Men: Dhotis or full-length trousers with shirts. Women: Sarees or salwar kameez. Short pants and skirts are not permitted inside the sanctum hall.',
    visitorGuidelines: [
      'High-security zone: Mobile phones, cameras, smart devices, and bags are prohibited inside the temple premises. Free high-tech electronic locker counters are provided.',
      'Do not miss the evening Light and Sound Show in the temple amphitheater facing the Arabian sea.',
      'Explore Triveni Sangam and the nearby Bhalka Tirth where Lord Krishna concluded his earthly pastimes.'
    ],
    bestTimeToVisit: 'October to March when the coastal climate is refreshing and breezy.',
    transportation: {
      byAir: 'Keshod Airport (55 km), Diu Airport (85 km), or Rajkot International Airport (200 km)',
      byTrain: 'Veraval Junction (VRL) - 5 km, connected with major express trains across India',
      byRoad: 'Four-lane state highway connects to Junagadh (85 km), Rajkot (200 km), and Ahmedabad (400 km).'
    },
    accommodation: 'Shree Somnath Trust operates Sagar Darshan (Sea view), Maheshwari Bhawan, and VIP Guest Houses at subsidized pilgrim rates.',
    nearbyFacilities: ['Somnath Trust Canteen (₹30 Thali)', 'Sea Promenade Walkway', 'Wheelchair Ramps', 'Luggage Cloakroom', 'EV Shuttle Buses'],
    coordinates: { lat: 20.8880, lng: 70.4012 },
    images: [
      'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    status: 'approved',
    circuits: ['12 Jyotirlingas Circuit', 'Gujarat Divine Heritage Circuit', 'Panch Dwarka Trail'],
    contact: {
      phone: '+91-2876-231200',
      email: 'somnath@somnath.org',
      website: 'https://somnath.org'
    }
  },
  {
    id: 'jagannath-puri',
    slug: 'shree-jagannath-temple-puri',
    name: 'Shree Jagannath Temple',
    hindiName: 'श्री जगन्नाथ मंदिर (पुरी)',
    deity: 'Lord Jagannath (Krishna), Balabhadra, and Subhadra',
    state: 'Odisha',
    city: 'Puri',
    region: 'East India',
    category: 'char-dham',
    period: '12th Century CE (Built by King Anantavarman Chodaganga Deva)',
    architecturalStyle: 'Kalinga Architecture (Deula style with majestic curvilinear Shikhara)',
    shortDescription: 'One of the four sacred Maha Char Dhams, world-famous for its annual Ratha Yatra (Chariot Festival) and the sacred Mahaprasad.',
    historicalBackground: 'Constructed by King Anantavarman Chodaganga of the Eastern Ganga dynasty in the 12th century, the temple is dedicated to Jagannath, meaning "Lord of the Universe". The wooden deities of Jagannath, Balabhadra, and Subhadra are carved from sacred neem logs (Daru Brahma) and undergo a ritual transformation (Nabakalebara) every 12 to 19 years.',
    historicalSignificance: 'One of the original 4 Maha Char Dhams consecrated by Adi Shankaracharya. Houses the world\'s largest traditional kitchen (Rosaghara) where 56 varieties of prasad (Chhappan Bhog) are cooked in clay pots over wood fires.',
    religiousSignificance: 'Lord Jagannath represents universal brotherhood and inclusive devotion. The temple flag (Patitapabana Bana) flutters opposite to the direction of wind, and no birds or planes fly over the temple dome.',
    architecture: 'Classical Kalinga style comprising four main structures: Vimana (sanctum), Jagamohana (assembly hall), Natamandira (dance hall), and Bhogamandapa (hall of offerings), surrounded by the Meghanada Pacheri defensive stone wall.',
    darshanTimings: '05:30 AM – 10:00 PM (Daily)',
    poojaSchedule: [
      { name: 'Mangala Alati', time: '05:30 AM - 06:00 AM', description: 'Dawn awakening ceremony in the inner sanctum' },
      { name: 'Gopala Bhoga', time: '08:30 AM - 09:30 AM', description: 'Breakfast offering of curd, ripe bananas, and sweet pancakes' },
      { name: 'Madhyanha Dhoopa', time: '12:30 PM - 01:30 PM', description: 'Grand afternoon Mahaprasad offering' },
      { name: 'Sandhya Alati', time: '06:00 PM - 06:45 PM', description: 'Evening camphor offering and lighting of traditional lamps' },
      { name: 'Badasinghara Bhoga & Pahuda', time: '10:30 PM - 11:30 PM', description: 'Flower attire and night closing ritual' }
    ],
    rituals: 'Chhera Pahanra (King sweeps chariots with gold broom), Nabakalebara, Chandan Yatra, Snana Yatra, and Dhwaja Paribartan (Daily changing of the flag atop the 214-ft shikhara).',
    festivals: ['Ratha Yatra (Puri Chariot Festival)', 'Chandan Yatra', 'Snana Purnima', 'Dol Purnima', 'Kartika Vrata'],
    dressCode: 'Strict Indian traditional attire. Men: Dhotis or Kurta-Pyjamas. Women: Sarees or Salwar Suits. Western clothing, leather belts, shoes, and bags strictly prohibited.',
    visitorGuidelines: [
      'According to centuries-old temple tradition, entry into the inner sanctum is reserved for Hindus. Non-Hindus and foreign nationals can view the Patitapabana image at the Singhadwara Lion Gate or visit during the global Ratha Yatra.',
      'Photography and electronic devices are completely banned inside the temple walls.',
      'Purchase the authentic Anandabazar Mahaprasad cooked purely without garlic or onions.',
      'Engage authorized Temple Guides carrying valid Odisha Tourism badges.'
    ],
    bestTimeToVisit: 'October to February for comfortable sea weather, or June-July during the world-renowned Ratha Yatra.',
    transportation: {
      byAir: 'Biju Patnaik International Airport, Bhubaneswar (BBI) - 60 km',
      byTrain: 'Puri Railway Station (PURI) - 2.5 km from the temple',
      byRoad: 'Marine Drive connecting Puri with Konark (35 km) and Bhubaneswar (60 km) via NH316.'
    },
    accommodation: 'OTDC Panthanivas, Nilachal Bhakt Nivas, Sri Jagannath Temple Trust Dharmashalas, and luxury coastal resorts along Puri Sea Beach.',
    nearbyFacilities: ['Anandabazar Mahaprasad Market', 'Shoe Counters', 'Tourist Police Kiosk', 'Bathing Ghats at Narendra Tank'],
    coordinates: { lat: 19.8049, lng: 85.8179 },
    images: [
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    status: 'approved',
    circuits: ['Maha Char Dham Yatra', 'Odisha Golden Triangle Circuit'],
    contact: {
      phone: '+91-6752-222002',
      email: 'jagannath.puri@nic.in',
      website: 'https://shrijagannatha.odisha.gov.in'
    }
  },
  {
    id: 'brihadeeswarar-temple',
    slug: 'brihadeeswarar-temple-thanjavur',
    name: 'Brihadeeswarar Temple (Peruvudaiyar Kovil)',
    hindiName: 'बृहदेश्वर मंदिर (तंजावुर)',
    deity: 'Lord Shiva (Peruvudaiyar / Brihadisvara)',
    state: 'Tamil Nadu',
    city: 'Thanjavur',
    region: 'South India',
    category: 'unesco-heritage',
    period: '1010 CE (Built by Emperor Raja Raja Chola I)',
    architecturalStyle: 'Pure Dravidian Masterpiece (Great Living Chola Temples)',
    shortDescription: 'A UNESCO World Heritage Site celebrating over 1,000 years of architectural genius, boasting the world\'s first all-granite temple complex.',
    historicalBackground: 'Commissioned by the legendary Chola Emperor Raja Raja Chola I and completed in 1010 CE, the temple stands as the zenith of Tamil architecture, art, bronze casting, and literature. The 80-tonne granite Kumbam (octagonal dome capstone) atop the 66-meter Vimana was hauled up a 6-km long inclined earthen ramp built by Chola master engineers.',
    historicalSignificance: 'Recognized as a UNESCO World Heritage Site under the "Great Living Chola Temples". The massive monolithic Nandi statue at the entrance measures 6 meters long and 3.7 meters high, carved from a single granite block.',
    religiousSignificance: 'The massive Shiva Lingam inside the sanctum stands 3.7 meters tall, radiating unmatched spiritual energy. Elaborate fresco paintings line the inner ambulatory corridors.',
    architecture: 'Built entirely of hard granite transported over 60 km. Features the soaring 16-tier Vimana, grand pillared corridors, and extensive stone inscriptions detailing every donation made by Chola royals and citizens.',
    darshanTimings: '06:00 AM – 12:30 PM & 04:00 PM – 08:30 PM',
    poojaSchedule: [
      { name: 'Palabhishekam', time: '06:00 AM - 07:00 AM', description: 'Morning milk and holy water bath of the colossal Shiva Lingam' },
      { name: 'Uchikalam Pooja', time: '12:00 PM - 12:30 PM', description: 'Noon offering and harathi' },
      { name: 'Sayaratchai', time: '06:00 PM - 07:00 PM', description: 'Evening lamps and nadaswaram recital' },
      { name: 'Arthajamam', time: '08:00 PM - 08:30 PM', description: 'Closing nighttime pooja' }
    ],
    rituals: 'Pradosham celebrations with continuous milk abhishek over the gigantic Nandi, Maha Shivaratri Natyanjali dance festival.',
    festivals: ['Maha Shivaratri Brahan-Natyanjali', 'Chitrai Thiruvizha', 'Raja Raja Chola Sathaya Vizha (Coronation celebration)', 'Aani Thirumanjanam'],
    dressCode: 'Modest traditional Indian clothing. Saree or Salwar for women, Dhoti or formal trousers for men. Footwear must be deposited at the outer ASI counter.',
    visitorGuidelines: [
      'Maintained by the Archaeological Survey of India (ASI) and HR&CE Department. Clean and expansive manicured lawns.',
      'Photography is allowed in the outer courtyards; strictly prohibited inside the inner sanctum sanctorum.',
      'Evening lighting at sunset highlights the golden granite facades in breathtaking detail.',
      'Visit the nearby Thanjavur Royal Palace and Saraswathi Mahal Library during the afternoon closure.'
    ],
    bestTimeToVisit: 'November to February for mild winter weather and the annual dance festival.',
    transportation: {
      byAir: 'Tiruchirappalli (Trichy) International Airport (TRZ) - 55 km',
      byTrain: 'Thanjavur Junction (TJ) - 2 km, well-connected to Chennai, Madurai, and Bangalore',
      byRoad: 'NH83 connects Thanjavur with Trichy (1 hour), Kumbakonam (40 min), and Chennai (6 hours).'
    },
    accommodation: 'Heritage resorts, TTDC Hotel Tamil Nadu, and modern hotels along South Main Street and Trichy Road.',
    nearbyFacilities: ['ASI Information Kiosk', 'Luggage Counter', 'Drinking Water Stations', 'Souvenir Bookstalls'],
    coordinates: { lat: 10.7828, lng: 79.1318 },
    images: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    status: 'approved',
    circuits: ['Great Living Chola Temples Trail', 'South India Divine Heritage Circuit', 'Navagraha Temples Circuit'],
    contact: {
      phone: '+91-4362-274476',
      email: 'thanjavurasi@gov.in',
      website: 'https://asi.nic.in'
    }
  },
  {
    id: 'badrinath-temple',
    slug: 'badrinath-temple-chamoli',
    name: 'Badrinath Temple (Badri Vishal)',
    hindiName: 'श्री बद्रीनाथ धाम मंदिर',
    deity: 'Lord Vishnu (Badrinarayan / Badri Vishal)',
    state: 'Uttarakhand',
    city: 'Badrinath (Chamoli District)',
    region: 'North India',
    category: 'char-dham',
    period: '8th Century CE (Established by Adi Shankaracharya)',
    architecturalStyle: 'Traditional Himalayan Wooden Pagoda & Stone Gabled Architecture with vibrant polychrome facade',
    shortDescription: 'One of the four Maha Char Dhams and part of the Himalayan Chota Char Dham, situated along the Alaknanda River between Nar and Narayana mountain ranges.',
    historicalBackground: 'Badrinath is dedicated to Lord Vishnu, who meditated here while Goddess Lakshmi sheltered him from harsh weather in the form of a Badri (jujube/berry) tree. Adi Shankaracharya discovered the black Shaligram stone idol of Lord Badrinarayan from the Alaknanda riverbed (Narad Kund) in the 8th century and enshrined it in the sanctum.',
    historicalSignificance: 'Unique among temples as it belongs simultaneously to the All-India Maha Char Dham and Uttarakhand Chota Char Dham. The chief priest (Rawal) has traditionally been chosen from the Nambudiri Brahmin community of Kerala.',
    religiousSignificance: 'Pilgrims take a holy dip in the natural thermal sulfur hot springs of Tapt Kund (45°C) before entering the sanctum to wash away sins and fatigue.',
    architecture: 'Features a brightly painted 15-meter arched stone facade, conical shikhara crowned with a golden gilt cupola, the Sabha Mandapa, and the Darshan Mandapa where 15 sacred idols surround Lord Badrinarayan.',
    darshanTimings: '04:30 AM – 01:00 PM & 04:00 PM – 09:00 PM (May to November)',
    poojaSchedule: [
      { name: 'Maha Abhishek', time: '04:30 AM - 06:30 AM', description: 'Sacred morning panchamrit bath in the sanctum' },
      { name: 'Gita Path & Sahasranama', time: '06:30 AM - 08:00 AM', description: 'Devotional scripture chanting and lotus flower adornment' },
      { name: 'General Darshan', time: '08:00 AM - 01:00 PM', description: 'Public darshan for all pilgrims' },
      { name: 'Sandhya Aarti', time: '06:00 PM - 07:30 PM', description: 'Evening song of praise with burning camphor lamps' },
      { name: 'Shayan Aarti', time: '08:30 PM - 09:00 PM', description: 'Night closure ritual and distribution of prasad' }
    ],
    rituals: 'Pinda Daan rituals at Brahma Kapal on the riverbanks for departed ancestors, Maha Abhishek, and Tulsi Dal Arpan.',
    festivals: ['Kapat Opening Ceremony', 'Kapat Closing Festival', 'Badri-Kedar Festival', 'Janmashtami in the Himalayas'],
    dressCode: 'Heavy woolen garments and thermo-wear essential. Dhotis or Indian attire for special morning abhishek pujas inside the garbhagriha.',
    visitorGuidelines: [
      'Uttarakhand Char Dham biometric travel registration required.',
      'Visit Mana Village (the last Indian village on the Indo-Tibetan border, 4 km from Badrinath), Saraswati River origin, and Vyas Cave.',
      'Thermal bath at Tapt Kund is open for all pilgrims before temple entry.',
      'Helicopter services connect Dehradun directly with Badrinath helipad.'
    ],
    bestTimeToVisit: 'May to June and September to late October (Closed during harsh snowy winter).',
    transportation: {
      byAir: 'Jolly Grant Airport, Dehradun (314 km) + Direct Charter Helicopters to Badrinath Helipad (1 km)',
      byTrain: 'Rishikesh / Yog Nagari Rishikesh (295 km)',
      byRoad: 'All-weather Char Dham Mahamarg connects Rishikesh via Joshimath (NH07) directly to Badrinath town.'
    },
    accommodation: 'GMVN Tourist Bungalows, Badrinath Temple Trust Dharamshalas, and private star hotels in Badrinath and Joshimath.',
    nearbyFacilities: ['Tapt Kund Hot Springs', 'Mana Village Excursion', 'Helipad Services', 'Oxygen Parlour', 'State Bank & ATM Facilities'],
    coordinates: { lat: 30.7433, lng: 79.4938 },
    images: [
      'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    status: 'approved',
    circuits: ['Maha Char Dham Yatra', 'Chota Char Dham', 'Panch Badri Circuit'],
    contact: {
      phone: '+91-135-2741600',
      email: 'support@bkkc.gov.in',
      website: 'https://badrinath-kedarnath.gov.in'
    }
  },
  {
    id: 'golden-temple-amritsar',
    slug: 'harmandir-sahib-golden-temple-amritsar',
    name: 'Sri Harmandir Sahib (Golden Temple)',
    hindiName: 'श्री हरमंदिर साहिब (स्वर्ण मंदिर, अमृतसर)',
    deity: 'Supreme Divine (Sri Guru Granth Sahib Ji)',
    state: 'Punjab',
    city: 'Amritsar',
    region: 'North India',
    category: 'unesco-heritage',
    period: '1581–1604 CE (Initiated by Guru Ram Das Ji & Guru Arjan Dev Ji)',
    architecturalStyle: 'Sikh Architecture with pure Gold leafing and Marble inlay work',
    shortDescription: 'The spiritual and cultural center of Sikhism, surrounded by the sacred Amrit Sarovar (Pool of Nectar), welcoming all humanity equally.',
    historicalBackground: 'Guru Ram Das Ji excavated the sacred pool in 1577 CE, and Guru Arjan Dev Ji completed the construction of the sanctum in 1604 CE, installing the Adi Granth. In 1830, Maharaja Ranjit Singh of the Sikh Empire donated 500 kg of pure 24-karat gold to plate the upper stories and domes of the shrine, earning it the beloved worldwide name "The Golden Temple".',
    historicalSignificance: 'Designed with four entrances in all four cardinal directions, symbolizing that people of all religions, castes, and nationalities are equally welcome without discrimination.',
    religiousSignificance: 'The living Guru, Guru Granth Sahib, is enshrined here. Continuous non-stop Kirtan (Gurbani singing) resonates across the sarovar 20 hours a day.',
    architecture: 'Built at a lower level than surrounding land, requiring visitors to step downward—symbolizing humility. Features exquisite Pietra Dura floral marble inlay work, gold embossed copper panels, and the central causeway (Guru\'s Bridge).',
    darshanTimings: 'Open 24 Hours / 365 Days (Continuous Darshan & Langar)',
    poojaSchedule: [
      { name: 'Palki Sahib Sewa (Morning)', time: '04:00 AM - 05:00 AM', description: 'Golden palanquin procession carrying Sri Guru Granth Sahib from Akal Takht to sanctum' },
      { name: 'Asa Di Var Kirtan', time: '05:30 AM - 07:30 AM', description: 'Soul-stirring early morning classical raga singing' },
      { name: 'Rehras Sahib', time: 'Sunset (around 06:30 PM)', description: 'Evening congregational prayer' },
      { name: 'Sukh-Aasan & Palki Sewa (Night)', time: '10:00 PM - 11:00 PM', description: 'Procession carrying the Holy Scripture back to Sri Akal Takht Sahib for rest' }
    ],
    rituals: 'Ishnan Sewa (sanctum washing with milk and water at midnight), Palki Sahib Sewa, Sarovar Snan, and Kar Sewa.',
    festivals: ['Baisakhi Festival', 'Guru Nanak Gurpurab', 'Bandi Chhor Divas (Diwali with 100,000 oil lamps)', 'Parkash Utsav'],
    dressCode: 'Strict Modesty & Cleanliness Rules. Head must be covered with a scarf or turban at all times on complex premises. Footwear, tobacco, alcohol, and chewing gum strictly prohibited. Footbath at entrance is mandatory.',
    visitorGuidelines: [
      'Visit the Guru Ka Langar—the world\'s largest community kitchen serving over 100,000 free, nutritious, hygienic vegetarian meals daily to all people.',
      'Head coverings (rumals) are provided for free at all entrance plazas.',
      'Free dormitory stays and private Sarai rooms available for pilgrims in Guru Ram Das Niwas.',
      'Photography is strictly prohibited inside the inner sanctum.'
    ],
    bestTimeToVisit: 'October to March when Amritsar enjoys pleasant cool weather.',
    transportation: {
      byAir: 'Sri Guru Ram Dass Jee International Airport (ATQ) - 13 km',
      byTrain: 'Amritsar Junction (ASR) - 2 km, with superfast Shatabdi & Vande Bharat links to New Delhi',
      byRoad: 'Grand Trunk Road (NH44) with express bus links from Delhi, Chandigarh, and Jammu.'
    },
    accommodation: 'SGPC-managed Sarais (Guru Ram Das Niwas, Mata Ganga Ji Niwas) and numerous boutique luxury hotels around Heritage Street.',
    nearbyFacilities: ['Free 24/7 Guru Ka Langar', 'Central Sikh Museum', 'Heritage Street Promenade', 'Luggage Cloak Rooms', 'Free Filtered Water'],
    coordinates: { lat: 31.6200, lng: 74.8765 },
    images: [
      'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    status: 'approved',
    circuits: ['Punjab Heritage & Gurdwara Circuit', 'Golden Triangle Extended Circuit'],
    contact: {
      phone: '+91-183-2553957',
      email: 'info@sgpc.net',
      website: 'https://sgpc.net'
    }
  },
  {
    id: 'mahakaleshwar-ujjain',
    slug: 'mahakaleshwar-jyotirlinga-temple-ujjain',
    name: 'Mahakaleshwar Jyotirlinga Temple',
    hindiName: 'श्री महाकालेश्वर ज्योतिर्लिंग मंदिर (उज्जैन)',
    deity: 'Lord Shiva (Mahakaal / Lord of Time & Eternity)',
    state: 'Madhya Pradesh',
    city: 'Ujjain',
    region: 'Central India',
    category: 'jyotirlinga',
    period: 'Ancient (Expanded by Paramaras & Scindias)',
    architecturalStyle: 'Bhumija, Chalukya, and Maratha Architectural synthesis',
    shortDescription: 'The only south-facing (Dakshinmurti) Jyotirlinga among the twelve, world-renowned for its mystical pre-dawn Bhasma Aarti.',
    historicalBackground: 'Situated beside the sacred Shipra River in the ancient holy city of Ujjain (Avanti), Mahakaleshwar is celebrated in Kalidasa\'s classical poem Meghaduta. Rebuilt in the 18th century by General Ranoji Shinde of the Maratha Scindia dynasty, the temple complex was recently expanded into the sprawling 900-meter "Shri Mahakal Mahalok" corridor in 2022.',
    historicalSignificance: 'Ujjain was the prime meridian of ancient Indian astronomical calculations and one of the seven Moksha-giving holy cities (Sapta Puri).',
    religiousSignificance: 'Dakshinmurti face of Mahakal is unique: facing south, the direction of death (Yama), symbolizing that Lord Shiva conquers time and mortality for his devotees.',
    architecture: 'Three-tiered sanctum housing Mahakaleshwar at the bottom, Omkareshwar in the middle, and Nagchandreshwar on the top floor (opened only on Nag Panchami day).',
    darshanTimings: '04:00 AM – 11:00 PM (Daily)',
    poojaSchedule: [
      { name: 'Bhasma Aarti', time: '04:00 AM - 06:00 AM', description: 'Sacred pre-dawn ritual where the Jyotirlinga is bathed and adorned with fresh holy ash' },
      { name: 'Naivedya Aarti', time: '10:30 AM - 11:30 AM', description: 'Morning food offering to the deity' },
      { name: 'Sandhya Aarti', time: '07:00 PM - 08:00 PM', description: 'Evening illumination with brass damrus and trumpets' },
      { name: 'Shayan Aarti', time: '10:30 PM - 11:00 PM', description: 'Night closing prayers before repose' }
    ],
    rituals: 'Bhasma Aarti, Jalabhishek, Rudra Path, Mahamrityunjaya Japa, and Shravan Maas Sawari (Grand royal procession through city streets).',
    festivals: ['Maha Shivaratri (9-day Shiv Navaratri)', 'Shravan Sawari', 'Nag Panchami', 'Simhastha Kumbh Mela (every 12 years)'],
    dressCode: 'Strict dress code for sanctum entry and Bhasma Aarti: Men must wear unstitched traditional Sola/Dhoti with Angavastra (no shirt/vest inside sanctum). Women must wear Saree. Jeans/T-shirts strictly not allowed in sanctum.',
    visitorGuidelines: [
      'Advance online booking for Bhasma Aarti is mandatory on the official Shri Mahakaleshwar temple portal.',
      'Explore the magnificent Mahakal Lok Corridor featuring 108 grand stone pillars and 200+ massive Shiva sculptures.',
      'Take a holy dip in the Shipra River at Ram Ghat.',
      'Security lockers and mobile deposit counters are located at the entrance plaza.'
    ],
    bestTimeToVisit: 'October to March, and during the holy monsoon month of Shravana.',
    transportation: {
      byAir: 'Devi Ahilyabai Holkar International Airport, Indore (IDR) - 55 km via 4-lane expressway',
      byTrain: 'Ujjain Junction (UJN) - 1.5 km',
      byRoad: 'Expressway connects Ujjain to Indore (50 mins), Bhopal (3 hours), and Omkareshwar (3 hours).'
    },
    accommodation: 'Mahakal Mandir Trust Dharamshalas, MP Tourism Ujjain Tourist Motel, and numerous luxury hotels around Dewas Road.',
    nearbyFacilities: ['Mahakal Lok E-Rickshaws', 'Prasad Counters', 'Annakshetra Dining Hall', 'Wheelchair Assistance'],
    coordinates: { lat: 23.1827, lng: 75.7682 },
    images: [
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    status: 'approved',
    circuits: ['12 Jyotirlingas Circuit', 'Madhya Pradesh Heritage & Jyotirlinga Circuit'],
    contact: {
      phone: '+91-734-2550563',
      email: 'office@shrimahakaleshwar.com',
      website: 'https://shrimahakaleshwar.com'
    }
  },
  {
    id: 'kamakhya-temple',
    slug: 'kamakhya-devi-shakti-peeth-guwahati',
    name: 'Maa Kamakhya Temple',
    hindiName: 'माँ कामाख्या देवी मंदिर (गुवाहाटी)',
    deity: 'Goddess Kamakhya (Adi Shakti / Mahamaya)',
    state: 'Assam',
    city: 'Guwahati',
    region: 'North-East India',
    category: 'shakti-peetha',
    period: '8th–17th Century CE (Rebuilt 1565 CE by King Chilarai of Koch Dynasty)',
    architecturalStyle: 'Nilachal Architectural Style (Cruciform base with beehive-shaped dome)',
    shortDescription: 'The premier Shakti Peetha in India, situated atop Nilachal Hill in Guwahati, venerating the creative feminine power (Shakti).',
    historicalBackground: 'According to Kalika Purana, when Lord Shiva carried the burning body of Sati in sorrow, her yoni (womb/source of creation) fell on Nilachal Hill. The original shrine was rebuilt in 1565 CE by the Koch King Naranarayan and his general Chilarai, creating the unique "Nilachal" hybrid temple architecture seen across Assam today.',
    historicalSignificance: 'The core center of Tantric Shaktism in the world, dedicated to the 10 Mahavidyas (wisdom goddesses).',
    religiousSignificance: 'The sanctum houses no idol; instead, it enshrines a natural rock fissure shaped like a yoni, continuously nourished by an underground perennial natural spring.',
    architecture: 'Nilachal type featuring a hemispherical ribbed beehive dome resting on a polygonal plinth, adorned with sculpted stone panels of Ganesha, Chamunda, and Koch royal figures.',
    darshanTimings: '05:30 AM – 01:00 PM & 02:30 PM – 05:30 PM',
    poojaSchedule: [
      { name: 'Snana & Nitya Puja', time: '05:30 AM - 07:30 AM', description: 'Early morning bathing and mantra purification' },
      { name: 'Dharshan Opening', time: '08:00 AM - 01:00 PM', description: 'Devotee descent into the underground rock sanctum' },
      { name: 'Bhog Aarti (Closed)', time: '01:00 PM - 02:30 PM', description: 'Midday cooked naivedyam offering to Mother Goddess' },
      { name: 'Sandhya Aarti', time: '06:00 PM - 07:00 PM', description: 'Evening lamp lighting and Tantric shakti stotra chanting' }
    ],
    rituals: 'Yoni Kund Snan, Angodak distribution, Kumkum and red cloth offering, and Ambubachi Mela rituals.',
    festivals: ['Ambubachi Mela (June - Annual fertility festival)', 'Durga Puja & Navaratri', 'Manasa Puja', 'Pohan Biya'],
    dressCode: 'Traditional respectful Indian attire. Sarees or Salwar Suits for women, Dhoti or Kurta-Pyjama for men.',
    visitorGuidelines: [
      'Expect long queues during morning hours; special defense & VIP darshan passes available at the temple devalaya office.',
      'The inner sanctum is dark and reached by a flight of narrow stone steps; tread cautiously.',
      'During Ambubachi Mela (usually June 22-25), the temple remains closed for 3 days and reopens on the 4th day for distribution of Raktavastra.'
    ],
    bestTimeToVisit: 'October to April (Pleasant weather) or June during the vibrant Ambubachi Mela.',
    transportation: {
      byAir: 'Lokpriya Gopinath Bordoloi International Airport, Guwahati (GAU) - 18 km',
      byTrain: 'Kamakhya Junction (KYQ) - 3 km, Guwahati Railway Station (GHY) - 6 km',
      byRoad: 'Regular ASTC buses and app cabs run up the hill from Guwahati city center.'
    },
    accommodation: 'Assam Tourism Prashanti Tourist Lodge on Nilachal Hill, and star hotels along GS Road in Guwahati.',
    nearbyFacilities: ['Hilltop Viewpoint of Brahmaputra River', 'Prasad Shops', 'Cloakroom', 'Assam Tourism Guide Post'],
    coordinates: { lat: 26.1664, lng: 91.7058 },
    images: [
      'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    status: 'approved',
    circuits: ['51 Shakti Peethas Circuit', 'Assam Spiritual & Wildlife Circuit'],
    contact: {
      phone: '+91-361-2734654',
      email: 'kamakhyatemple@gmail.com',
      website: 'https://maakamakhya.org'
    }
  },
  {
    id: 'ramanathaswamy-temple',
    slug: 'ramanathaswamy-temple-rameswaram',
    name: 'Ramanathaswamy Temple',
    hindiName: 'श्री रामनाथस्वामी मंदिर (रामेश्वरम)',
    deity: 'Lord Shiva (Ramanathaswamy)',
    state: 'Tamil Nadu',
    city: 'Rameswaram (Pamban Island)',
    region: 'South India',
    category: 'char-dham',
    period: '12th Century CE (Expanded by Pandya and Jaffna Sethupathi Kings)',
    architecturalStyle: 'Dravidian Architecture featuring the World\'s Longest Pillared Temple Corridor',
    shortDescription: 'One of the four sacred Maha Char Dhams and one of the 12 Jyotirlingas, situated on the pristine island of Rameswaram.',
    historicalBackground: 'According to the Ramayana, Lord Rama worshipped Lord Shiva here to absolve the sin of killing Ravana. Sita sculpted the primary Shiva lingam out of island sand (Ramalingam), while Hanuman brought the Vishwalingam from Mount Kailash. The temple was patronized and fortified by the Setupati kings of Ramanathapuram in the 17th century.',
    historicalSignificance: 'Unique as it is both a Maha Char Dham shrine and a Jyotirlinga. Boasts the longest temple corridor in the world, with over 1,212 intricately sculpted granite pillars.',
    religiousSignificance: 'Pilgrims take bath in the 22 sacred Teerthams (holy wells) located inside the temple compound before having darshan of the Jyotirlinga.',
    architecture: 'Magnificent Dravidian architecture spanning 15 acres with a monumental outer corridor extending over 1.2 km in total length, lined with 4,000 carved granite pillars.',
    darshanTimings: '05:00 AM – 01:00 PM & 03:00 PM – 09:00 PM',
    poojaSchedule: [
      { name: 'Spadika Linga Darshan', time: '05:00 AM - 06:00 AM', description: 'Early morning darshan of the rare sacred crystal Spadika Lingam' },
      { name: 'Kala Sandhi', time: '07:00 AM - 08:00 AM', description: 'Morning milk and sandal paste abhishek' },
      { name: 'Uchikalam', time: '12:00 PM - 01:00 PM', description: 'Midday prayer and offering' },
      { name: 'Sayaratchai', time: '06:00 PM - 07:00 PM', description: 'Evening lamp lighting ceremony' },
      { name: 'Arthajamam', time: '08:30 PM - 09:00 PM', description: 'Night closing prayers with divine lullaby' }
    ],
    rituals: 'Bathing in 22 Holy Teerthams (Agni Teertham to Kodi Teertham), Spadika Linga Abhishek, and Dhanushkodi beach rituals.',
    festivals: ['Maha Shivaratri', 'Thirukalyanam (Divine Marriage)', 'Mahalaya Amavasya', 'Aarudra Darshanam'],
    dressCode: 'Traditional Indian attire. Men: Dhotis or trousers (shirts to be removed for bathing in teerthams and re-worn dry for sanctum darshan). Women: Saree or Salwar kameez.',
    visitorGuidelines: [
      'First take a dip in the sea at Agni Teertham (opposite east gate), then enter the temple to receive water poured from the 22 sacred wells by authorized sevaks.',
      'Bring a change of dry clothes, as wet clothing is not allowed in the inner sanctum.',
      'Visit Dhanushkodi (the ghost town) and Ram Setu point (18 km from Rameswaram).'
    ],
    bestTimeToVisit: 'October to April when the tropical island breeze is refreshing.',
    transportation: {
      byAir: 'Madurai International Airport (IXM) - 170 km',
      byTrain: 'Rameswaram Railway Station (RMM) - 1.5 km (Crosses iconic Pamban Sea Bridge)',
      byRoad: 'NH87 over the engineering marvel Annai Indira Gandhi Pamban Road Bridge.'
    },
    accommodation: 'Tamil Nadu Tourism TTDC Hotel Tamil Nadu, Ramco Guest House, and numerous hotels near the East Car Street.',
    nearbyFacilities: ['Changing Rooms', 'Cloakroom & Lockers', 'Battery Buggies', 'Teertham Counter Tokens'],
    coordinates: { lat: 9.2881, lng: 79.3174 },
    images: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    status: 'approved',
    circuits: ['Maha Char Dham Yatra', '12 Jyotirlingas Circuit', 'South India Divine Heritage Circuit'],
    contact: {
      phone: '+91-4573-221223',
      email: 'rameswaramtemple@tnhrce.org',
      website: 'https://rameswaramtemple.tnhrce.in'
    }
  }
];

export const SEED_CIRCUITS = [
  {
    id: 'char-dham-yatra',
    name: 'All-India Maha Char Dham Yatra',
    slug: 'all-india-maha-char-dham-yatra',
    region: 'Pan-India',
    duration: '12 - 16 Days',
    distance: '8,500 km',
    difficulty: 'Moderate to High',
    description: 'The four cardinal pilgrimage dhams established by Adi Shankaracharya in the 8th century CE, circumambulating the four geographic corners of India: Badrinath in the North, Rameswaram in the South, Puri in the East, and Dwarka in the West.',
    spiritualSignificance: 'Completing the Maha Char Dham is believed to bestow supreme spiritual liberation (Moksha) and represents the geographic and cultural unity of India.',
    templeIds: ['badrinath-temple', 'jagannath-puri', 'ramanathaswamy-temple', 'somnath-temple'],
    itinerary: [
      { day: 'Day 1-4', location: 'Badrinath (Uttarakhand)', activities: 'Holy dip in Tapt Kund, darshan of Lord Badrinarayan, visit to Mana village and Saraswati river origin.' },
      { day: 'Day 5-8', location: 'Puri (Odisha)', activities: 'Snana at sea, darshan of Lord Jagannath, Balabhadra, Subhadra, savoring Anandabazar Mahaprasad.' },
      { day: 'Day 9-12', location: 'Rameswaram (Tamil Nadu)', activities: 'Agni Teertham sea bath, cleansing bath in 22 sacred teertham wells, Spadika Linga darshan, Dhanushkodi visit.' },
      { day: 'Day 13-16', location: 'Dwarka & Somnath (Gujarat)', activities: 'Darshan at Dwarkadhish temple and premier Jyotirlinga at Somnath on the Arabian Sea coast.' }
    ],
    travelTips: [
      'Plan travel between October and March to avoid extreme Himalayan snow or coastal monsoon storms.',
      'Book flights and train journeys between distant states well in advance.',
      'Carry both winter woolens for Badrinath and light cottons for South and West India.'
    ],
    coverImage: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '12-jyotirlingas-circuit',
    name: '12 Sacred Jyotirlingas of Lord Shiva',
    slug: '12-sacred-jyotirlingas-pilgrimage',
    region: 'Pan-India',
    duration: '18 - 21 Days',
    distance: '6,200 km',
    difficulty: 'Moderate',
    description: 'The 12 radiant shrines where Lord Shiva manifested as a boundless column of cosmic light (Jyotirlinga), spread across Gujarat, Maharashtra, Madhya Pradesh, Uttar Pradesh, Uttarakhand, Jharkhand, Andhra Pradesh, and Tamil Nadu.',
    spiritualSignificance: 'Chanting the Dwadasa Jyotirlinga Stotram and visiting these sanctums is said to destroy past karmic obstacles and grant inner peace and devotion.',
    templeIds: ['somnath-temple', 'mahakaleshwar-ujjain', 'kashi-vishwanath', 'kedarnath-temple', 'ramanathaswamy-temple'],
    itinerary: [
      { day: 'Phase 1: Western Shrines', location: 'Somnath & Nageshwar (Gujarat)', activities: 'Somnath ocean aarti, Dhwaja pooja, and Nageshwar Jyotirlinga darshan.' },
      { day: 'Phase 2: Central Shrines', location: 'Mahakaleshwar & Omkareshwar (MP)', activities: 'Pre-dawn Bhasma Aarti at Ujjain and Narmada island parikrama at Omkareshwar.' },
      { day: 'Phase 3: Northern Shrines', location: 'Kedarnath & Kashi Vishwanath', activities: 'Himalayan trek/heli-flight to Kedarnath and Ganga corridor evening aarti at Varanasi.' },
      { day: 'Phase 4: Southern Shrines', location: 'Mallikarjuna & Ramanathaswamy', activities: 'Srisailam forest hills darshan and island teertham baths at Rameswaram.' }
    ],
    travelTips: [
      'Can be performed in regional circuits (e.g. Maharashtra 5 Jyotirlingas, Central 2 Jyotirlingas, or South Jyotirlingas).',
      'Register for special aartis like Ujjain Bhasma Aarti and Kashi Mangala Aarti online at least 30 days ahead.'
    ],
    coverImage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'chota-char-dham',
    name: 'Chota Char Dham Himalayan Yatra',
    slug: 'chota-char-dham-himalayan-yatra',
    region: 'North India',
    duration: '10 - 12 Days',
    distance: '1,400 km',
    difficulty: 'High (Altitude 3,000m - 3,600m)',
    description: 'The sacred quartet of Himalayan high-altitude shrines nestled in Uttarakhand: Yamunotri (source of Yamuna), Gangotri (source of Ganga), Kedarnath (abode of Shiva), and Badrinath (abode of Vishnu).',
    spiritualSignificance: 'Cleanses the soul in the pristine sacred vibrations of the Himalayas, progressing from water purification to cosmic transcendence.',
    templeIds: ['kedarnath-temple', 'badrinath-temple'],
    itinerary: [
      { day: 'Day 1-3', location: 'Haridwar to Yamunotri', activities: 'Drive via Barkot, 6 km trek to Yamunotri temple, Surya Kund hot springs.' },
      { day: 'Day 4-5', location: 'Uttarkashi to Gangotri', activities: 'Kashi Vishwanath temple Uttarkashi, Bhagirathi riverbank pooja at Gangotri temple.' },
      { day: 'Day 6-8', location: 'Guptkashi to Kedarnath', activities: 'Sonprayag to Gaurikund, trek/heli to Kedarnath, evening aarti and night stay.' },
      { day: 'Day 9-11', location: 'Joshimath to Badrinath', activities: 'Badrinath darshan, Tapt Kund bath, Mana village, and return to Rishikesh.' }
    ],
    travelTips: [
      'Travel exclusively during open season: May to June or September to October.',
      'Mandatory registration on Uttarakhand Tourism portal.',
      'Pack high-grade thermals, waterproof trekking shoes, raincoats, and altitude sickness tablets.'
    ],
    coverImage: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'south-india-divine-circuit',
    name: 'South India Grand Heritage & Temple Circuit',
    slug: 'south-india-grand-heritage-temple-circuit',
    region: 'South India',
    duration: '8 - 10 Days',
    distance: '1,800 km',
    difficulty: 'Easy to Moderate',
    description: 'An enchanting journey through the grandest Dravidian temples of Tamil Nadu and Andhra Pradesh, featuring towering gopurams, thousand-pillared halls, and ancient rituals.',
    spiritualSignificance: 'Experience the pinnacle of temple architecture, music, bronze sculpture, and living daily spiritual traditions preserved over two millennia.',
    templeIds: ['tirupati-balaji', 'meenakshi-amman', 'brihadeeswarar-temple', 'ramanathaswamy-temple'],
    itinerary: [
      { day: 'Day 1-2', location: 'Chennai to Tirupati', activities: 'Ghat road journey, Srivari darshan at Tirumala, delicious Tirupati Laddu.' },
      { day: 'Day 3-4', location: 'Thanjavur & Kumbakonam', activities: 'UNESCO Brihadeeswarar Temple architecture study and Chola bronze galleries.' },
      { day: 'Day 5-6', location: 'Madurai', activities: 'Meenakshi Amman temple, 1,000 pillar hall museum, and night Palliarai procession.' },
      { day: 'Day 7-8', location: 'Rameswaram Island', activities: 'Pamban sea bridge, 22 teertham baths, Ramanathaswamy long corridor, Dhanushkodi.' }
    ],
    travelTips: [
      'Excellent rail and 4-lane highway connectivity throughout.',
      'Strict adherence to traditional dress codes (Dhoti / Saree) at all shrines.',
      'Best visited from October to March.'
    ],
    coverImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80'
  }
];

export const SEED_FESTIVALS = [
  {
    id: 'maha-shivaratri',
    name: 'Maha Shivaratri (The Great Night of Shiva)',
    slug: 'maha-shivaratri-festival',
    month: 'February - March (Phalguna Krishna Chaturdashi)',
    season: 'Late Winter / Early Spring',
    state: 'Pan-India',
    associatedTemples: ['kashi-vishwanath', 'mahakaleshwar-ujjain', 'somnath-temple', 'kedarnath-temple'],
    description: 'The most sacred night in the Hindu calendar celebrating the cosmic dance of Lord Shiva (Tandava) and his divine marriage with Goddess Parvati.',
    significance: 'Devotees observe continuous night-long fasting (Jagaran), meditation, and four prahara abhishekams. It is believed that astronomical planetary alignments on this night naturally boost human spiritual consciousness.',
    rituals: 'Continuous bathing of Shiva Lingam with milk, honey, sugarcane juice, bilva leaves; chantings of Om Namah Shivaya and Rudra Japa throughout the night.',
    images: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'puri-rath-yatra',
    name: 'Puri Jagannath Ratha Yatra (Chariot Festival)',
    slug: 'puri-jagannath-ratha-yatra',
    month: 'June - July (Ashadha Shukla Dwitiya)',
    season: 'Monsoon',
    state: 'Odisha',
    associatedTemples: ['jagannath-puri'],
    description: 'The grandest chariot procession on earth, where Lord Jagannath, Balabhadra, and Subhadra emerge from their sanctum onto colossal decorated wooden chariots to meet all devotees on the Grand Road (Bada Danda).',
    significance: 'The only time when the deities travel outside to visit their aunt at the Gundicha Temple for a 9-day holiday. Touching or pulling the ropes of the chariots (Nandighosha, Taladhwaja, Darpadalana) is considered the highest blessing.',
    rituals: 'Pahandi Bije (carrying deities in rhythmic swing), Chhera Pahanra (Gajapati Maharaja sweeping chariot floors with golden broom), and Bahuda Yatra (return journey).',
    images: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'tirupati-brahmotsavam',
    name: 'Srivari Annual Brahmotsavam',
    slug: 'srivari-annual-brahmotsavam-tirupati',
    month: 'September - October (Navaratri / Kanya Maas)',
    season: 'Autumn',
    state: 'Andhra Pradesh',
    associatedTemples: ['tirupati-balaji'],
    description: 'A magnificent 9-day annual festival originally instituted by Lord Brahma himself to celebrate the glory of Lord Venkateswara at Tirumala.',
    significance: 'Every day, the Malayappa Swamy deity is taken out in majestic processions mounted on different divine vahanas (vehicles) including Garuda Vahana, Sesha Vahana, and Hanumantha Vahana, witnessed by hundreds of thousands of pilgrims.',
    rituals: 'Dwajarohanam (flag hoisting), Garuda Seva (night procession attracting 500k+ devotees), Rathotsavam (Wooden Car festival), and Chakrasnanam (holy bath in Pushkarini).',
    images: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'chithirai-festival-madurai',
    name: 'Chithirai Thiruvizha (Celestial Wedding of Meenakshi)',
    slug: 'chithirai-festival-madurai-meenakshi',
    month: 'April - May (Tamil Month of Chithirai)',
    season: 'Summer',
    state: 'Tamil Nadu',
    associatedTemples: ['meenakshi-amman'],
    description: 'A month-long grand cultural celebration in Madurai reenacting the celestial wedding (Thirukalyanam) of Goddess Meenakshi with Lord Sundareshwarar, and Lord Kallazhagar\'s grand entry into the Vaigai River.',
    significance: 'Unites the Shaivite and Vaishnavite traditions of Tamil Nadu into a joyful festival of harmony, music, dance, and colossal street processions.',
    rituals: 'Kodi Yetram (Flag hoisting), Pattabhishekam (Coronation of Meenakshi), Thirukalyanam (Divine Wedding), Therottam (Chariot procession), and Kallazhagar Vaigai Aatril Ezhuntharulal.',
    images: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ambubachi-mela',
    name: 'Ambubachi Mela (Festival of Divine Fertility)',
    slug: 'ambubachi-mela-kamakhya',
    month: 'June (Assamese month of Ahar)',
    season: 'Monsoon',
    state: 'Assam',
    associatedTemples: ['kamakhya-temple'],
    description: 'Celebrated at the Kamakhya Temple in Guwahati, observing the annual menstrual cycle and creative rejuvenating power of Mother Earth.',
    significance: 'The temple remains closed for three days while Mother Earth rests. On the fourth day, the doors open to millions of sadhus, tantrics, and householders who receive the holy red cloth (Raktavastra) as an auspicious talisman.',
    rituals: 'Three-day quietude, chanting outside the hill sanctum, Snan and distribution of Angodak spring water and Prasad on the 4th day.',
    images: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'dev-deepawali-kashi',
    name: 'Dev Deepawali (Diwali of the Gods in Varanasi)',
    slug: 'dev-deepawali-varanasi-kashi',
    month: 'November (Kartik Purnima)',
    season: 'Autumn / Winter',
    state: 'Uttar Pradesh',
    associatedTemples: ['kashi-vishwanath'],
    description: 'Celebrated fifteen days after Diwali in Varanasi, commemorating Lord Shiva\'s victory over the demon Tripurasura.',
    significance: 'It is believed that all the gods and goddesses descend from heaven to bathe in the sacred Ganga on this full moon night. All 84 Ghats of Varanasi are illuminated with over one million sparkling clay oil lamps (diyas).',
    rituals: 'Maha Ganga Aarti at Dashashwamedh and Assi Ghats, lighting of million earthen lamps, floating of diyas into the river, and grand fireworks.',
    images: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80'
  }
];

export const SEED_USERS = [
  {
    id: 'user-admin-01',
    name: 'Heritage Admin',
    email: 'admin@heritage.gov.in',
    password: 'AdminPassword123!', // will be hashed by authController / seedRunner
    role: 'admin',
    favorites: ['kashi-vishwanath', 'meenakshi-amman', 'somnath-temple']
  },
  {
    id: 'user-pilgrim-01',
    name: 'Ananya Sharma',
    email: 'ananya.pilgrim@example.com',
    password: 'PilgrimPassword123!', // will be hashed by authController / seedRunner
    role: 'user',
    favorites: ['kashi-vishwanath', 'kedarnath-temple', 'tirupati-balaji']
  }
];
