module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('clientes', {
      cliente_id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER(),
      },
      cliente_nome: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      cliente_email: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      cliente_senha: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      carteira_motorista: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
    });
  },
  dow: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('clientes');
  },
};