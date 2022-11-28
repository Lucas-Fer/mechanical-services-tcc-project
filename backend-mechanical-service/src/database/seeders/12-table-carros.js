
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('carros', [
      {
        carro_modelo: 'GOL',
        carro_ano: 2008,
        carro_marca: 'VOLKSWAGEM',
        carro_status: 'DISPONIVEL',
        carro_valor: 1200.00,
      },
      {
        carro_modelo: 'UNO',
        carro_ano: 2019,
        carro_marca: 'FIAT',
        carro_status: 'ALUGADO',
        carro_valor: 500.00,
      },
      {
        carro_modelo: 'CORSA',
        carro_ano: 2012,
        carro_marca: 'CHEVROLET',
        carro_status: 'DISPONIVEL',
        carro_valor: 800.00,
      },
      {
        carro_modelo: 'PALIO',
        carro_ano: 2007,
        carro_marca: 'FIAT',
        carro_status: 'DISPONIVEL',
        carro_valor: 700.00,
      },
      {
        carro_modelo: 'FUSCA',
        carro_ano: 1990,
        carro_marca: 'VOLKSWAGEM',
        carro_status: 'DISPONIVEL',
        carro_valor: 3000.00,
      },

    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('carros', null, {});
  },
};
