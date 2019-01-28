import React from 'react'
import './NavBar.css'
import NavButton from '../NavButton/NavButton'
import FavoriteNavButton from '../FavoriteNavButton/FavoriteNavButton'
import PropTypes from 'prop-types'

export const NavBar = ({ categories, favoriteCount, retrieveData }) => {
  const navCategoryButtons = categories.map(category => (
    <NavButton
      key={category}
      retrieveData={retrieveData}
      category={category}
    />
  ));

  return (
    <div className="NavBar">
      {navCategoryButtons}
      <FavoriteNavButton favoriteCount={favoriteCount} retrieveData={retrieveData} />
    </div>
  )
}

NavBar.propTypes = {
  categories: PropTypes.array,
  favoriteCount: PropTypes.number,
  retrieveData: PropTypes.func
}