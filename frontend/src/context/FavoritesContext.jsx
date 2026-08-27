import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import favoriteService from '../services/favoriteService';

const FavoritesContext = createContext(null);

export const FavoritesProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [loading, setLoading] = useState(false);

  // Sync favorites on user auth change
  useEffect(() => {
    const fetchFavorites = async () => {
      if (isAuthenticated) {
        try {
          setLoading(true);
          const res = await favoriteService.getFavorites();
          if (res.data) {
            setFavorites(res.data);
            setFavoriteIds(res.data.map(t => t.id || t.slug || t._id));
          }
        } catch (err) {
          console.warn('Failed to load favorites from backend, using local state:', err.message);
          if (user?.favorites) {
            setFavoriteIds(user.favorites);
          }
        } finally {
          setLoading(false);
        }
      } else {
        // Fallback to localStorage for guest experience
        try {
          const guestFavs = JSON.parse(localStorage.getItem('temple_guest_favorites') || '[]');
          setFavoriteIds(guestFavs);
        } catch {
          setFavoriteIds([]);
        }
        setFavorites([]);
      }
    };

    fetchFavorites();
  }, [isAuthenticated, user]);

  const isFavorite = (templeIdOrSlug) => {
    return favoriteIds.includes(templeIdOrSlug);
  };

  const toggleFavorite = async (temple) => {
    const templeKey = temple.id || temple.slug || temple._id;
    const exists = isFavorite(templeKey);

    if (isAuthenticated) {
      try {
        if (exists) {
          await favoriteService.removeFavorite(templeKey);
          setFavoriteIds(prev => prev.filter(id => id !== templeKey));
          setFavorites(prev => prev.filter(t => (t.id || t.slug || t._id) !== templeKey));
        } else {
          await favoriteService.addFavorite(templeKey);
          setFavoriteIds(prev => [...prev, templeKey]);
          setFavorites(prev => [...prev, temple]);
        }
      } catch (err) {
        console.error('Error updating favorite on server:', err);
      }
    } else {
      // Guest mode
      let updated;
      if (exists) {
        updated = favoriteIds.filter(id => id !== templeKey);
      } else {
        updated = [...favoriteIds, templeKey];
      }
      setFavoriteIds(updated);
      localStorage.setItem('temple_guest_favorites', JSON.stringify(updated));
    }
  };

  const value = {
    favorites,
    favoriteIds,
    loading,
    isFavorite,
    toggleFavorite
  };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export default FavoritesContext;
