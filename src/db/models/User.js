'use strict'
const { Model } = require('sequelize')

const { USER_ROLES } = require('../../enum')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post, { foreignKey: 'userId', as: 'posts' })
      User.hasMany(models.Comment, { foreignKey: 'userId', as: 'comments' })
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.ENUM,
        values: Object.values(USER_ROLES),
        allowNull: false,
        defaultValue: USER_ROLES.USER
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      paranoid: true
    }
  )

  return User
}
