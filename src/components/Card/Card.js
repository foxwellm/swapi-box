import React, { Component } from 'react';
import './Card.css'
import FavoriteButton from '../FavoriteButton/FavoriteButton';

export default class Card extends Component {
  constructor() {
    super()

  }

  render() {
    const { setFavorite, card, isFavorite  } = this.props
    const { name, species, homeworld, population, category } = this.props.card
    const { model, vclass, passengers } = this.props.card
    const { residents, climate, terrain } = this.props.card
 
const cssClasses = [
  "Card",
  `${category}`
]

    return (
      <div className={cssClasses.join(' ')}>
        <FavoriteButton setFavorite={setFavorite} card={card} isFavorite={isFavorite} category={category} name={name} />
        {
          category === 'people' ?
            <div>
              <div className="card-thing">{name}</div>
              <div className="card-thing">{species}</div>
              <div className="card-thing">{homeworld}</div>
              <div className="card-thing">{population}</div>
            </div>
            : category === 'planets' ?
              <div>
                <div className="card-thing">{name}</div>
                <div className="card-thing">{residents}</div>
                <div className="card-thing">{climate}</div>
                <div className="card-thing">{population}</div>
                <div className="card-thing">{terrain}</div>
              </div>
              : category === 'vehicles' ?
                <div>
                  <div className="card-thing">{name}</div>
                  <div className="card-thing">{model}</div>
                  <div className="card-thing">{vclass}</div>
                  {
                    passengers > 0 ?
                      <div className="card-thing">{passengers}</div>
                      : null
                  }
                </div>
                : category === 'favorites' ?
                  <div></div>
                  : null
        }
      </div>
    )
  }
}