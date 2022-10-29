module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('services', {
      service_id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER(),
      },
      user_id: {
        type: Sequelize.INTEGER(),
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        foreignKey: true,
        references: {
          model: 'users',
          key: 'user_id',
        },
      },
      description: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      vehicle_model: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      vehicle_brand: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      vehicle_year: {
        type: Sequelize.INTEGER(),
        allowNull: false,
      },
      mechanical_id: {
        type: Sequelize.INTEGER(),
        allowNull: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        foreignKey: true,
        references: {
          model: 'mechanicals',
          key: 'mechanical_id',
        },
      },
      status: {
        type: Sequelize.ENUM('OPEN', 'PROGRESS', 'COMPLETED'),
      },
    });
  },
  dow: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('services');
  },
};