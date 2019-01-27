import React, { Component } from 'react';
import './Card.css'
import FavoriteButton from '../FavoriteButton/FavoriteButton';

export default class Card extends Component {
  constructor() {
    super()
  }


  render() {
    debugger
    const { currentCategory, favorites, setFavorite, category, isFavorite } = this.props
    const { name, species, homeworld, population } = this.props
    const { model, vclass, passengers } = this.props
    const { residents, climate, terrain } = this.props


debugger

    return (
      <div className="Card">
        <FavoriteButton setFavorite={setFavorite} isFavorite={isFavorite} category={category} name={name} />
        {
          currentCategory === 'people' ?
            <div>
              <div className="card-thing">{name}</div>
              <div className="card-thing">{species}</div>
              <div className="card-thing">{homeworld}</div>
              <div className="card-thing">{population}</div>
            </div>
            : currentCategory === 'planets' ?
              <div>
                <div className="card-thing">{name}</div>
                <div className="card-thing">{residents}</div>
                <div className="card-thing">{climate}</div>
                <div className="card-thing">{population}</div>
                <div className="card-thing">{terrain}</div>
              </div>
              : currentCategory === 'vehicles' ?
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
                : currentCategory === 'favorites' ?
                  <div></div>
                  : null
        }



      </div>
    )
  }
}