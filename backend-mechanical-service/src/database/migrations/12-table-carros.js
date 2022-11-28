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
      },
      carro_valor: {
        allowNull: false,
        type: Sequelize.DECIMAL(9, 2),
      }
    });
  },
  dow: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('carros');
  },
};