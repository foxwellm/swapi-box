import React from 'react';
import './NavBar.css'
import NavButton from '../NavButton/NavButton'
import FavoriteNavButton from '../FavoriteNavButton/FavoriteNavButton'

export const NavBar = ({categories, favoriteCount}) => {

  const navCategoryButtons = categories.map(category => {
    return <NavButton 
      category={category} 
      />
  })

  return (
      <div>
        {navCategoryButtons}
        <FavoriteNavButton favoriteCount={favoriteCount} />
      </div>
    )
  }
  
