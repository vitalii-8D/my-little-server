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
      Post.belongsTo(models.User, { foreignKey: 'userId' })
      Post.hasMany(models.Comment, { foreignKey: 'postId' })
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
      title: DataTypes.STRING,
      text: DataTypes.STRING
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
