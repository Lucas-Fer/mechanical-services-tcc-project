module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      user_id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER(),
      },
      user_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      user_phone: {
        type: Sequelize.STRING(14),
        allowNull: false,
      },
      user_email: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      user_password: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
    });
  },
  dow: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Users');
  },
};