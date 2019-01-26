import React, { Component } from 'react';
import './NavButton.css'
import FavoriteButton from '../FavoriteButton/FavoriteButton'

export default class NavButton extends Component {
  constructor() {
    super()
  }

 


  render() {
 
const {retrieveData, favoriteCount, category} = this.props
 
    return (
      <button onClick={() => retrieveData(category)}>
        {category}
        {favoriteCount !== null ? <FavoriteButton favoriteCount={favoriteCount} /> : null}
      </button>
    )
  }
}