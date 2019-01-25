import React from 'react';
import ReactDOM from 'react-dom';
import {fetchAPI} from './api';
import { shallow } from 'enzyme'
import films from '../mockData/films'

describe('api fetch call', () => {


  it('should call fetch with the correct params', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve(films);
        },
        ok: true
      });
    });

    const expected = 'https://swapi.co/api/films/';

    await fetchAPI('https://swapi.co/api/films/');
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should throw an error if fetch fails', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject(
      Error('Could not fetch')
    ))

    const expected = Error('Could not fetch');

    expect(fetchAPI('https://swapi.co/api/films/')).rejects.toEqual(expected);
  });
})
