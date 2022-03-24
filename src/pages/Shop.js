import React, { useState } from 'react'
import ShopItem from '../components/ShopItem'
import '../components/Shop.css'
/* We simply can use an array and loop and print each user */
const Shop = () => {
  const [childData, setChildData] = useState([{}])

  const shopItems = [
    {
      name: 'Coffee Mug',
      imageURL: 'coffee-mug.jpg',
      price: 10.50,
      description: 'Glass wall mug perfect for hot coffee creations'
    },
    {
      name: 'Coffee Beans',
      imageURL: 'coffee-beans.jpg',
      price: 20,
      description: 'From Belize, comes in fine, medium, and coarse grind'
    },
    {
      name: 'Bean T-Shirt',
      imageURL: 'coffee-tshirt.jpg',
      price: 4,
      description: 'S, M, L, XL'
    }
  ]

  const objects = []
  const cart = []

  const sendToShoppingCart = (dataFromChild) => {
    setChildData(dataFromChild)
  }

  shopItems.forEach((item) => {
    objects.push(<ShopItem
      sendToShoppingCart={sendToShoppingCart}
      name={item.name}
      price={item.price}
      description={item.description}
      image={item.imageURL}
                 />)
  })

  childData.forEach((item) => {
    cart.push(<p className='cart-item'>{item.item} x {item.quantity}</p>)
  })

  return (
    <div style={{ width: '75%', margin: '0 auto', display: 'flex', justifyContent: 'space-around' }}>
      <div>
        <h1>Shop</h1>
        <p>Love our coffee? Buy some matching merchandise! You can add any of these items to your shopping cart.</p>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {objects}
        </div>
      </div>
      <div>
        <div className='shopping-cart'>
          <h2>Shopping Cart</h2>
          <p> {cart} </p>
        </div>
      </div>
    </div>
  )
}

export default Shop
