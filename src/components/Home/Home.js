import React, { Component } from 'react';
import './Home.css'

export default class Home extends Component {
  constructor() {
    super()
  }


  render() {
    return (
      <div className="scroll-container">
        <div className="scroll">
          {/* <p className="scroll-color">{this.props.films}</p> */}
        </div>
      </div>
    )
  }
}