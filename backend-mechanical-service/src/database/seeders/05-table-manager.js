module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('managers', [
      {
        manager_name: 'Manager1',
        manager_email: 'manager1@teste.com',
        manager_password: 'manager123',
        workshop_id: 2,
      },
      {
        manager_name: 'Manager1',
        manager_email: 'manager2@teste.com',
        manager_password: 'manager123',
        workshop_id: 1,
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('managers', null, {});
  },
};
