'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Authors', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      name_original: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
        },
      },
      name_en: {
        type: Sequelize.STRING,
      },
      name_local: {
        type: Sequelize.STRING,
      },
      description: {
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
    return queryInterface.dropTable('Authors');
  },
};
