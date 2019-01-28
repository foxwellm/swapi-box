import React, { Component } from 'react'
import './NavButton.css'
import PropTypes from 'prop-types'

export default class NavButton extends Component {

  handleClick = (e, category) => {
    e.preventDefault()
    this.props.retrieveData(category)
  }

  render() {
    const { category } = this.props
    const cssClasses = ["NavButton", `${category}`]
    return (
      <button className={cssClasses.join(' ')} onClick={(e) => this.handleClick(e, category)}>
        {category}
      </button>
    )
  }
}

NavButton.propTypes = {
  retrieveData: PropTypes.func,
  category: PropTypes.string
}