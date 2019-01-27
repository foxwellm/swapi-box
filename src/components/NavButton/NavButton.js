import React, { Component } from 'react';
import './NavButton.css'
import FavoriteButton from '../FavoriteButton/FavoriteButton'

export default class NavButton extends Component {
  constructor() {
    super()
  }

 
handleClick = (e, category) => {
  e.preventDefault()
this.props.retrieveData(category)
}

  render() {
 
const {retrieveData, favoriteCount, category} = this.props
 
    return (
  
        <button className="NavButton" onClick={(e) => this.handleClick(e, category)}>
          {category}
        </button>
     

    )
  }
}