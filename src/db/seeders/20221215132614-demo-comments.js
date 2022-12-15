'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('comments', [
      {
        id: '2d5cf22e-984c-4382-9b83-e2cb906ffd25',
        postId: 'd7550a4b-3b2b-4b81-ba03-62f0ad52c371',
        text: 'Some comment ,Some comment ,Some comment ,Some comment ,Some comment Some comment Some comment Some comment Some comment Some comment ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2d5cf22e-984c-4382-9b83-e2cb906ffd26',
        postId: 'd7550a4b-3b2b-4b81-ba03-62f0ad52c371',
        text: 'Some comment ,Some comment ,Some comment ,Some comment ,Some comment Some comment Some comment Some comment Some comment Some comment ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2d5cf22e-984c-4382-9b83-e2cb906ffd27',
        postId: 'd7550a4b-3b2b-4b81-ba03-62f0ad52c371',
        text: 'Some comment ,Some comment ,Some comment, Some comment Some comment ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2d5cf22e-984c-4382-9b83-e2cb906ffd28',
        postId: 'd7550a4b-3b2b-4b81-ba03-62f0ad52c373',
        text: 'Some comment ,Some comment ,Some comment, Some comment Some comment ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2d5cf22e-984c-4382-9b83-e2cb906ffd29',
        postId: 'd7550a4b-3b2b-4b81-ba03-62f0ad52c373',
        text: 'Some comment ,Some comment ,Some comment, Some comment Some comment ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2d5cf22e-984c-4382-9b83-e2cb906ffd20',
        postId: 'd7550a4b-3b2b-4b81-ba03-62f0ad52c372',
        text: 'Some comment ,Some comment ,Some comment, Some comment Some comment ',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('comments', null, {})
  }
}
