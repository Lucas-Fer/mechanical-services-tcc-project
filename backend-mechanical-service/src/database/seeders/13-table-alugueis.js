module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('alugueis', [
      {
        cliente_id: 1,
        carro_id: 1,
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('alugueis', null, {});
  },
};
