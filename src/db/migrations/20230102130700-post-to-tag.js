'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PostTags', {
      postId: {
        type: Sequelize.UUID,
        references: {
          model: 'posts',
          key: 'id'
        },
        allowNull: false
      },
      tagId: {
        type: Sequelize.UUID,
        references: {
          model: 'tags',
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PostTags')
  }
}
