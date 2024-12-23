'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Chapter', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      ranobe_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      chapter_number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      chapter_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      chapter_text: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },

  down(queryInterface) {
    return queryInterface.dropTable('Chapter');
  },
};
