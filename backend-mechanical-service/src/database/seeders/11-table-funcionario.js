module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('funcionarios', [
      {
        funcionario_nome: 'funcionario1',
        funcionario_email: 'funcionario1@teste.com',
        funcionario_senha: 'funcionario123',
      },
      {
        funcionario_nome: 'funcionario2',
        funcionario_email: 'funcionario2@teste.com',
        funcionario_senha: 'funcionario123',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('funcionarios', null, {});
  },
};
