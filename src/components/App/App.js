import React, { Component } from 'react';
import './App.css';
import { NavBar } from '../NavBar/NavBar'
import Home from '../Home/Home'
import CardContainer from '../CardContainer/CardContainer'
import { fetchAPI } from '../../api/api';
import * as helper from '../../helper/helper';
import { peopleResultsCleaned } from '../../mockData/people'
import { Header } from '../Header/Header'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      categories: ['people', 'planets', 'vehicles'],
      randomFilm: 0,
      favoriteCount: 0,
      favorites: {},
      films: null,
      isLoading: true,
      currentCategory: 'films', //testing
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

    this.updateStateFromLocalStorageFavorites()
    if (this.state[category] || category === 'favorites') {
      this.setState({ currentCategory: category, isLoading: false })
    } else {
      this.fetchAndStoreData(category);
    }
  }

  setFavorite = (card) => {
    let newFavoriteCount = this.state.favoriteCount
    let currentFavorites = JSON.parse(localStorage.getItem('favorites') || "{}")
    if (currentFavorites[card.category]) {
      let isFavorite = currentFavorites[card.category].find( car => {
        return car.name === card.name
      })
      if (isFavorite) {
        var indexOFFavorite = currentFavorites[card.category].indexOf(card);
        currentFavorites[card.category].splice(indexOFFavorite, 1);
        newFavoriteCount--
      } else {
        currentFavorites[card.category].push(card);
        newFavoriteCount++
      }
    } else {
      currentFavorites[card.category] = [card]
      newFavoriteCount++
    }
    this.setState({ favoriteCount: newFavoriteCount })
    localStorage.setItem('favorites', JSON.stringify(currentFavorites))
  }

  updateStateFromLocalStorageFavorites = () => {
    const currentFavoritesInLocalStorage = JSON.parse(localStorage.getItem('favorites') || "{}")
    let favoriteCount = 0
    for (let category in currentFavoritesInLocalStorage) {
      currentFavoritesInLocalStorage[category].forEach(card => {
        favoriteCount++
      })
    }
    this.setState({ favorites: currentFavoritesInLocalStorage, favoriteCount })
  }

    componentDidMount() {
      this.setState({ isLoading: true });
      this.retrieveData('films') 
      this.updateStateFromLocalStorageFavorites()
      
      // this.setState({ people: peopleResultsCleaned, isLoading: false })//testing
    }

    render() {
      const { categories, favoriteCount, favorites, films, isLoading, currentCategory, randomFilm, people, planets, vehicles } = this.state
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
                  favorites={favorites}
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
