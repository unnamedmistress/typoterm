import jwt from 'jsonwebtoken';

// Your secret key for signing JWTs
const secret = 'shhhtypo';

// Middleware function for verifying JWTs
export function authMiddleware(req, res, next) {
  let token = req.body.token || req.query.token || req.headers.authorization;

  if (req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (err) {
    console.log('Invalid token');
    return res.status(401).json({ error: 'Unauthorized' });
  }
}

// Function for signing JWTs
export function signToken({ email, username, _id }) {
  const payload = { email, username, _id };
  const token = jwt.sign(payload, secret, { expiresIn: '2h' });
  return token;
}
