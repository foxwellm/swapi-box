import * as mockFilms from '../mockData/films'
import * as mockVehicles from '../mockData/vehicles'
import * as mockPeople from '../mockData/people'
import {fetchAPI} from '../api/api'
import * as helper from './helper';

describe('helper functions', () => {

  describe('filmsDataCleaner', () => {
    let mockFilmResults = mockFilms.filmResults
    let mockFilmResultsCleaned = mockFilms.filmResultsCleaned

    it('should return cleaned films', () => {
      const result = helper.filmsDataCleaner(mockFilmResults)
      expect(result).toEqual(mockFilmResultsCleaned)
    })
  })

  describe('vehicleDataCleaner', () => {
    let mockVehicleResults = mockVehicles.vehicleResults
    let mockVehicleResultsCleaned = mockVehicles.vehicleResultsCleaned

    it('should return cleaned films', () => {
      const result = helper.vehiclesDataCleaner(mockVehicleResults)
      expect(result).toEqual(mockVehicleResultsCleaned)
    })
  })

  describe('peopleDataCleaner', () => {
    let mockPeopleResults = mockPeople.peopleResults
    let mockPeopleResultsCleaned = mockPeople.peopleResultsCleaned
    let fetchAPI = jest.fn((passedCall) => {
      if (passedCall === person.species[0]) {
        // return speciesJSON = {
        //   name: 
        // }
        console.log('hi')
      }
    })

    it('should return cleaned films', async () => {
      const result = await helper.peopleDataCleaner(mockPeopleResults)
      expect(result).toEqual(mockPeopleResultsCleaned)
    })
  })

})
