module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('mechanical_service', {
      service_id: {
        type: Sequelize.INTEGER(),
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        foreignKey: true,
        references: {
          model: 'services',
          key: 'service_id',
        },
      },
      mechanical_id: {
        type: Sequelize.INTEGER(),
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        foreignKey: true,
        references: {
          model: 'mechanicals',
          key: 'mechanical_id',
        },
      },
      status_service: {
        type: Sequelize.ENUM('PROGRESS', 'DONE', 'CANCELED'),
      },
    });
  },
  dow: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('mechanical_service');
  },
};