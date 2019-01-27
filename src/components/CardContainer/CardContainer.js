import React, { Component } from 'react';
import './CardContainer.css'
import Card from '../Card/Card'

export default class CardContainer extends Component {
  constructor() {
    super()

  }



  render() {
    const { favorites, currentCategory, setFavorite, categories, people, planets, vehicles } = this.props
    let categoryCards

    if (currentCategory === 'favorites') {
      let notNullCategories = categories.filter(category => this.props[category] !== null)
      categoryCards = notNullCategories.map(category => {
        return this.props[category].filter(card => {
          if (card.isFavorite) {
            return <Card {...card}
              currentCategory={card.category}
              setFavorite={setFavorite}
            />
          } else {
            return null
          }

        })
      })

    } else {
      categoryCards = this.props[currentCategory].map(card => {
        return <Card {...card} currentCategory={currentCategory} setFavorite={setFavorite} />
      })
    }

    return (
      <div className="CardContainer">
        {categoryCards}
      </div>
    )


  }
}
