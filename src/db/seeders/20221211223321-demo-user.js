'use strict'

const argon2 = require('argon2')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const argon2 = require('argon2')
    const pass = await argon2.hash('pass')

    return queryInterface.bulkInsert('users', [
      {
        id: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000',
        firstName: 'Vitalik',
        lastName: 'Keks',
        email: 'keks@mail.com',
        password: pass,
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc001',
        firstName: 'Simple',
        lastName: 'User',
        email: 'user@mail.com',
        password: pass,
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc002',
        firstName: 'Other',
        lastName: 'Dude',
        email: 'dude@mail.com',
        password: pass,
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {})
  }
}
