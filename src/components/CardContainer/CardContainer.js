import React, { Component } from 'react';
import './CardContainer.css'
import Card from '../Card/Card'

export default class CardContainer extends Component {
  constructor() {
    super()

  }



  render() {
    const { favorites, cards, currentCategory } = this.props
    const categoryCards = currentCategory === 'favorites' ? null
    :
      cards.map(card => {
        return <Card {...card} currentCategory={currentCategory} favorites={favorites} />
      })

    // const favoriteCards = null;
        return (
          <div className="CardContainer">
            {categoryCards}
          </div>
        )
      
    
  }
}
