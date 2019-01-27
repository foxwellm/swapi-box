import React, { Component } from 'react';
import './FavoriteNavButton.css'

export default class FavoriteNavButton extends Component {
  constructor() {
    super()
  }




  render() {

    const { retrieveData, favoriteCount, category } = this.props
// debugger
    return (

      <button className="FavoriteNavButton" onClick={() => retrieveData('favorites')}>
        Favorites
       {favoriteCount}
      </button>


    )
  }
}