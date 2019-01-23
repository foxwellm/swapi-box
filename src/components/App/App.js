import React, { Component } from 'react';
import './App.css';
import { NavBar } from '../NavBar/NavBar'
import Home from '../Home/Home'

export default class App extends Component {
  constructor() {
    super() 
      this.state = {
        categories: ['people', 'planets', 'vehicles'],
        favoriteCount: 5
      }
    
  }
  render() {
    const { categories, favoriteCount } = this.state
    return (
      <div className="App">
        <NavBar categories={categories} favoriteCount={favoriteCount} />
        <Home />

      </div>
    );
  }
}
