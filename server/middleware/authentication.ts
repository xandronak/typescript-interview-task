import tokenManager from '../services/tokenManager';
import {getBearerToken} from '../utils/getBearerToken';

const authentication = (req, res, next) => {
  const token = getBearerToken(req);
  
  if (!token || !tokenManager.isTokenValid(token)) {
    res.status(401).send('Invalid token');
    return;
  }

  next();
};

export default authentication;
