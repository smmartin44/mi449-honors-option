import React from 'react'
import './ShopItem.css'

const ShopItem = ({ name, price, description, image, sendToShoppingCart }) => {
  const url = 'assets/' + image
  const dataFromChild = [{
    item: 'Coffee Mug',
    price: 10.50,
    quantity: 1
  }, {
    item: 'Coffee Beans',
    price: 20,
    quantity: 1
  }]

  const addToCart = (name, price) => {
    let found = false
    dataFromChild.forEach((entry) => {
      if (entry.item === name) {
        entry.quantity = entry.quantity + 1
        found = true
      }
    })
    if (!found) {
      dataFromChild.push({
        item: name,
        price: price,
        quantity: 1
      })
    }
    console.log(dataFromChild)
  }

  return (
    <div className='item' onLoad={() => sendToShoppingCart(dataFromChild)}>
      <img src={url} alt={image} height='150' />
      <h2>{name} - ${price}</h2>
      <p>{description}</p>
      <button onClick={() => { addToCart(name, price); sendToShoppingCart(dataFromChild) }}>Add to Cart</button>
    </div>
  )
}

export default ShopItem
