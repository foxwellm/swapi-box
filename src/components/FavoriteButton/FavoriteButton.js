import React, { Component } from 'react';
import './FavoriteButton.css'

export default class FavoriteButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favoriteActive: null
    }
  }

handleFavoriteClick = (e) => {
  e.preventDefault()

  this.props.setFavorite(this.props.card)
  let newActiveState = this.state.favoriteActive === null ? !this.props.isFavorite : !this.state.favoriteActive
  // debugger
this.setState({favoriteActive: newActiveState})

}




  render() {
    const {setFavorite, category, name, card, isFavorite} = this.props
    const { favoriteActive} = this.state
   const cssClasses = [
     "FavoriteButton",
     favoriteActive ? "favorite"
     : isFavorite ? "favorite" 
      : null
   ]
    return (
      <button onClick={(e) => this.handleFavoriteClick(e)} name={category} value={card} className={cssClasses.join(' ')}>
        Fav
      </button>
    )
  }
}