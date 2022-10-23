module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Users', [
      {
        user_name: 'Joffrey',
        user_phone: '69993543934',
        user_email: 'joffrey@teste.com',
        user_password: '1234565',
      },
      {
        user_name: 'Carlito',
        user_phone: '69913244934',
        user_email: 'carlito@teste.com',
        user_password: '1234565',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
