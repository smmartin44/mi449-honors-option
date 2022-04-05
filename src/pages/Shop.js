import React, { useEffect, useState } from 'react'
import ShopItem from '../components/ShopItem'
import '../components/Shop.css'
/* We simply can use an array and loop and print each user */
const Shop = () => {
  const [cart, setCart] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    total()
  }, [cart])

  const total = () => {
    let totalVal = 0
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price
    }
    setCartTotal(totalVal)
  }

  const shopItems = [
    {
      id: 1,
      name: 'Coffee Mug',
      imageURL: 'coffee-mug.jpg',
      price: 10.50,
      description: 'Glass wall mug perfect for hot coffee creations'
    },
    {
      id: 2,
      name: 'Coffee Beans',
      imageURL: 'coffee-beans.jpg',
      price: 20,
      description: 'From Belize, comes in fine, medium, and coarse grind'
    },
    {
      id: 3,
      name: 'Bean T-Shirt',
      imageURL: 'coffee-tshirt.jpg',
      price: 4,
      description: 'S, M, L, XL'
    }
  ]

  const addToCart = (el) => {
    setCart([...cart, el])
  }

  const shoppingCart = cart.map((el) => (
    <p key={el.id} className='cart-item'>{el.name}</p>
  ))

  const itemsAvailable = shopItems.map((el) => (
    <div key={el.id}>
      <ShopItem
        name={el.name}
        price={el.price}
        description={el.description}
        image={el.imageURL}
      />
      <button onClick={() => addToCart(el)}>Add to Cart</button>
    </div>
  ))

  return (
    <div style={{ width: '75%', margin: '0 auto', display: 'flex', justifyContent: 'space-around' }}>
      <div>
        <h1>Shop</h1>
        <p>Love our coffee? Buy some matching merchandise! You can add any of these items to your shopping cart.</p>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {itemsAvailable}
        </div>
      </div>
      <div>
        <div className='shopping-cart'>
          <h2>Shopping Cart</h2>
          <p> {shoppingCart} </p>
          <p> {cartTotal}</p>
        </div>
      </div>
    </div>
  )
}

export default Shop
