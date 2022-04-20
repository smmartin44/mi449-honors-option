import React from 'react'
import './About.css'
/* We simply can use an array and loop and print each user */
const About = () => {
  return (
    <div>
      <h1>Our Journey</h1>
      <img className='icon' src='assets/coffee-shop.png' alt='Coffee shop icon' width='90px' />
      <h2>We opened our doors in 2013</h2>
      <img className='icon' src='assets/roasted-beans.png' alt='Bean roasting icon' width='90px' />
      <h2>Started roasting our own beans in 2015</h2>
      <img className='icon' src='assets/franchise.png' alt='Franchising icon' width='90px' />
      <h2>Franchised in 2020</h2>
    </div>
  )
}

export default About
