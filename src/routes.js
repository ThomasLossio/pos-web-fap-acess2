import { Router } from 'express';
import Data from './app/models/Data';

const routes = new Router();

routes.get('/datas', async (req, res) => {
  const datas = await Data.findAll({
    limit: 10,
  });
  return res.json({ datas });
});

export default routes;
