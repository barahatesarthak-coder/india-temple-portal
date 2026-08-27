# 🕉️ India Temple Heritage & Pilgrimage Information Portal (Devalaya)

[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-emerald.svg)](https://nodejs.org)
[![React Version](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-sky.svg)](https://tailwindcss.com)
[![Incredible India](https://img.shields.io/badge/Heritage-Incredible%20India-orange.svg)](https://www.incredibleindia.gov.in)

---

## 1. Project Title
**India Temple Heritage & Pilgrimage Information Portal (Devalaya)**  
*Unified Mentor Internship Domain: Frontend Development & Full-Stack Integration*

---

## 2. Project Overview
The **India Temple Heritage & Pilgrimage Information Portal** is a centralized, culturally respectful digital repository and discovery platform that provides comprehensive, verified information about ancient and sacred temples across all 28 states and union territories of India.

The platform bridges centuries of architectural, spiritual, and logistical knowledge by documenting:
- Historical significance, founding dynasties, and epigraphical origins
- Sacred rituals, Vedic pooja timetables, and pre-dawn Aartis
- Annual festival calendars, rath yatras, and auspicious tithis
- Step-by-step pilgrimage circuits (Char Dham, 12 Jyotirlingas, Shakti Peethas)
- Daily darshan hours, queue guidelines, and biometric pass requirements
- Mandatory traditional dress codes and sanctum rules
- Nearby pilgrim facilities (cloakrooms, lockers, accommodation, transport)

---

## 3. Problem Statement
Pilgrims, tourists, cultural enthusiasts, and historians frequently face severe challenges when planning visits:
1. **Fragmented & Unverified Data**: Key details regarding darshan timings and pooja schedules are scattered across unverified personal blogs.
2. **Lack of Ritual Clarity**: Inaccurate or outdated information on specific morning and evening aartis.
3. **Logistical Blindspots**: Missing travel routes, dress codes, luggage rules, and nearby lodging amenities.
4. **Absence of a Centralized Standard**: No unified national repository connecting regional devasthanams into a single accessible interface.

---

## 4. Objectives

### Primary Objectives
- Create a centralized, structured digital standard for Indian temple heritage.
- Provide accurate, verified pilgrimage planning and visitor information.
- Enable location-based (State/City/Region) and theological (Deity/Category) discovery.
- Promote national cultural preservation and archaeological awareness.

### Secondary Objectives
- Streamline pilgrimage itinerary planning for families, elderly devotees, and tourists.
- Support national heritage tourism aligned with Incredible India initiatives.
- Ensure scalable architectural expansion across all Indian states and districts.

---

## 5. Scope of Work

### In-Scope (Fully Implemented)
- ✅ Responsive web application (Desktop, Laptop, Tablet, and Mobile views)
- ✅ State-wise and city-wise interactive temple listings
- ✅ Comprehensive temple history, architecture, and religious significance documentation
- ✅ Daily darshan timings, aarti schedules, and traditional dress code guides
- ✅ Multi-faceted search and debounced query engine (State, City, Deity, Category, Region)
- ✅ Dedicated Pilgrimage Circuits section with day-by-day itineraries and route logistics
- ✅ Sacred Festival Calendars with monthly and regional filters
- ✅ Authenticated user collection for saving bookmarked favorites
- ✅ Complete Administrator Content Management System (CMS) with approval/rejection workflows
- ✅ Architectural Category and Geographic Region management

### Out-of-Scope (Future Enhancements)
- ❌ Online donation or financial transaction processing
- ❌ Direct puja / archana ticket booking
- ❌ Live video streaming of darshan
- ❌ Native iOS / Android binary apps (Web responsive platform used)
- ❌ Multilingual voice assistance

---

## 6. Key Features

| Module | Features |
| :--- | :--- |
| **Discovery & Search** | Live debounced search, multi-criteria filters (State, City, Deity, Architectural Style, Category), pagination, grid/list view toggle. |
| **Temple Heritage View** | Photo gallery, historical origin, architecture notes, daily aarti timetables, dress code alerts, transport options, devasthanam contacts. |
| **Pilgrimage Circuits** | Curated yatra routes (Char Dham, 12 Jyotirlingas, Chota Char Dham, South India Divine Tour) with duration, distance, and day-by-day activities. |
| **Festival Calendar** | Detailed festive descriptions, months/seasons, associated shrines, and sacred rituals. |
| **User & Favorites** | JWT authentication, profile dashboard, instant bookmarked shrines syncing across sessions. |
| **Admin CMS Hub** | Role-based access control, analytics dashboard, CRUD for temples/festivals/circuits, 1-click Approve/Reject review queue. |

---

## 7. Technology Stack

- **Frontend**: React 18.3, Vite 6, Tailwind CSS 3.4, React Router DOM 6.28, Lucide React Icons
- **Backend**: Node.js, Express.js 4.21, CORS, Dotenv
- **Database Layer**: MongoDB, Mongoose 8.9 + Seamless built-in In-Memory / JSON DataStore fallback for 100% zero-configuration evaluation
- **Authentication**: JSON Web Tokens (JWT), Bcrypt.js password hashing
- **Styling Tokens**: Sacred Saffron (`#ea580c`), Warm Amber (`#d97706`), Deep Temple Crimson (`#881337`), Sandalwood (`#fef3c7`), Slate Charcoal (`#0f172a`)

---

## 8. System Architecture

```
┌────────────────────────────────────────────────────────┐
│               React 18 Frontend Client                 │
│  (React Router, Context API, Tailwind CSS, Lucide)     │
└───────────────────────────┬────────────────────────────┘
                            │ HTTP / REST (JWT Bearer)
                            ▼
┌────────────────────────────────────────────────────────┐
│               Express.js RESTful API                   │
│   (Auth Middleware, Admin Authorization, Error Handler)│
├────────────────────────────────────────────────────────┤
│ Controllers:                                           │
│  • Auth • Temples • Festivals • Circuits • Admin       │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│             Data Persistence Service                   │
│  • Mongoose ODM (when MongoDB URI connected)           │
│  • Seamless Embedded Memory Store (zero-setup fallback)│
└────────────────────────────────────────────────────────┘
```

---

## 9. Project Structure

```
india-temple-portal/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── admin/ (AdminSidebar)
│   │   │   ├── circuits/ (CircuitCard)
│   │   │   ├── common/ (Navbar, Footer, LoadingSkeleton, EmptyState, ErrorState, Pagination)
│   │   │   ├── festivals/ (FestivalCard)
│   │   │   └── temples/ (TempleCard, FilterPanel)
│   │   ├── context/ (AuthContext, FavoritesContext, ToastContext)
│   │   ├── layouts/ (PublicLayout, AdminLayout)
│   │   ├── pages/ (All 21 specified public & admin pages)
│   │   ├── services/ (api.js, authService, templeService, festivalService, circuitService, adminService)
│   │   ├── App.jsx (React Router configuration)
│   │   ├── index.css (Tailwind & custom design tokens)
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── backend/
│   ├── src/
│   │   ├── config/ (db.js, jwt.js)
│   │   ├── controllers/ (auth, temple, festival, circuit, admin, favorite, meta)
│   │   ├── data/ (seedData.js with verified Indian heritage dataset)
│   │   ├── middleware/ (authMiddleware, errorMiddleware)
│   │   ├── models/ (Temple, Festival, Circuit, Category, Region, User)
│   │   ├── routes/ (auth, temple, festival, circuit, user, admin, meta)
│   │   ├── services/ (dataStore.js)
│   │   └── server.js
│   ├── package.json
│   └── .env.example
├── README.md
├── PROJECT_REPORT.md
├── .gitignore
└── package.json (root scripts)
```

---

## 10. Database Models & Schema

1. **Temple**: `name`, `hindiName`, `slug`, `deity`, `state`, `city`, `region`, `category`, `period`, `architecturalStyle`, `shortDescription`, `historicalBackground`, `historicalSignificance`, `religiousSignificance`, `architecture`, `darshanTimings`, `poojaSchedule[]`, `rituals`, `festivals[]`, `dressCode`, `visitorGuidelines[]`, `bestTimeToVisit`, `transportation`, `accommodation`, `nearbyFacilities[]`, `images[]`, `featured`, `status` (`approved` | `pending` | `rejected`), `contact`.
2. **Festival**: `name`, `slug`, `month`, `season`, `state`, `associatedTemples[]`, `description`, `significance`, `rituals`, `images`.
3. **Circuit**: `name`, `slug`, `region`, `duration`, `distance`, `difficulty`, `description`, `spiritualSignificance`, `templeIds[]`, `itinerary[]`, `travelTips[]`, `coverImage`.
4. **Category**: `id`, `name`, `description`.
5. **Region**: `id`, `name`, `states[]`.
6. **User**: `name`, `email`, `password`, `role` (`user` | `admin`), `favorites[]`.

---

## 11. API Documentation

### Public Endpoints
- `GET /api/temples` — Retrieve paginated temples (supports `query`, `state`, `city`, `deity`, `category`, `region`, `sort`, `page`, `limit`)
- `GET /api/temples/featured` — Retrieve curated featured temple shrines
- `GET /api/temples/:id` — Retrieve comprehensive details for a temple by ID or slug
- `GET /api/temples/states` — Retrieve list of states with documented temples
- `GET /api/temples/cities` — Retrieve cities list (optionally filtered by `?state=`)
- `GET /api/festivals` — Retrieve all festival records (supports `?month=` and `?state=`)
- `GET /api/festivals/:id` — Retrieve festival details
- `GET /api/circuits` — Retrieve pilgrimage routes (supports `?region=`)
- `GET /api/circuits/:id` — Retrieve circuit itinerary and included temples
- `GET /api/meta` — Retrieve combined metadata for search and filter controls

### Authentication Endpoints
- `POST /api/auth/register` — Create new pilgrim account
- `POST /api/auth/login` — Sign in and receive JWT token
- `GET /api/auth/me` — Retrieve current authenticated user profile

### User Endpoints (Protected)
- `GET /api/users/favorites` — Retrieve bookmarked temples for logged-in user
- `POST /api/users/favorites/:templeId` — Add temple to saved favorites
- `DELETE /api/users/favorites/:templeId` — Remove temple from favorites

### Admin CMS Endpoints (Admin Privileges Required)
- `GET /api/admin/dashboard` — Summary analytics, metrics, and state breakdown
- `POST /api/temples` — Create new temple listing
- `PUT /api/temples/:id` — Update existing temple record
- `DELETE /api/temples/:id` — Delete temple record
- `PATCH /api/temples/:id/approve` — Approve pending temple listing
- `PATCH /api/temples/:id/reject` — Reject temple listing
- `POST /api/festivals`, `PUT /api/festivals/:id`, `DELETE /api/festivals/:id`
- `POST /api/circuits`, `PUT /api/circuits/:id`, `DELETE /api/circuits/:id`

---

## 12. Authentication & Demo Access

The portal provides pre-configured credentials for quick evaluation:

| Role | Email | Password | Access Capabilities |
| :--- | :--- | :--- | :--- |
| **Administrator** | `admin@heritage.gov.in` | `AdminPassword123!` | Full CMS access, CRUD on all entities, Temple approvals |
| **Pilgrim (User)** | `ananya.pilgrim@example.com` | `PilgrimPassword123!` | Public exploration, Saving favorites, Profile view |

> **Quick Login**: The `/login` page includes **1-Click Demo Buttons** (`Demo Admin` & `Demo Pilgrim`) for rapid testing without typing.

---

## 13. Admin Management Workflow

1. Log in with Administrator credentials.
2. Navigate to **Admin Dashboard** (`/admin`) to view system metrics and review queue.
3. In **Temple Management** (`/admin/temples`):
   - Review pending submissions
   - Click **Approve** (✓) to publish a temple listing live to the public portal
   - Click **Reject** (✕) to withdraw a listing
   - Click **Edit** to update architectural notes or darshan schedules
   - Click **Add New Temple** (`/admin/temples/new`) to draft a new listing

---

## 14. Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org) (v18.0.0 or higher)
- [npm](https://www.npmjs.com) (v9.0.0 or higher)
- (Optional) [MongoDB](https://www.mongodb.com) instance

### Step-by-Step Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/india-temple-portal.git
cd india-temple-portal

# 2. Install backend dependencies
cd backend
npm install

# 3. Install frontend dependencies
cd ../frontend
npm install
```

---

## 15. Environment Variables

### Backend (`backend/.env`)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/india_temple_heritage
JWT_SECRET=india_temple_heritage_secret_jwt_key_2026
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

### Frontend (`frontend/.env`)
```env
VITE_API_URL=http://localhost:5000/api
```

---

## 16. Running the Project

Open two terminal windows:

### Terminal 1: Start Backend Server
```bash
cd backend
npm run dev
# Backend runs at http://localhost:5000
```

### Terminal 2: Start Frontend Development Server
```bash
cd frontend
npm run dev
# Frontend runs at http://localhost:5173
```

---

## 17. Testing & Verification

### Automated Verification
```bash
# Verify Frontend Production Build
cd frontend
npm run build
```

### End-to-End User Verification Journey
1. Open `http://localhost:5173`.
2. Search for `"Kashi"` in the hero search box and click **Explore**.
3. Apply the **State Filter** (e.g. `Tamil Nadu`) to view Madurai Meenakshi, Brihadeeswarar, and Ramanathaswamy.
4. Click on a temple to view its detailed **Darshan Timetable**, **Pooja Schedules**, and **Dress Code**.
5. Click **Save Temple** to add it to your bookmarked collection.
6. Open **Pilgrimage Circuits** (`/circuits`) and review the **Char Dham Yatra** itinerary.
7. Click **Sign In** and use the **Demo Admin** button.
8. Verify access to the **Admin CMS Dashboard** (`/admin`) and review pending listings.

---

## 18. Performance Optimization
- **Page Load Time Target**: $\le 3\text{ seconds}$
- **Debounced Search**: Search bar uses a 400ms debounce timer to prevent redundant API queries.
- **Image Optimization**: WebP and high-efficiency CDN asset loading with graceful fallbacks.
- **Client-Side Skeletons**: Skeleton loaders prevent layout shifts (CLS minimization).
- **Bundle Tree-Shaking**: Vite production bundle optimized under 94 kB gzipped.

---

## 19. Accessibility (a11y)
- Semantic HTML5 structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- ARIA live regions and `role="status"` for Toast notifications.
- High-contrast color palette adhering to WCAG 2.1 AA standards.
- Visible focus rings (`:focus-visible`) for keyboard navigation.
- Accessible form labels and descriptive image `alt` attributes.

---

## 20. Deployment Guidelines

### Frontend Deployment (Vercel / Netlify)
1. Set Root Directory to `frontend`.
2. Build Command: `npm run build`.
3. Output Directory: `dist`.
4. Add Environment Variable: `VITE_API_URL=https://your-backend-api.onrender.com/api`.

### Backend Deployment (Render / Railway / AWS)
1. Set Root Directory to `backend`.
2. Build Command: `npm install`.
3. Start Command: `node src/server.js`.
4. Configure Environment Variables: `PORT`, `MONGODB_URI`, `JWT_SECRET`, `NODE_ENV=production`.

---

## 21. Known Limitations
- Current version focuses exclusively on web browsers (desktop and mobile responsive); native iOS/Android apps are not included in Phase 1.
- Temple darshan timings are verified against latest devasthanam publications; occasional adjustments during solar/lunar eclipses are updated manually by administrators.

---

## 22. Future Enhancements
- 🔮 **Direct Darshan & Puja Token Booking** integration with state devasthanam APIs.
- 🔮 **Donation & Seva Sponsorship Modules** with secure payment gateways.
- 🔮 **Multilingual Indian Languages Support** (Hindi, Tamil, Telugu, Odia, Gujarati, Marathi, Bengali, Kannada).
- 🔮 **Interactive 3D Temple Architecture Models** & Virtual Reality Parikrama.
- 🔮 **Live Aarti Audio/Video Feeds** from sanctioned temple trusts.

---

*Submitted as part of the Unified Mentor Web Development Internship Program.*
