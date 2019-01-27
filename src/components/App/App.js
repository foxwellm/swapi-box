import React, { Component } from 'react';
import './App.css';
import { NavBar } from '../NavBar/NavBar'
import Home from '../Home/Home'
import CardContainer from '../CardContainer/CardContainer'
import { fetchAPI } from '../../api/api';
import * as helper from '../../helper/helper';
import { peopleResultsCleaned } from '../../mockData/people'
import {Header} from '../Header/Header'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      categories: ['people', 'planets', 'vehicles'],
      randomFilm: 0,
      favoriteCount: 0,
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
        result.next = null //testing
        if (result.next) {
          request = result.next
        } else {
          const endresults = await helper[`${category}DataCleaner`](fullResults, category)
          this.setState({ [category]: endresults, isLoading: false, currentCategory: category })
          request = null
        }
      }
      catch (error) {
        this.setState({ error, isLoading: false })
      }
    }
  }

  retrieveData = async (category) => {
    if (this.state[category] || category === 'favorites') {
      this.setState({ currentCategory: category, isLoading: false })
    } else {
      this.fetchAndStoreData(category);
    }
  }

  setFavorite = (e) => {
    e.preventDefault()
    const { name: category, value: name } = e.target
    const arrayOfCategory = [...this.state[category]]
    let newFavoriteCount = this.state.favoriteCount
    let modifyFavoriteCount = 0
    let addFavorite = arrayOfCategory.map(thing => {
      if (thing.name === name) {
        thing.isFavorite ? modifyFavoriteCount-- : modifyFavoriteCount++
        thing.isFavorite = !thing.isFavorite
      }
      return thing
    })
    newFavoriteCount += modifyFavoriteCount
    this.setState({ [category]: addFavorite, favoriteCount: newFavoriteCount })
  }

  componentDidMount() {
    // this.setState({ isLoading: true });
    // this.retrieveData('people') 
    this.setState({ people: peopleResultsCleaned, isLoading: false })//testing
  }

  render() {
    const { categories, favoriteCount, films, isLoading, currentCategory, randomFilm, people, planets, vehicles } = this.state
    if (!isLoading) {
      return (
        <div className="App">
          <Header />
          <NavBar categories={categories} favoriteCount={favoriteCount} retrieveData={this.retrieveData} />
          {
            currentCategory !== 'films' ?
              <CardContainer
                currentCategory={currentCategory}
                setFavorite={this.setFavorite}
                categories={categories}
                people={people}
                planets={planets}
                vehicles={vehicles}
                cards={this.state[currentCategory]}
              />
              :
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
