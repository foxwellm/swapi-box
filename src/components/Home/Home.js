import React from 'react';
import './Home.css'

export const Home = ({ films }) => {
  return (
    <div className="scroll-container">
      <div className="scroll">
        <p className="scroll-color">{films}</p>
      </div>
    </div>
  )
}