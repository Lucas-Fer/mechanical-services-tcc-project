module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('funcionarios', {
      funcionario_id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER(),
      },
      funcionario_nome: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      funcionario_email: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      funcionario_senha: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
    });
  },
  dow: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('funcionarios');
  },
};