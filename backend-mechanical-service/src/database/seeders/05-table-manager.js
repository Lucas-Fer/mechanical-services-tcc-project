module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('managers', [
      {
        manager_name: 'ManagerWorkshop2',
        manager_email: 'manager1@teste.com',
        manager_password: 'manager123',
        workshop_id: 2,
        user_role: 'MANAGER',
      },
      {
        manager_name: 'ManagerWorkshop1',
        manager_email: 'manager2@teste.com',
        manager_password: 'manager123',
        workshop_id: 1,
        user_role: 'MANAGER',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('managers', null, {});
  },
};
