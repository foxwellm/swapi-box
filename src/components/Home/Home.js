import React from 'react'
import './Home.css'
import PropTypes from 'prop-types'

export const Home = ({ films }) => {
  return (
    <div className="scroll-container">
      <div className="scroll">
        <p className="scroll-color">{films}</p>
      </div>
    </div>
  )
}
Home.propTypes = {
  films: PropTypes.string
}