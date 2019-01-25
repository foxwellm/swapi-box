import {fetchAPI} from '../api/api';

export const filmsDataCleaner = (filmsResults) => {
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

export const vehiclesDataCleaner = (vehicleResults) => {
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

export const planetsDataCleaner = (planetsResults) => {
  const planets = planetsResults.map(async planet => {
  const residents = await getResidents(planet.residents)
// let residents
//     if(planet.residents.length > 1) {
//     residents = await planet.residents.map( async resident => {
//       const residentJSON = await API.fetchAPI(resident)
//       return Promise.all(residentJSON.name)
//     })
//   } else {
//     resident = 'none'
//   }
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
    return residentJSON.name
  })
return Promise.all(endResidents)
}

export const peopleDataCleaner = (peopleResults) => {
  const people = peopleResults.map(async person => {
    const speciesJSON = await fetchAPI(person.species[0])
    const planetJSON = await fetchAPI(person.homeworld)
    return {
      name: person.name,
      species: speciesJSON.name,
      homeworld: planetJSON.name,
      population: planetJSON.population
    }
  })
  return Promise.all(people)
}