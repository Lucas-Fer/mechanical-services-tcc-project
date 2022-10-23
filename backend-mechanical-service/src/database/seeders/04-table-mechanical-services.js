module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('mechanical_service', [
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
    await queryInterface.bulkDelete('mechanical_service', null, {});
  },
};
