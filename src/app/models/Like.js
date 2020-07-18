import Sequelize, { Model } from "sequelize";

// colocar apenas as colunas que serão inseriadas pelo prórprio usuário

class Like extends Model {
  static init(sequelize) {
    super.init(
      {
        id: Sequelize.VIRTUAL,
        user_likes_id: Sequelize.VIRTUAL,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Like;