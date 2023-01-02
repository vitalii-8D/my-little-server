const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class PostTag extends Model {
    static associate(models) {
      PostTag.belongsTo(models.Post, { foreignKey: 'postId' })
      PostTag.belongsTo(models.Tag, { foreignKey: 'tagId' })
    }
  }
  PostTag.init(
    {
      postId: {
        type: DataTypes.UUID,
        primaryKey: false,
        references: {
          model: 'posts',
          key: 'id'
        }
      },
      tagId: {
        type: DataTypes.UUID,
        primaryKey: false,
        references: {
          model: 'tags',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'PostTag',
      tableName: 'PostTags',
      paranoid: true
    }
  )

  return PostTag
}
