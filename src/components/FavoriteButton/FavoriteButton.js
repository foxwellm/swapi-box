import React, { Component } from 'react';
import './FavoriteButton.css'

export default class FavoriteButton extends Component {
  constructor(props) {
    super(props)
  }

  handleFavoriteClick = (e) => {
    e.preventDefault()
    this.props.setFavorite(this.props.card)
  }

  render() {
    const { category, card, isFavorite } = this.props
    const cssClasses = [
      "FavoriteButton",
      isFavorite ? "favorite" : null
    ]
    return (
      <button onClick={(e) => this.handleFavoriteClick(e)} name={category} value={card} className={cssClasses.join(' ')}>
        <i className="fas fa-star"></i>
      </button>
    )
  }
}