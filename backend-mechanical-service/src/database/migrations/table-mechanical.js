module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('mechanical', {
      mechanical_id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      mechanical_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      mechanical_phone: {
        type: Sequelize.STRING(14),
        allowNull: false,
      },
      mechanical_email: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      mechanical_password: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      autonomous: {
        type: Sequelize.BOOLEAN(),
        allowNull: false,
      },
      mechanical_workshop: {
        type: Sequelize.STRING(255),
      },
    });
  },
  dow: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('mechanical');
  },
};