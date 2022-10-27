module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('mechanicals', {
      mechanical_id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER(),
      },
      mechanical_name: {
        type: Sequelize.STRING(255),
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
      work_status: {
        type: Sequelize.ENUM('AVAILABLE', 'BUSY'),
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
    });
  },
  dow: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('mechanicals');
  },
};