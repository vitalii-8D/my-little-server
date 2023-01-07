'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, { foreignKey: 'userId', as: 'user' })
      Post.hasMany(models.Comment, { foreignKey: 'postId', as: 'comments' })
      Post.belongsToMany(models.Tag, {
        through: models.PostTag,
        foreignKey: 'postId',
        as: 'tags',
        otherKey: 'tagId'
      })
    }
  }
  Post.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Post',
      tableName: 'posts',
      paranoid: true
    }
  )
  return Post
}
