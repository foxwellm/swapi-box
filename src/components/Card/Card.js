import React, { Component } from 'react';
import './Card.css'

export default class Card extends Component {
  constructor() {
    super()
  }


  render() {
    // debugger
    return (
      <div>
        {this.props.card}
      </div>
    )
  }
}