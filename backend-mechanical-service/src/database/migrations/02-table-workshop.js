module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('workshops', {
      workshop_id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER(),
      },
      workshop_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      workshop_email: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      workshop_password: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      workshop_location: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
    });
  },
  dow: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('workshops');
  },
};