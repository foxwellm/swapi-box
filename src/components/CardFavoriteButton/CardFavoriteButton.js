import React, { Component } from 'react';
import './CardFavoriteButton.css'

export default class CardFavoriteButton extends Component {
  constructor() {
    super()
  }


  render() {
    return (
      <button>
        
        {this.props.favorites}
      </button>
    )
  }
}