import React from 'react'
import '../Header/Header.css'
import PropTypes from 'prop-types'

export const Header = ({ randomFilmGenerator }) => {
  return (
    <section className="Header">
      <div className="container" onClick={randomFilmGenerator}>SWAPI-Box</div>
    </section>
  )
}

Header.propTypes = {
  randomFilmGenerator: PropTypes.func
}