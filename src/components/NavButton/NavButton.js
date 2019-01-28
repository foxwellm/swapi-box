import React, { Component } from 'react';
import './NavButton.css'

export default class NavButton extends Component {
  constructor() {
    super()
  }

 
handleClick = (e, category) => {
  e.preventDefault()
this.props.retrieveData(category)
}

  render() {



 
const {category} = this.props
    const cssClasses = [
      "NavButton",
      `${category}`
    ]
    return (
  
        <button className={cssClasses.join(' ')} onClick={(e) => this.handleClick(e, category)}>
          {category}
        </button>
     

    )
  }
}