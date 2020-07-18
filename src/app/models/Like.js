import Sequelize, { Model } from "sequelize";

// colocar apenas as colunas que serão inseriadas pelo prórprio usuário

class Like extends Model {
  static init(sequelize) {
    super.init(
      {
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_liked_id' })
    this.belongsTo(models.User, { foreignKey: 'user_id' })
  }
}

export default Like;