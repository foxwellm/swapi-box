import React, { Component } from 'react';
import './CardContainer.css'
import Card from '../Card/Card'

export default class CardContainer extends Component {
  constructor() {
    super()
    // this.state = {
    //   isLoading: true,
    //   cards: null
    // }
  }

  render() {
    // const { isLoading, cards } = this.state
    // debugger
    {
      // if (isLoading) {
      //   return (
      //     <div></div>
      //   )
      // } else {

        return (

          <div>
            {
              this.props.cards.map(card => {
                return <Card card={card} />
              })
            }

          </div>
        )
      
    }
  }
}
