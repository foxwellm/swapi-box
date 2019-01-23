import React, { Component } from 'react';
import './FavoriteNavButton.css'

export default class FavoriteNavButton extends Component {
  constructor() {
    super()
  }


  render() {
    return (
      <button>
        Favorites
        {this.props.favoriteCount}
      </button>
    )
  }
}