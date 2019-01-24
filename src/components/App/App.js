import React, { Component } from 'react';
import './App.css';
import { NavBar } from '../NavBar/NavBar'
import Home from '../Home/Home'
import CardContainer from '../CardContainer/CardContainer'
import { fetchAPI } from '../../api/api';
import { fixData } from '../../helper/helper';

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
    // debugger
    this.setState({ page })
  }

  fetchData = async (category) => {
    // ksdjfhasf
    let fullResults = []
    const url = 'https://swapi.co/api/';
    let request = `${url + category}/`
    while (request) {
      try {
        const result = await fetchAPI(request)
        fullResults = fullResults.concat(result.results)
        result.next=null
        if (result.next) {
          // request = result.next
          request = result.next
        } else {
          const endresults = await fixData(fullResults, category)
          this.setState({ [category]: endresults, isLoading: false })
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

  retrieveData = async (topic) => {
    // debugger
    // if (this.state[topic] === null) {
      this.fetchData(topic);
    
      
    // } else {
    //   debugger

    // }
  }


  componentDidMount() {
    this.setState({ isLoading: true });
    this.retrieveData('planets')
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
            // page ? <CardContainer page={page}/> :
            //   <Home films={films[randomFilm].opening_crawl} />
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
