import jwt_decode from 'jwt-decode';
import { sign, verify } from 'jwt-lite';

const secret = 'mysecrettypo';
const expiration = 7200; // 2 hours in seconds

export default function authMiddleware(req, res, next) {
  let token = req.body.token || req.query.token || req.headers.authorization;

  if (req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const decodedToken = verify(token, secret);
    req.user = decodedToken;
    next();
  } catch (err) {
    console.log('Invalid token');
    return res.status(401).json({ error: 'Unauthorized' });
  }
}

export function signToken({ email, username, _id }) {
  const payload = { email, username, _id, exp: Math.floor(Date.now() / 1000) + expiration };
  return sign(payload, secret);
}

