import React from 'react';
import './NavBar.css'
import NavButton from '../NavButton/NavButton'
import FavoriteNavButton from '../FavoriteNavButton/FavoriteNavButton'

export const NavBar = ({ categories, favoriteCount, retrieveData }) => {
  const navCategoryButtons = categories.map(category => (
    <NavButton
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

