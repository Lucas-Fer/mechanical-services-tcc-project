module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        user_name: 'User1',
        user_phone: '123456789',
        user_email: 'user1@teste.com',
        user_password: 'user123',
        user_role: 'CLIENT',
      },
      {
        user_name: 'User2',
        user_phone: '1987654321',
        user_email: 'user2@teste.com',
        user_password: 'user123',
        user_role: 'CLIENT',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
