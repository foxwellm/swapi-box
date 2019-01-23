import React, { Component } from 'react';
import './NavButton.css'

export default class NavButton extends Component {
  constructor() {
    super()
  }


  render() {

    return (
      <button>
        {this.props.category}
   
      </button>
    )
  }
}