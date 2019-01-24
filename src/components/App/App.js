import React, { Component } from 'react';
import './App.css';
import { NavBar } from '../NavBar/NavBar'
import Home from '../Home/Home'
import CardContainer from '../CardContainer/CardContainer'
import { fetchAPI } from '../../api/api';

export default class App extends Component {
  constructor() {
    super() 
      this.state = {
        categories: ['people', 'planets', 'vehicles'],
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
    this.setState({ page})
  }

  fetchAPI = async (category) => {
    let fullResults = []
    const url = 'https://swapi.co/api/';
    let request = `${url + category}/`
    while(request !== null) {
    try {
      const response = await fetch(request);
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const result = await response.json()
      fullResults = fullResults.concat(result.results)
      if(result.next === null) {
        this.setState({ [category]: fullResults, isLoading:false })
        request = null
      } else {
        request = result.next
      }
    }
    catch (error) {
      this.setState({
        error,
        isLoading: false
      });
    }
  }
  };

  retrieveData = (topic) => {
    // debugger
    if (this.state[topic]===null) {
      this.fetchAPI(topic);
      } else {
        debugger
        
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
    const { categories, favoriteCount, films, isLoading, page } = this.state
    // debugger
    if(!isLoading){
    return (
      <div className="App">
        <NavBar categories={categories} favoriteCount={favoriteCount} handleNavBtnClick={this.handleNavBtnClick} />
        {
          // page ? <CardContainer page={page}/> :
          //   <Home films={films[0].opening_crawl} />
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
