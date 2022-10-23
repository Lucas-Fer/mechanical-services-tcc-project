module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Mechanical_Service', {
      service_id: {
        type: Sequelize.INTEGER(),
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        foreignKey: true,
        references: {
          model: 'Services',
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
          model: 'Mechanical',
          key: 'mechanical_id',
        },
      },
      status_service: {
        type: Sequelize.ENUM('PROGRESS', 'DONE', 'CANCELED'),
      },
    });
  },
  dow: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Mechanical_Service');
  },
};