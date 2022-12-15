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
      User.hasMany(models.Post, { foreignKey: 'userId' })
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
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
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
