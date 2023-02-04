'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Replies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Users' }
      },
      tweetId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Tweets' }
      },
      commentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Comments' }
      },
      reply: {
        type: Sequelize.STRING(180),
        allowNull: false

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Replies');
  }
};
