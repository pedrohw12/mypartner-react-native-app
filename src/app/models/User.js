import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";

// colocar apenas as colunas que serão inseriadas pelo prórprio usuário

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL, 
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    this.addHook("beforeSave", async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
    this.hasMany(models.Like, { foreignKey: 'user_liked_id', as: 'user_liked_id' });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;