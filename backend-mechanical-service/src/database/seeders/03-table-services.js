module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('services', [
      {
        user_id: 1,
        description: 'pneu furado',
        vehicle_model: 'CHEVROLET CORSA',
        vehicle_brand: 'CHEVROLET',
        vehicle_year: 2020,
        status_service: 'OPEN'
      },
      {
        user_id: 1,
        description: 'combustível vazando',
        vehicle_model: 'FIAT PUNTO',
        vehicle_brand: 'FIAT',
        vehicle_year: 2019,
        status_service: 'CLOSED'
      },
      {
        user_id: 2,
        description: 'Manuntenção',
        vehicle_model: 'FORD FOCUS',
        vehicle_brand: 'FORD',
        vehicle_year: 2019,
        status_service: 'OPEN'
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('services', null, {});
  },
};
