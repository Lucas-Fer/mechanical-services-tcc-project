module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('managers', {
      manager_id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER(),
      },
      manager_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      manager_email: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      manager_password: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      workshop_id: {
        type: Sequelize.INTEGER(),
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        foreignKey: true,
        references: {
          model: 'workshops',
          key: 'workshop_id',
        },
      },
      user_role: {
        type: Sequelize.ENUM('MANAGER'),
        allowNull: true,
      },
    });
  },
  dow: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('managers');
  },
};