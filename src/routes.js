import { Router } from 'express';
import Data from './app/models/Data';

const routes = new Router();

routes.get('/datas', async (req, res) => {
  const where = {};
  const { page = 1 } = req.query;

  if (req.query.age_range) {
    where.age_range = req.query.age_range;
  }

  if (req.query.city) {
    where.city = req.query.city;
  }

  if (req.query.state) {
    where.state = req.query.state;
  }

  if (req.query.area) {
    where.area = req.query.area;
  }

  if (req.query.gender) {
    where.gender = req.query.gender;
  }

  if (req.query.color) {
    where.color = req.query.color;
  }

  const datas = await Data.findAll({
    where,
    limit: 10,
    offset: (page - 1) * 10,
  });
  return res.json({ datas });
});

export default routes;
