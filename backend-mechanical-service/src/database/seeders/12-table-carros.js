
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('carros', [
      {
        carro_modelo: 'GOL',
        carro_ano: 2008,
        carro_marca: 'VOLKSWAGEM',
        carro_status: 'DISPONIVEL',
      },
      {
        carro_modelo: 'UNO',
        carro_ano: 2019,
        carro_marca: 'FIAT',
        carro_status: 'ALUGADO',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('carros', null, {});
  },
};
