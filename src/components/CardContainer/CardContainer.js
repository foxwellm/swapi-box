import React, { Component } from 'react';
import './CardContainer.css'
import Card from '../Card/Card'

export default class CardContainer extends Component {
  constructor() {
    super()

  }



  render() {
    const { favorites, cards } = this.props

        return (
          <div>
            {
              cards.map(card => {
                return <Card card={card} favorites={favorites} />
              })
            }
          </div>
        )
      
    
  }
}
