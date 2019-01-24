import { fetchAPI } from '../api/api';


export const fixData = (results, category) => {
  switch (category) {
    case 'films':
      return fixFilmsData(results)
      break;
    case 'vehicles':
    return fixVehicleData(results)
    break;
    case 'planets':
      return fixPlanetsData(results)
      break;
    case 'people':
      // return fixPeopleData(results)
      break;
  }
}

const fixFilmsData = (filmsResults) => {
  // debugger
  const films = filmsResults.map(film => {
    return {
      title: film.title,
      release_date: film.release_date,
      opening_crawl: film.opening_crawl,
      people: film.characters,
      planets: film.planets,
      vehicles: film.vehicles
    }
  })
  return films
}

const fixVehicleData = (vehicleResults) => {
// debugger
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

const fixPlanetsData = (planetsResults) => {
  // const test = await fetchAPI(planetsResults[0].residents[0])
  
  const planets = planetsResults.map(async planet => {
    const residents = await getResidents(planet.residents)
    // console.log(residents)
    // return await Promise.all(planet.residents.map( async (resident) => {
    //   const residentJSON = await fetchAPI(resident) 
    //   return residentJSON.name
    // }))

    // const residents = await Promise.all(promisedResidents)

    return {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: residents
    }
  })
  return Promise.all(planets)
}

const getResidents = (residents) => {
  const endResidents = residents.map( async resident => {
    
    const residentJSON = await fetchAPI(resident)
    // const response = await fetch(resident)
    // const result = await response.json()
    return residentJSON.name
    // console.log(resident)
    // return fetched.name
  })
return Promise.all(endResidents)

}


// const fixPeopleData = (peopleResults) => {
//   const people = peopleResults.map(async person => {
//     const residents = await getResidents(planet.residents)
 

//     return {
//       name: planet.name,
//       terrain: planet.terrain,
//       population: planet.population,
//       climate: planet.climate,
//       residents: residents
//     }
//   })
//   return Promise.all(people)
// }