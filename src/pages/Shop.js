import React, { useEffect, useState } from 'react'
import ShopItem from '../components/ShopItem'
import '../components/Shop.css'
/* We simply can use an array and loop and print each user */
const Shop = () => {
  const [cart, setCart] = useState([
    { itemName: 'Coffee Mug', quantity: 0, price: 10.50 },
    { itemName: 'Coffee Beans', quantity: 0, price: 20 },
    { itemName: 'Bean T-Shirt', quantity: 0, price: 4 }
  ])
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    total()
  }, [cart])

  const total = () => {
    let totalVal = 0
    for (let i = 0; i < cart.length; i++) {
      totalVal += (cart[i].quantity * cart[i].price)
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

  const addToCart = (index) => {
    console.log(index)
    const newCart = [...cart]
    newCart[index].quantity++
    setCart(newCart)
  }

  const removeFromCart = (index) => {
    console.log(index)
    const newCart = [...cart]
    newCart[index].quantity--
    setCart(newCart)
  }

  const shoppingCart = cart.map((el, index) => (
    <div key={el.id}>
      <p key={el.id} className='cart-item'>{el.itemName} : {el.quantity}</p>
      <button className='add-button' onClick={() => removeFromCart(index)}>Remove</button>
      <button className='remove-button' onClick={() => addToCart(index)}>Add</button>
    </div>
  ))

  const itemsAvailable = shopItems.map((el) => (
    <div key={el.id}>
      <ShopItem
        name={el.name}
        price={el.price}
        description={el.description}
        image={el.imageURL}
      />
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
          <p>Total: ${cartTotal}</p>
        </div>
      </div>
    </div>
  )
}

export default Shop
