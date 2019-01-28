import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';
import * as mockFilms from '../../mockData/films'
import * as mockPeople from '../../mockData/people'


describe('App', () => {
  let wrapper;
  let mockFilmsState = mockFilms.filmResultsCleaned

  beforeEach(() => {
    wrapper = shallow(<App />)
    wrapper.setState({films: mockFilmsState })
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  });
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })

  describe('retrieveData method', () => {
    
    it('should change state of currentCategory and isLoading when called with "favorites" ', () => {
      //setup
      expect(wrapper.state('currentCategory')).toEqual('films')
      expect(wrapper.state('isLoading')).toEqual(true)
      //execution
      wrapper.instance().retrieveData('favorites')
      //expectation
      expect(wrapper.state('currentCategory')).toEqual('favorites')
      expect(wrapper.state('isLoading')).toEqual(false)
    });

    it('should change state of categoryLoading when called with any other category if category is not in state', () => {
      //setup
      expect(wrapper.state('currentCategory')).toEqual('films')
      expect(wrapper.state('isLoading')).toEqual(true)
      //execution
      wrapper.instance().retrieveData('people')
      //expectation
      expect(wrapper.state('categoryLoading')).toEqual(true)
      expect(wrapper.state('isLoading')).toEqual(true)
    });

    it('should change state of currentCategory and isLoading when called with a category that is in state ', () => {
      //setup
      wrapper.setState({ people: mockPeople.peopleResultsCleaned })
      expect(wrapper.state('currentCategory')).toEqual('films')
      expect(wrapper.state('isLoading')).toEqual(true)
      //execution
      wrapper.instance().retrieveData('people')
      //expectation
      expect(wrapper.state('currentCategory')).toEqual('people')
      expect(wrapper.state('isLoading')).toEqual(false)
    });

  })

  describe('setFavorite method', () => {

    it("should add favorite cards to state and localStorage and increase count by 1", () => {
      //setup
      expect(wrapper.state('favorites')).toEqual({})
      expect(wrapper.state('favoriteCount')).toEqual(0)
      //execution
      wrapper.instance().setFavorite(mockPeople.personToFavorite)
      //expectation
      expect(wrapper.state('favorites')).toEqual({ people: [mockPeople.personToFavorite]})
      expect(wrapper.state('favoriteCount')).toEqual(1)
      expect(JSON.parse(localStorage.favorites)).toEqual({ people: [mockPeople.personToFavorite]})
    })

    it("should remove favorite cards from state and localStorage and decrease count by 1", () => {
      //setup
      expect(wrapper.state('favorites')).toEqual({ people: [mockPeople.personToFavorite]})
      expect(wrapper.state('favoriteCount')).toEqual(1)
      //execution
      wrapper.instance().setFavorite(mockPeople.personToFavorite)
      //expectation
      expect(wrapper.state('favorites')).toEqual({ people: [] })
      expect(wrapper.state('favoriteCount')).toEqual(0)
      expect(JSON.parse(localStorage.favorites)).toEqual({ people: [] })
    })

  })

  describe('randomFilmGenerator method', () => {

    it("should change state of randomFilm number to a different one than current", () => {
      //setup
      wrapper.setState({ randomFilm: 2 })
      wrapper.setState({ currentCategory: 'people' })
      //execution
      wrapper.instance().randomFilmGenerator()
      //expectation
      expect(wrapper.state('currentCategory')).toEqual('films')
      expect(wrapper.state('randomFilm')).not.toEqual(2)
    })

  })

  describe('fetchAndStoreData method', async () => {

    it.skip("should make a fetch call based on category", () => {
      //setup
    
      //execution
      wrapper.instance().fetchAndStoreData('people')
      //expectation
      // expect(wrapper.state('favorites')).toEqual({ people: [mockPeople.personToFavorite] })
      // expect(wrapper.state('favoriteCount')).toEqual(1)
      // expect(JSON.parse(localStorage.favorites)).toEqual({ people: [mockPeople.personToFavorite] })
    })



  })
})
