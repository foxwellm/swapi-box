import React from 'react';
import './Card.css'
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import PropTypes from 'prop-types';

export const Card = (props) => {

  const { setFavorite, card, isFavorite, name, species, homeworld, population,
    category, model, vclass, passengers, residents, climate, terrain } = props
  const cssClasses = ["Card", `${category}`]

  return (
    <div className={cssClasses.join(' ')}>
      <FavoriteButton setFavorite={setFavorite} card={card} isFavorite={isFavorite} category={category} name={name} />
      {
        category === 'people' ?
          <div>
            <div className="card-thing card-name">Name: {name}</div>
            <div className="card-thing">Species: {species}</div>
            <div className="card-thing">Homeworld: {homeworld}</div>
            <div className="card-thing">Population: {population}</div>
          </div>
          : category === 'planets' ?
            <div>
              <div className="card-thing card-name">Name: {name}</div>
              <div className="card-thing">Residents: {residents}</div>
              <div className="card-thing">Climate: {climate}</div>
              <div className="card-thing">Population: {population}</div>
              <div className="card-thing">Terrain: {terrain}</div>
            </div>
            : category === 'vehicles' ?
              <div>
                <div className="card-thing card-name">Name: {name}</div>
                <div className="card-thing">Model: {model}</div>
                <div className="card-thing">Vehicle class: {vclass}</div>
                {
                  passengers > 0 ?
                    <div className="card-thing">Passengers: {passengers}</div>
                    : null
                }
              </div>
                : null
      }
    </div>
  )
}

Card.propTypes = {
  setFavorite: PropTypes.func,
  card: PropTypes.object,
  isFavorite: PropTypes.bool,
  name: PropTypes.string,
  species: PropTypes.string,
  homeworld: PropTypes.string,
  population: PropTypes.string,
  category: PropTypes.string,
  model: PropTypes.string,
  vclass: PropTypes.string,
  passengers: PropTypes.string,
  residents: PropTypes.array,
  climate: PropTypes.string,
  terrain: PropTypes.string
}