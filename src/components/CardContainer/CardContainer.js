import React, { Component } from 'react';
import './CardContainer.css'
import Card from '../Card/Card'
import PropTypes from 'prop-types';

export default class CardContainer extends Component {
  constructor() {
    super()
    this.state = {
      page: 1
    }
  }

  handleNextPageClick = () => {
    const currentPage = this.state.page
    this.setState({page: currentPage++})
  }

  handlePrevtPageClick = () => {
    const currentPage = this.state.page
    this.setState({ page: currentPage-- })
  }

  render() {
    const { favorites, currentCategory, setFavorite, people, planets, vehicles } = this.props
    let categoryCards = []
    if (currentCategory === 'favorites') {
      let cards;
      for (let category in favorites) {
        cards = favorites[category].map(card => {
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
        return <Card card={card} setFavorite={setFavorite} isFavorite={isFavorite} />
      })
    }

    return (
      <div className="CardContainer">
      <div className="button-container"></div>
        <div className="cards-container"> {categoryCards}</div>
        
      </div>
    )
  }
}

CardContainer.propTypes = {
  favorites: PropTypes.object,
  currentCategory: PropTypes.string,
  setFavorite: PropTypes.func,
  people: PropTypes.array,
  planets: PropTypes.array,
  vehicles: PropTypes.array
}
