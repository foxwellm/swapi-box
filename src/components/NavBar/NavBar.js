import React from 'react';
import './NavBar.css'
import NavButton from '../NavButton/NavButton'
// import FavoriteNavButton from '../FavoriteNavButton/FavoriteNavButton'

export const NavBar = ({ categories, favoriteCount, retrieveData}) => {

  const navCategoryButtons = categories.map(category => {
    
    if (category !== 'favorites') {
      favoriteCount = null
    }
    return <NavButton 
    retrieveData={retrieveData}
      category={category}
      favoriteCount={favoriteCount}
      />
  })

  return (
      <div className="NavBar">
        {navCategoryButtons}
        {/* <FavoriteNavButton favoriteCount={favoriteCount} /> */}
      </div>
    )
  }
  
