
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
      {
        carro_modelo: 'CORSA',
        carro_ano: 2012,
        carro_marca: 'CHEVROLET',
        carro_status: 'DISPONIVEL',
      },
      {
        carro_modelo: 'PALIO',
        carro_ano: 2007,
        carro_marca: 'FIAT',
        carro_status: 'DISPONIVEL',
      },
      {
        carro_modelo: 'FUSCA',
        carro_ano: 1990,
        carro_marca: 'VOLKSWAGEM',
        carro_status: 'DISPONIVEL',
      },

    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('carros', null, {});
  },
};
