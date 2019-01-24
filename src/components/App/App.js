import React, { Component } from 'react';
import './App.css';
import { NavBar } from '../NavBar/NavBar'
import Home from '../Home/Home'
import CardContainer from '../CardContainer/CardContainer'

export default class App extends Component {
  constructor() {
    super() 
      this.state = {
        categories: ['people', 'planets', 'vehicles'],
        favoriteCount: 5,
        films: null,
        isLoading: true,
        page: null
      }
    
  }

  handleNavBtnClick = (page) => {
    // debugger
    this.setState({ page})
  }

  async componentDidMount() {
    // this.setState({ isLoading: true })
    try {
      const response = await fetch('https://swapi.co/api/films/')
      const films = await response.json()
      this.setState({ films: films.results, isLoading:false })
    } catch(error) {
      console.log(error)
    }
  }


  render() {
    const { categories, favoriteCount, films, isLoading, page } = this.state
    // debugger
    if(!isLoading){
    return (
      <div className="App">
        <NavBar categories={categories} favoriteCount={favoriteCount} handleNavBtnClick={this.handleNavBtnClick} />
        {
          page ? <CardContainer page={page}/> :
            <Home films={films[0].opening_crawl} />
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
