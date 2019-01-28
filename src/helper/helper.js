import { fetchAPI } from '../api/api';

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
  var vehicles = vehicleResults.map(vehicle => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      vclass: vehicle.vehicle_class,
      passengers: vehicle.passengers,
      category: "vehicles"
    }
  })
  return vehicles
}

export const planetsDataCleaner = (planetsResults) => {
  const planets = planetsResults.map(async planet => {
    const residents = await getResidents(planet.residents)
    return {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: residents,
      category: "planets"
    }
  })
  return Promise.all(planets)
}

const getResidents = (residents) => {
  const endResidents = residents.map(async resident => {
    const residentJSON = await fetchAPI(resident)
    return residentJSON.name
  })
  return Promise.all(endResidents)
}



export const peopleDataCleaner = (peopleResults) => {
  const people = peopleResults.map(async person => {
    const speciesJSON = person.species[0] === undefined ? 'none' : await fetchAPI(person.species[0])
    const planetJSON = await fetchAPI(person.homeworld)
    return {
      name: person.name,
      species: speciesJSON.name || 'unknown',
      homeworld: planetJSON.name,
      population: planetJSON.population,
      category: "people"
    }
  })
  return Promise.all(people)
}