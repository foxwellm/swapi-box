import React, { Component } from 'react';
import './App.css';
import { NavBar } from '../NavBar/NavBar'
import { Home } from '../Home/Home'
import CardContainer from '../CardContainer/CardContainer'
import { fetchAPI } from '../../api/api';
import * as helper from '../../helper/helper';
import { Header } from '../Header/Header'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      categories: ['people', 'planets', 'vehicles'],
      randomFilm: Math.floor(Math.random() * 7),
      favoriteCount: JSON.parse(localStorage.getItem('favoriteCount') || 0),
      favorites: JSON.parse(localStorage.getItem('favorites') || "{}"),
      films: JSON.parse(localStorage.getItem('films') || null),
      isLoading: true,
      categoryLoading: false,
      currentCategory: 'films',
      error: null,
      people: JSON.parse(localStorage.getItem('people') || null),
      planets: JSON.parse(localStorage.getItem('planets') || null),
      vehicles: JSON.parse(localStorage.getItem('vehicles') || null),
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
        if (result.next) {
          request = result.next
        } else {
          const endResults = await helper[`${category}DataCleaner`](fullResults)
          this.setState({ [category]: endResults, isLoading: false, categoryLoading: false, currentCategory: category })
          localStorage.setItem(`${category}`, JSON.stringify(endResults))
          request = null
        }
      }
      catch (error) {
        this.setState({ error, isLoading: false })
      }
    }
  }

  retrieveData = (category) => {
    if (this.state[category] || category === 'favorites') {
      this.setState({ currentCategory: category, isLoading: false })
    } else {
      this.setState({ categoryLoading: true })
      this.fetchAndStoreData(category);
    }
  }

  randomFilmGenerator = () => {
    const currentFilm = this.state.randomFilm
    const newFilm = Math.floor(Math.random() * 7);
    if (newFilm === currentFilm) {
      this.randomFilmGenerator()
    } else {
      this.setState({ randomFilm: newFilm, currentCategory: 'films' })
    }
  }

  setFavorite = (card) => {
    let newFavoriteCount = this.state.favoriteCount
    let currentFavorites = { ...this.state.favorites }
    if (currentFavorites[card.category]) {
      let isFavorite = currentFavorites[card.category].find(car => {
        return car.name === card.name
      })
      if (isFavorite) {
        var indexOFFavorite = currentFavorites[card.category].indexOf(card)
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
    this.setState({ favorites: currentFavorites, favoriteCount: newFavoriteCount })
    localStorage.setItem('favorites', JSON.stringify(currentFavorites))
    localStorage.setItem('favoriteCount', JSON.stringify(newFavoriteCount))
  }

  componentDidMount() {
    this.retrieveData('films')
  }

  render() {
    const { categories, favoriteCount, favorites, films, isLoading, currentCategory,
      randomFilm, people, planets, vehicles, error, categoryLoading } = this.state
    if (error) {
      return (
        <div>Error</div>
      )
    } else if (isLoading) {
      return (
        <div className="loading">Loading</div>
      )
    } else {
      return (
        <div className="App">
          <Header randomFilmGenerator={this.randomFilmGenerator} />
          <NavBar categories={categories} favoriteCount={favoriteCount} retrieveData={this.retrieveData} />
          {
            categoryLoading ? <div className="loading">Loading</div>
              :
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
      )
    }
  }
}
