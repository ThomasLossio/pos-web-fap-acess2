import Sequelize from 'sequelize';

import Data from '../app/models/Data';

import databaseConfig from '../config/database';

const models = [Data];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
