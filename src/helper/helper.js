export const fixVehicleData = (vehicleResults) => {

  const vehicles = vehicleResults.map(vehicle => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      class: vehicle.vehicle_class,
      passengers: vehicle.passengers
    }
  })
  return vehicles
}