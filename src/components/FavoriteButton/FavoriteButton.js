import React, { Component } from 'react';
import './FavoriteButton.css'

export default class FavoriteButton extends Component {
  constructor(props) {
    super(props)

  }

  handleFavoriteClick = (e) => {
    e.preventDefault()

    this.props.setFavorite(this.props.card)
    // this.props.switchFavorite(!this.props.isFavorite)
    //   let newActiveState = this.state.favoriteActive === null ? !this.props.isFavorite : !this.state.favoriteActive

    // this.setState({favoriteActive: newActiveState})

  }




  render() {
    const { category, name, card, isFavorite } = this.props

    const cssClasses = [
      "FavoriteButton",
      isFavorite ? "favorite"
        : null
    ]
    return (
      <button onClick={(e) => this.handleFavoriteClick(e)} name={category} value={card} className={cssClasses.join(' ')}>
        Fav
      </button>
    )
  }
}