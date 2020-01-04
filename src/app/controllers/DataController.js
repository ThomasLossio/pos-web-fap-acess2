import { Op } from 'sequelize';
import Data from '../models/Data';

const operatorAliases = {
  $or: Op.or,
};

class DataController {
  async index(req, res) {
    let where = {};
    const { page = 1, search } = req.query;

    if (search) {
      where = {
        [Op.or]: [
          { age_range: search },
          { city: search },
          { state: search },
          { area: search },
          { gender: search },
          { color: search },
        ],
      };
    }

    const datas = await Data.findAll({
      where,

      limit: 10,
      offset: (page - 1) * 10,
    });

    return res.json(datas);

    /*    const datas = await Data.findAll({
      limit: 100,
      offset: (page - 1) * 100,
    });

    return res.json(datas); */
  }
}

export default new DataController();
