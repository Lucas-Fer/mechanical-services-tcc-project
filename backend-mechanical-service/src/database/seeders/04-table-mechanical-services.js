module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Mechanical_Service', [
      {
        service_id: 1,
        mechanical_id: 1,
        status_service: 'PROGRESS',
      },
      {
        service_id: 2,
        mechanical_id: 2,
        status_service: 'DONE',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Mechanical_Service', null, {});
  },
};
