import React, { Component } from 'react';
import './CardContainer.css'
import Card from '../Card/Card'

export default class CardContainer extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      cards: null
    }
  }
  async componentDidMount() {
    // debugger
    try {
      const response = await fetch(`https://swapi.co/api/${this.props.page}/`)
      const cards = await response.json()
      this.setState({ cards: cards.results, isLoading:false })
      // this.setState({ films: films.results, isLoading: false })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { isLoading, cards } = this.state
    {
      if (isLoading) {
        return (
          <div></div>
        )
      } else {

        return (

          <div>
            {
              cards.map(card => {
                return <Card card={card} />
              })
            }

          </div>
        )
      }
    }
  }
}
