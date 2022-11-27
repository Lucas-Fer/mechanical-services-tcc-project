module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('alugueis', {
      aluguel_id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER(),
      },
      cliente_id: {
        type: Sequelize.INTEGER(),
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        foreignKey: true,
        references: {
          model: 'clientes',
          key: 'cliente_id',
        },
      },
      carro_id: {
        type: Sequelize.INTEGER(),
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        foreignKey: true,
        references: {
          model: 'carros',
          key: 'carro_id',
        },
      }
    });
  },
  dow: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('alugueis');
  },
};