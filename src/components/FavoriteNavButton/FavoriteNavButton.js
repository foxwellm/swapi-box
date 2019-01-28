import React, { Component } from 'react'
import './FavoriteNavButton.css'
import PropTypes from 'prop-types';

export default class FavoriteNavButton extends Component {

  handleClick = (e) => {
    e.preventDefault()
    this.props.retrieveData('favorites')
  }

  render() {
    const { favoriteCount } = this.props
    return (
      <button className="FavoriteNavButton" onClick={(e) => this.handleClick(e)}>
        {`Favorites ${favoriteCount}`}
      </button>
    )
  }
}

FavoriteNavButton.propTypes = {
  retrieveData: PropTypes.func,
  favoriteCount: PropTypes.number
}