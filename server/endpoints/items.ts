import {Router} from 'express';

import authentication from '../middleware/authentication';
import ItemManager from '../services/itemManager';

const router = Router();

router.get('/api/items', authentication, (req, res) => {
  res.status(200).json({
    items: ItemManager.getItems(),
  });
});

router.post('/api/items', authentication, async (req, res) => {
  const {id, password} = req.body;

  if (!id || !password) {
    res.status(400).send({message: 'Mandatory parameter is missing'});
    return;
  }
  
  ItemManager.updateItemPasswordById(id, password);

  res.status(200).send();
});

export default router;
