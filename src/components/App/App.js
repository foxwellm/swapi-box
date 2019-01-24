import React, { Component } from 'react';
import './App.css';
import { NavBar } from '../NavBar/NavBar'
import Home from '../Home/Home'
import films from '../../testData/films'

export default class App extends Component {
  constructor() {
    super() 
      this.state = {
        categories: ['people', 'planets', 'vehicles'],
        favoriteCount: 5,
        films: films
      }
    
  }
  render() {
    const { categories, favoriteCount, films } = this.state
    return (
      <div className="App">
        <NavBar categories={categories} favoriteCount={favoriteCount} />
        <Home films={films.results[0].opening_crawl} />

      </div>
    );
  }
}
