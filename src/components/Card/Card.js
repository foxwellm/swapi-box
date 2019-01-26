import React, { Component } from 'react';
import './Card.css'
import CardFavoriteButton from '../CardFavoriteButton/CardFavoriteButton';

export default class Card extends Component {
  constructor() {
    super()
  }


  render() {
    const { favorites } = this.props
    return (
      <div>
        <CardFavoriteButton favorites={favorites} />
        {this.props.card.name}
      </div>
    )
  }
}