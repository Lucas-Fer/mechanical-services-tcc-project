module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('workshops', [
      {
        workshop_name: 'Workshop1',
        workshop_email: 'workshop1@teste.com',
        workshop_password: 'workshop123',
        workshop_location: 'Rua1',
        user_role: 'ADMIN',
      },
      {
        workshop_name: 'Workshop2',
        workshop_email: 'workshop2@teste.com',
        workshop_password: 'workshop123',
        workshop_location: 'Rua2',
        user_role: 'ADMIN',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('workshops', null, {});
  },
};
