'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('PostTags', [
      {
        postId: 'd7550a4b-3b2b-4b81-ba03-62f0ad52c371',
        tagId: '2d5cf22e-984c-4382-9b83-e2cb906ffd32',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 'd7550a4b-3b2b-4b81-ba03-62f0ad52c371',
        tagId: '2d5cf22e-984c-4382-9b83-e2cb906ffd33',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 'd7550a4b-3b2b-4b81-ba03-62f0ad52c371',
        tagId: '2d5cf22e-984c-4382-9b83-e2cb906ffd34',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 'd7550a4b-3b2b-4b81-ba03-62f0ad52c373',
        tagId: '2d5cf22e-984c-4382-9b83-e2cb906ffd34',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 'd7550a4b-3b2b-4b81-ba03-62f0ad52c373',
        tagId: '2d5cf22e-984c-4382-9b83-e2cb906ffd38',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 'd7550a4b-3b2b-4b81-ba03-62f0ad52c372',
        tagId: '2d5cf22e-984c-4382-9b83-e2cb906ffd38',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('PostTags', null, {})
  }
}
