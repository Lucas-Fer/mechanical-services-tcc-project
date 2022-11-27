module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('clientes', [
      {
        cliente_nome: 'Cliente1',
        cliente_email: 'cliente1@teste.com',
        cliente_senha: 'cliente123',
        carteira_motorista: '1283762178436223',
      },
      {
        cliente_nome: 'Cliente2',
        cliente_email: 'cliente2@teste.com',
        cliente_senha: 'cliente123',
        carteira_motorista: '239487324987784247',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('clientes', null, {});
  },
};
