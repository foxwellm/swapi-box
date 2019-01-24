import React from 'react';
import './NavBar.css'
import NavButton from '../NavButton/NavButton'
import FavoriteNavButton from '../FavoriteNavButton/FavoriteNavButton'

export const NavBar = ({categories, favoriteCount, handleNavBtnClick}) => {

  const navCategoryButtons = categories.map(category => {
    return <NavButton 
    handleNavBtnClick={handleNavBtnClick}
      category={category} 
      />
  })

  return (
      <div className="NavBar">
        {navCategoryButtons}
        <FavoriteNavButton favoriteCount={favoriteCount} />
      </div>
    )
  }
  
