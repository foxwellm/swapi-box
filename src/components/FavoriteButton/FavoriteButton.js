import React, { Component } from 'react';
import './FavoriteButton.css'

export default class FavoriteButton extends Component {
  constructor() {
    super()
  }


  render() {
    const {setFavorite, isFavorite, category, name} = this.props
   const cssClasses = [
     "FavoriteButton",
     isFavorite ? "favorite" : null
   ]
    return (
      <button onClick={setFavorite} name={category} value={name} className={cssClasses.join(' ')}>
        Fav
        
      </button>
    )
  }
}