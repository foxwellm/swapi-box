import React, { Component } from 'react';
import './CardContainer.css'
import Card from '../Card/Card'

export default class CardContainer extends Component {
  constructor() {
    super()

  }

  render() {
    var { favorites, currentCategory, setFavorite, categories, people, planets, vehicles } = this.props
    let categoryCards = []
    if (currentCategory === 'favorites') {
      let cards;
      for (let category in favorites) {
        cards = favorites[category].map(card => {
          // debugger
          // favorites[category][card]
          return <Card card={card} setFavorite={setFavorite}/>
        })
        categoryCards.push(cards)
      }

    } else {
      categoryCards = this.props[currentCategory].map(card => {
        let isFavorite
        if (favorites[currentCategory]) {
          isFavorite = favorites[currentCategory].find(favcard => {
            return favcard.name === card.name
          })
        }
        isFavorite = isFavorite ? true : false
        // debugger
        return <Card card={card} setFavorite={setFavorite} isFavorite={isFavorite} />
      })
    }

    return (
      <div className="CardContainer">
        {categoryCards}
      </div>
    )


  }
}
