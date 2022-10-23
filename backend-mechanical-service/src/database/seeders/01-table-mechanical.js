module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('mechanical', [
      {
        mechanical_name: 'Seu Zé',
        mechanical_phone: '69993543934',
        mechanical_email: 'ze@teste.com',
        mechanical_password: '1234565',
        autonomous: false,
      },
      {
        mechanical_name: 'Tonhito',
        mechanical_phone: '69913244934',
        mechanical_email: 'tonhin@teste.com',
        mechanical_password: '1234565',
        autonomous: true,
        mechanical_workshop: 'Quebra tudo',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('mechanical', null, {});
  },
};
