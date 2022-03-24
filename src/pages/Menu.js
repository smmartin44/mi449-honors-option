import React from 'react'
import MenuItem from '../components/MenuItem'
/* We simply can use an array and loop and print each user */
const Menu = () => {
  const menuItems = [
    {
      name: 'Vanilla Latte',
      imageURL: 'vanilla-latte.jpg',
      price: 5,
      description: 'Steamed milk - espresso - light foam - vanilla'
    },
    {
      name: 'Oat Milk Latte',
      imageURL: 'oat-milk-latte.jpg',
      price: 5.50,
      description: 'Steamed oat milk - espresso - light foam'
    },
    {
      name: 'Cold Brew',
      imageURL: 'cold-brew.jpg',
      price: 4,
      description: 'Cold brew - milk'
    }
  ]

  const objects = []

  menuItems.forEach((item) => {
    objects.push(<MenuItem
      name={item.name}
      price={item.price}
      description={item.description}
      image={item.imageURL}
                 />)
  })

  return (
    <div style={{ width: '75%', margin: '0 auto' }}>
      <h1>Coffee Menu</h1>
      <p>Below you will find our most popular drinks on the menu.</p>
      <div style={{ display: 'flex', 'justify-content': 'space-around', flexWrap: 'wrap' }}>
        {objects}
      </div>
    </div>
  )
}

export default Menu
