import {fetchAPI} from './api';
import * as mockFilms from '../mockData/films'

describe('api fetch call', () => {
  const mockUrl = 'https://swapi.co/api/films/'

  it('should call fetch with the correct params', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve(mockUrl);
        },
        ok: true
      });
    });

    const expected = 'https://swapi.co/api/films/';

    await fetchAPI(mockUrl);
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return star wars data if everything is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve(mockFilms.filmResults);
        },
        ok: true
      });
    });

    const result = await fetchAPI(mockUrl);
    expect(result).toEqual(mockFilms.filmResults);
  });

  it('should throw an error if fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject(
      Error('Could not fetch')
    ))

    const expected = Error('Could not fetch');
    await expect(fetchAPI(mockUrl)).rejects.toEqual(expected);
  });
})
