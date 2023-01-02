'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('tags', [
      {
        id: '2d5cf22e-984c-4382-9b83-e2cb906ffd32',
        name: 'Sport',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2d5cf22e-984c-4382-9b83-e2cb906ffd33',
        name: 'Movies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2d5cf22e-984c-4382-9b83-e2cb906ffd34',
        name: 'Series',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2d5cf22e-984c-4382-9b83-e2cb906ffd35',
        name: 'IT',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2d5cf22e-984c-4382-9b83-e2cb906ffd36',
        name: 'Animals',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2d5cf22e-984c-4382-9b83-e2cb906ffd37',
        name: 'Technologies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2d5cf22e-984c-4382-9b83-e2cb906ffd38',
        name: 'Tips',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2d5cf22e-984c-4382-9b83-e2cb906ffd39',
        name: 'Music',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('tags', null, {})
  }
}
