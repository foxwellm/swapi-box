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
      categories: ['people', 'planets', 'vehicles'],
      randomFilm: 2,
      favoriteCount: 5,
      films: null,
      isLoading: true,
      page: null,
      error: null,
      people: null,
      planets: null,
      vehicles: null,
    }

  }

  handleNavBtnClick = (page) => {
    this.retrieveData(page)
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
          // request = result.next
          request = result.next
        } else {
          const endresults = await helper[`${category}DataCleaner`](fullResults, category)
          this.setState({ [category]: endresults, isLoading: false, page: category })
          request = null
        }
        // result.next ? request = result.next
        //   : fixVehicleData(fullResults)
          // : this.setState({ [category]: fullResults, isLoading: false }, request = null)
      }
      catch (error) {
        this.setState({ error, isLoading: false });
      }
    }
  };

  retrieveData = async (category) => {
    // debugger
    if (this.state[category]) {
      this.setState({ page: category, isLoading: false });
    
      
    } else {
      this.fetchData(category);

    }
  }


  componentDidMount() {
    this.setState({ isLoading: true });
    this.retrieveData('films')
  }

  // async componentDidMount() {
  //   // this.setState({ isLoading: true })
  //   try {
  //     const response = await fetch('https://swapi.co/api/films/')
  //     const films = await response.json()
  //     this.setState({ films: films.results, isLoading:false })
  //   } catch(error) {
  //     console.log(error)
  //   }
  // }


  render() {
    const { categories, favoriteCount, films, isLoading, page, randomFilm } = this.state
    // debugger
    if (!isLoading) {
      return (
        <div className="App">
          <NavBar categories={categories} favoriteCount={favoriteCount} handleNavBtnClick={this.handleNavBtnClick} />
          {
            page ? <CardContainer page={page} cards={this.state[page]} /> :
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
