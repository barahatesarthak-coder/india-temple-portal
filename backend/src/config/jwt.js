import jwt from 'jsonwebtoken';

const getSecret = () => {
  const secret = process.env.JWT_SECRET;
  if (!secret && process.env.NODE_ENV === 'production') {
    throw new Error('JWT_SECRET must be set in production.');
  }
  return secret || 'local-development-only-change-this-secret';
};

export const generateToken = (payload) => jwt.sign(payload, getSecret(), { expiresIn: '7d' });

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, getSecret());
  } catch {
    return null;
  }
};

export default { generateToken, verifyToken };
