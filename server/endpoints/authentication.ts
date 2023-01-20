import {Router} from 'express';

import {getUsersList} from '../data';
import timeout from '../middleware/timeout';
import tokenManager from '../services/tokenManager';
import passwordManager from '../services/passwordManager';
import {getBearerToken} from '../utils/getBearerToken';

const router = Router();

// GET changed to POST for login/logout methods
// It's dangerous to send any kind of data over GET

// if password and email is correct returns new token
router.post('/api/login', timeout, async (req, res) => {
  const {username, password} = req.body;

  const usersList = await getUsersList();
  const user = usersList.find((user) => (user.username === username));
  const passwordsMatched = !!user && passwordManager.verifyPassword(password, user.password);

  if (passwordsMatched) {
    const token = tokenManager.generateToken();

    tokenManager.addToken(token, user.id);
  
    return res.status(200).json({
      id: user.id,
      email: user.email,
      token,
    });
  }

  res.status(401).send({
    message: 'Username or password is incorrect. Please check the data you entered',
  });
});

// deletes token
router.post('/api/logout', timeout, (req, res) => {
  const token = getBearerToken(req);

  if (token) {
    tokenManager.removeToken(token);
    res.status(200).send();
    return;
  }

  res.status(401).send();
});

// return token owner info
router.get('/api/user', async (req, res) => {
  const token = getBearerToken(req);

  if (token) {
    const usersList = await getUsersList();

    const tokenOwnerId = tokenManager.getTokenOwnerId(token);
    const tokenOwner = tokenOwnerId ? usersList.find((user) => (
      user.id === tokenOwnerId
    )) : null;

    if (tokenOwner) {
      return res.status(200).json({
        id: tokenOwner.id,
        username: tokenOwner.username,
        email: tokenOwner.email,
      });
    }
  }

  res.status(401).send();
});

export default router;
