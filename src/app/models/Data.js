import Sequelize, { Model } from 'sequelize';

class Data extends Model {
  static init(sequelize) {
    super.init(
      {
        year: Sequelize.STRING,
        age_range: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        area: Sequelize.STRING,
        gender: Sequelize.STRING,
        color: Sequelize.STRING,
        absolute_value: Sequelize.DOUBLE,
        percentual_value: Sequelize.DOUBLE,
        latitude: Sequelize.STRING,
        longitude: Sequelize.STRING,
      },
      {
        sequelize,
        modelName: 'datas',
      }
    );
  }
}

export default Data;
