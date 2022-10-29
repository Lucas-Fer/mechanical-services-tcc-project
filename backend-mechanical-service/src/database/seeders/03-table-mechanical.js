module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('mechanicals', [
      {
        mechanical_name: 'Mechanical1',
        mechanical_email: 'mechanical1@teste.com',
        mechanical_password: 'mechanical123',
        work_status: 'AVAILABLE',
        workshop_id: 2,
        user_role: 'MECHANICAL',
      },
      {
        mechanical_name: 'Mechanical1',
        mechanical_email: 'mechanical2@teste.com',
        mechanical_password: 'mechanical123',
        work_status: 'BUSY',
        workshop_id: 1,
        user_role: 'MECHANICAL',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('mechanicals', null, {});
  },
};
