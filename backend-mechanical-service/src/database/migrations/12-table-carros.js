module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('carros', {
      carro_id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER(),
      },
      carro_modelo: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      carro_ano: {
        type: Sequelize.INTEGER(),
        allowNull: false,
      },
      carro_marca: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      carro_status: {
        type: Sequelize.ENUM('DISPONIVEL', 'ALUGADO'),
      }
    });
  },
  dow: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('carros');
  },
};