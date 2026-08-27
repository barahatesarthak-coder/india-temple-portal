import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useFavorites } from '../../context/FavoritesContext';
import { 
  Landmark, 
  Compass, 
  Calendar, 
  Heart, 
  User, 
  LogOut, 
  Menu, 
  X, 
  Shield, 
  Search, 
  Sparkles,
  Info,
  PhoneCall
} from 'lucide-react';

export default function Navbar() {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const { favoriteIds } = useFavorites();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setUserDropdownOpen(false);
    navigate('/');
  };

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
      isActive
        ? 'text-amber-700 bg-amber-50 font-semibold border-b-2 border-amber-600'
        : 'text-stone-700 hover:text-amber-800 hover:bg-stone-100'
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `block px-4 py-2.5 rounded-lg text-base font-medium transition-colors flex items-center gap-3 ${
      isActive
        ? 'text-amber-800 bg-amber-100/70 font-semibold'
        : 'text-stone-700 hover:bg-stone-100 hover:text-stone-900'
    }`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm transition-all">
      {/* Top Heritage Notice Ribbon */}
      <div className="bg-gradient-to-r from-amber-800 via-saffron-700 to-amber-900 text-amber-50 text-xs py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
        <span>India Temple Heritage & Pilgrimage Information Portal • Preserving Sacred Legacies</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-amber-700 to-saffron-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
              <Landmark className="w-6 h-6 text-amber-100" />
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-bold tracking-tight font-serif-heading text-stone-900 group-hover:text-amber-800 transition-colors">
                DEVALAYA
              </span>
              <span className="block text-[10px] sm:text-xs font-medium uppercase tracking-widest text-amber-700">
                Temple Heritage Portal
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/temples" className={navLinkClass}>
              <Search className="w-4 h-4 text-amber-600" />
              Explore Temples
            </NavLink>
            <NavLink to="/circuits" className={navLinkClass}>
              <Compass className="w-4 h-4 text-amber-600" />
              Pilgrimage Circuits
            </NavLink>
            <NavLink to="/festivals" className={navLinkClass}>
              <Calendar className="w-4 h-4 text-amber-600" />
              Festivals
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              <Info className="w-4 h-4 text-amber-600" />
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              <PhoneCall className="w-4 h-4 text-amber-600" />
              Contact
            </NavLink>
          </nav>

          {/* Right Action Icons & User Menu */}
          <div className="hidden md:flex items-center space-x-3">
            
            {/* Favorites Icon */}
            <Link
              to="/favorites"
              className="relative p-2 rounded-xl text-stone-600 hover:text-amber-700 hover:bg-amber-50 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="View Saved Favorites"
              title="Saved Temples"
            >
              <Heart className="w-5 h-5" />
              {favoriteIds.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-saffron-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm animate-scale">
                  {favoriteIds.length}
                </span>
              )}
            </Link>

            {/* Admin Quick Link */}
            {isAdmin && (
              <Link
                to="/admin"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-100/80 text-amber-900 border border-amber-300 rounded-lg text-xs font-semibold hover:bg-amber-200 transition-colors"
                title="Admin Control Panel"
              >
                <Shield className="w-3.5 h-3.5 text-amber-700" />
                <span>Admin CMS</span>
              </Link>
            )}

            {/* Authentication Buttons / Profile Dropdown */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-stone-200 hover:border-amber-400 bg-stone-50 hover:bg-white text-stone-800 text-sm font-medium transition-all focus:outline-none"
                  aria-expanded={userDropdownOpen}
                  aria-haspopup="true"
                >
                  <div className="w-7 h-7 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xs">
                    {user?.name?.charAt(0) || 'U'}
                  </div>
                  <span className="max-w-[100px] truncate">{user?.name?.split(' ')[0]}</span>
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-stone-200 py-2 z-50 animate-fadeIn">
                    <div className="px-4 py-2 border-b border-stone-100">
                      <p className="text-xs text-stone-500 font-medium">Signed in as</p>
                      <p className="text-sm font-bold text-stone-900 truncate">{user?.name}</p>
                      <p className="text-xs text-stone-500 truncate">{user?.email}</p>
                      {isAdmin && (
                        <span className="inline-block mt-1 px-2 py-0.5 bg-amber-100 text-amber-800 rounded text-[10px] font-semibold">
                          Administrator
                        </span>
                      )}
                    </div>
                    
                    <Link
                      to="/profile"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-stone-700 hover:bg-stone-50 hover:text-amber-800"
                    >
                      <User className="w-4 h-4 text-stone-500" />
                      User Profile
                    </Link>

                    <Link
                      to="/favorites"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-stone-700 hover:bg-stone-50 hover:text-amber-800"
                    >
                      <Heart className="w-4 h-4 text-rose-500" />
                      Saved Temples ({favoriteIds.length})
                    </Link>

                    {isAdmin && (
                      <Link
                        to="/admin"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-amber-800 hover:bg-amber-50 font-medium"
                      >
                        <Shield className="w-4 h-4 text-amber-600" />
                        Admin Dashboard
                      </Link>
                    )}

                    <div className="border-t border-stone-100 my-1"></div>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 font-medium"
                    >
                      <LogOut className="w-4 h-4 text-rose-500" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-semibold text-stone-700 hover:text-amber-800 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-amber-700 to-saffron-600 text-white hover:from-amber-800 hover:to-saffron-700 shadow-sm transition-all"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <Link
              to="/favorites"
              className="p-2 text-stone-700 relative"
              aria-label="Favorites"
            >
              <Heart className="w-6 h-6" />
              {favoriteIds.length > 0 && (
                <span className="absolute top-0 right-0 bg-saffron-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {favoriteIds.length}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:bg-stone-100 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 pt-2 pb-6 space-y-2 shadow-lg animate-fadeIn">
          <NavLink to="/" end onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
            <Landmark className="w-5 h-5 text-amber-700" />
            Home
          </NavLink>
          <NavLink to="/temples" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
            <Search className="w-5 h-5 text-amber-700" />
            Explore Temples
          </NavLink>
          <NavLink to="/circuits" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
            <Compass className="w-5 h-5 text-amber-700" />
            Pilgrimage Circuits
          </NavLink>
          <NavLink to="/festivals" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
            <Calendar className="w-5 h-5 text-amber-700" />
            Festivals
          </NavLink>
          <NavLink to="/favorites" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
            <Heart className="w-5 h-5 text-rose-600" />
            Saved Temples ({favoriteIds.length})
          </NavLink>
          <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
            <Info className="w-5 h-5 text-amber-700" />
            About
          </NavLink>
          <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
            <PhoneCall className="w-5 h-5 text-amber-700" />
            Contact
          </NavLink>

          {isAdmin && (
            <NavLink to="/admin" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
              <Shield className="w-5 h-5 text-amber-700" />
              Admin Portal
            </NavLink>
          )}

          <div className="pt-4 border-t border-stone-200">
            {isAuthenticated ? (
              <div className="space-y-2">
                <div className="px-4 py-2 bg-stone-50 rounded-lg">
                  <p className="text-sm font-bold text-stone-900">{user?.name}</p>
                  <p className="text-xs text-stone-500">{user?.email}</p>
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-rose-600 font-semibold flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 pt-2">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center py-2.5 px-4 rounded-xl text-sm font-semibold border border-stone-300 text-stone-800"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center py-2.5 px-4 rounded-xl text-sm font-semibold bg-amber-700 text-white"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
