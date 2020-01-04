import { Router } from 'express';
import { resolve } from 'path';

import DataController from './app/controllers/DataController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.sendFile(resolve(__dirname, 'views', 'index.html'));
});

routes.get('/datas', DataController.index);

export default routes;
