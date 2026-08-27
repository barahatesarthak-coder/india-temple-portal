import { verifyToken } from '../config/jwt.js';
import dataStore from '../services/dataStore.js';

export const protect = async (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Access denied. Authentication token required.'
    });
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired authentication session. Please log in again.'
    });
  }

  try {
    const user = await dataStore.findUserById(decoded.id);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'The user belonging to this token no longer exists.'
      });
    }

    // Strip sensitive fields
    req.user = {
      id: user.id || user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      favorites: user.favorites || []
    };
    next();
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Authentication verification error'
    });
  }
};

export const adminOnly = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Forbidden. Administrator privileges required to perform this action.'
    });
  }
  next();
};

export const optionalAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);
    if (decoded) {
      const user = await dataStore.findUserById(decoded.id);
      if (user) {
        req.user = {
          id: user.id || user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          favorites: user.favorites || []
        };
      }
    }
  }
  next();
};

export default { protect, adminOnly, optionalAuth };
