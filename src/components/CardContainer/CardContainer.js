import React, { Component } from 'react';
import './CardContainer.css'
import { Card } from '../Card/Card'
import PropTypes from 'prop-types';

export default class CardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      min: 0,
      max: 10,
      total: 0,
      currentCategory: ''
    }
  }

  handleNextPageClick = () => {
    let { min, max } = this.state
    this.setState({ min: min + 10, max: max + 10 })
  }

  handlePrevPageClick = () => {
    let { min, max } = this.state
    this.setState({ min: min - 10, max: max - 10 })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.currentCategory !== nextProps.currentCategory) {
    return { currentCategory: nextProps.currentCategory, total: nextProps[nextProps.currentCategory].length, min: 0, max: 10 }
    } else {
      return null
    }
  }

  render() {
    const { favorites, currentCategory, setFavorite, people, planets, vehicles } = this.props
    const { min, max, total } = this.state
    let categoryCards = []
    if (currentCategory === 'favorites') {
      let cards;
      for (let category in favorites) {
        cards = favorites[category].map((card, i) => {
          if (i >= this.state.min && i < this.state.max) {
          return <Card {...card} key={card.name} card={card} setFavorite={setFavorite} isFavorite={true} />
          } else {
            return null
          }
        })
        categoryCards.push(cards)
      }

    } else {
      categoryCards = this.props[currentCategory].map((card, i) => {
        let isFavorite
        if (favorites[currentCategory]) {
          isFavorite = favorites[currentCategory].find(favcard => {
            return favcard.name === card.name
          })
        }
        isFavorite = isFavorite ? true : false
        if (i >= this.state.min && i < this.state.max) {
          return <Card {...card} key={card.name} card={card} setFavorite={setFavorite} isFavorite={isFavorite} />
        } else {
          return null
        }
      })
    }

    return (
      <div className="CardContainer">
        <div className="button-container">
          {
            min !== 0 ? <button className="page-btns" onClick={this.handlePrevPageClick}>prev</button> : <div></div>
          }
          {
            max > total ? <div></div> : <button className="page-btns" onClick={this.handleNextPageClick}>next</button>
          }
        </div>
        <div className="cards-container">{categoryCards}</div>
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
