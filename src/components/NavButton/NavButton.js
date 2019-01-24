import React, { Component } from 'react';
import './NavButton.css'

export default class NavButton extends Component {
  constructor() {
    super()
  }


  render() {

    return (
      <button onClick={() => this.props.handleNavBtnClick(this.props.category)}>
        {this.props.category}
   
      </button>
    )
  }
}