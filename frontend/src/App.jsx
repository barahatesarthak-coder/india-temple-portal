import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';

// Public Pages (1 to 14)
import HomePage from './pages/HomePage';
import ExploreTemplesPage from './pages/ExploreTemplesPage';
import TempleDetailPage from './pages/TempleDetailPage';
import CircuitsPage from './pages/CircuitsPage';
import CircuitDetailPage from './pages/CircuitDetailPage';
import FestivalsPage from './pages/FestivalsPage';
import FestivalDetailPage from './pages/FestivalDetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import FavoritesPage from './pages/FavoritesPage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Admin CMS Pages (15 to 21)
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminTemplesPage from './pages/admin/AdminTemplesPage';
import AdminAddTemplePage from './pages/admin/AdminAddTemplePage';
import AdminEditTemplePage from './pages/admin/AdminEditTemplePage';
import AdminFestivalsPage from './pages/admin/AdminFestivalsPage';
import AdminCircuitsPage from './pages/admin/AdminCircuitsPage';
import AdminCategoriesPage from './pages/admin/AdminCategoriesPage';

export default function App() {
  return (
    <Routes>
      {/* Public Routes with Navbar & Footer */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/temples" element={<ExploreTemplesPage />} />
        <Route path="/temples/:id" element={<TempleDetailPage />} />
        <Route path="/circuits" element={<CircuitsPage />} />
        <Route path="/circuits/:id" element={<CircuitDetailPage />} />
        <Route path="/festivals" element={<FestivalsPage />} />
        <Route path="/festivals/:id" element={<FestivalDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* Protected Admin CMS Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboardPage />} />
        <Route path="temples" element={<AdminTemplesPage />} />
        <Route path="temples/new" element={<AdminAddTemplePage />} />
        <Route path="temples/edit/:id" element={<AdminEditTemplePage />} />
        <Route path="festivals" element={<AdminFestivalsPage />} />
        <Route path="circuits" element={<AdminCircuitsPage />} />
        <Route path="categories" element={<AdminCategoriesPage />} />
      </Route>
    </Routes>
  );
}
