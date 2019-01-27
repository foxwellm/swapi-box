import React, { Component } from 'react';
import './FavoriteNavButton.css'

export default class FavoriteNavButton extends Component {
  constructor() {
    super()
  }


handleClick = (e) => {
  e.preventDefault()
  this.props.retrieveData('favorites')
}

  render() {

    const {  favoriteCount } = this.props
    return (

      <button className="FavoriteNavButton" onClick={(e) => this.handleClick(e)}>
        Favorites
       {favoriteCount}
      </button>


    )
  }
}