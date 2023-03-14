import jwt_decode from 'jwt-decode';
const secret = 'mysecrettypo';
const expiration = '2h';

export default function authMiddleware(req, res, next) {
  let token = req.body.token || req.query.token || req.headers.authorization;

  if (req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const decodedToken = jwt_decode(token);
    const { data } = decodedToken;
    req.user = data;
    next();
  } catch (err) {
    console.log('Invalid token');
    return res.status(401).json({ error: 'Unauthorized' });
  }
}

export function signToken({ email, username, _id }) {
  const payload = { email, username, _id };
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
}
