import React from 'react'
import '../Header/Header.css'

export const Header = ({ randomFilmGenerator }) => {
  return (
    <section className="Header">
      <div className="container" onClick={randomFilmGenerator}>SWAPI-Box</div>
    </section>
  )
}