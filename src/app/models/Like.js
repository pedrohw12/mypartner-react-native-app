import Sequelize, { Model } from "sequelize";

// colocar apenas as colunas que serão inseriadas pelo prórprio usuário

class Like extends Model {
  static init(sequelize) {
    super.init(
      {
        // id: Sequelize.INTEGER,
        user_liked_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User)
  }
}

export default Like;