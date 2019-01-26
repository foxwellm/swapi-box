import React, { Component } from 'react';
import './App.css';
import { NavBar } from '../NavBar/NavBar'
import Home from '../Home/Home'
import CardContainer from '../CardContainer/CardContainer'
import { fetchAPI } from '../../api/api';
import * as helper from '../../helper/helper';
import {peopleResultsCleaned } from '../../mockData/people'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      categories: ['people', 'planets', 'vehicles', 'favorites'],
      randomFilm: 0,
      favoriteCount: 5,
      favorites: null,
      films: null,
      isLoading: true,
      currentCategory: 'people', //testing
      error: null,
      people: null,
      planets: null,
      vehicles: null,
    }
  }

  fetchAndStoreData = async (category) => {
    let fullResults = []
    const url = 'https://swapi.co/api/';
    let request = `${url + category}/`
    while (request) {
      try {
        const result = await fetchAPI(request)
        fullResults = fullResults.concat(result.results)
        result.next=null //testing
        if (result.next) {
          request = result.next
        } else {
          const endresults = await helper[`${category}DataCleaner`](fullResults, category)
          this.setState({ [category]: endresults, isLoading: false, currentCategory: category })
          request = null
        }
      }
      catch (error) {
        this.setState({ error, isLoading: false });
      }
    }
  };

  retrieveData = async (category) => {
    if (this.state[category] || category === 'favorites') {
      this.setState({ currentCategory: category, isLoading: false });
    } else {
      this.fetchAndStoreData(category);
    }
  }

  setFavorite = () => {

  }

  componentDidMount() {
    // this.setState({ isLoading: true });
    // this.retrieveData('people') 
    this.setState({ people: peopleResultsCleaned, isLoading: false})//testing
  }

  render() {
    const { categories, favoriteCount, films, isLoading, currentCategory, randomFilm, favorites } = this.state
    if (!isLoading) {
      return (
        <div className="App">
          <NavBar categories={categories} favoriteCount={favoriteCount} retrieveData={this.retrieveData} />
          {
            currentCategory !== 'films' ? <CardContainer currentCategory={currentCategory} cards={this.state[currentCategory]} favorites={favorites} /> :
              <Home films={films[randomFilm].opening_crawl} />
          }
        </div>
      );
    } else {
      return (
        <div></div>
      )
    }
  }
}
