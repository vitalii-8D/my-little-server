'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        id: 'd7550a4b-3b2b-4b81-ba03-62f0ad52c371',
        title: 'Amazing job',
        userId: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000',
        text: 'Some text,Some text,Some text,Some text,Some textSome textSome textSome textSome textSome textSome textSome text,Some text,Some textSome textSome text'
      },
      {
        id: 'd7550a4b-3b2b-4b81-ba03-62f0ad52c372',
        title: 'Other title',
        userId: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000',
        text: 'Some text,Some text,Some text,Some text,Some textSome textSome textSome textSome textSome textSome textSome text,Some text,Some textSome textSome text'
      },
      {
        id: 'd7550a4b-3b2b-4b81-ba03-62f0ad52c373',
        title: 'Interesting post',
        userId: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc001',
        text: 'Some text,Some text,Some text,Some text,Some textSome textSome textSome textSome textSome textSome textSome text,Some text,Some textSome textSome text'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
