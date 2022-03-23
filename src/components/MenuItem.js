import React from 'react'
import './MenuItem.css'

const MenuItem = ({ name, price, description, image }) => {
  const url = 'assets/' + image
  return (
    <div className='item'>
      <img src={url} alt={image} height='150' />
      <h2>{name} - ${price}</h2>
      <p>{description}</p>
    </div>
  )
}

export default MenuItem
