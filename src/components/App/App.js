import React, { Component } from 'react';
import './App.css';
import { NavBar } from '../NavBar/NavBar'
import Home from '../Home/Home'
import CardContainer from '../CardContainer/CardContainer'
import { fetchAPI } from '../../api/api';
import * as helper from '../../helper/helper';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      categories: ['people', 'planets', 'vehicles', 'favorites'],
      randomFilm: 2,
      favoriteCount: 5,
      favorites: null,
      films: null,
      isLoading: true,
      page: null,
      error: null,
      people: null,
      planets: null,
      vehicles: null,
    }
  }

  fetchData = async (category) => {
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
          this.setState({ [category]: endresults, isLoading: false, page: category })
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
      this.setState({ page: category, isLoading: false });
    } else {
      this.fetchData(category);
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.retrieveData('films') 
  }

  render() {
    const { categories, favoriteCount, films, isLoading, page, randomFilm, favorites } = this.state
    if (!isLoading) {
      return (
        <div className="App">
          <NavBar categories={categories} favoriteCount={favoriteCount} retrieveData={this.retrieveData} />
          {
            page !== 'films' ? <CardContainer page={page} cards={this.state[page]} favorites={favorites} /> :
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
