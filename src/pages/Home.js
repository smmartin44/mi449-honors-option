import React from 'react'
import './Home.css'

/* We simply can use an array and loop and print each user */
const Home = () => {
  return (
    <div className='centered'>
      <h1>Coffee Lovers Unite!</h1>
      <p className='intro-paragraph'>We take our coffee very seriously - only using fresh beans daily sets us apart from the big coffee chains. Our syrups are made in house and our milk is sourced from local vendors. Come by and visit to see what we are all about!</p>
      <div>
        <div className='images'>
          <div className='image-p-pair'>
            <img className='round-img' src='assets/beans.jpg' />
            <p>High quality coffee beans sourced internationally every month</p>
          </div>
          <div className='image-p-pair'>
            <img className='round-img' src='assets/coffeecups.jpg' />
            <p>Barista-crafted coffee drinks - all fan favorites!</p>
          </div>
          <div className='image-p-pair'>
            <img className='round-img' src='assets/espresso.jpg' />
            <p>Ability to customize all drinks to YOUR preferences!</p>
          </div>
        </div>
      </div>
      <p className='closing-paragraph'>Come visit us downtown in store, or check out our merchandise in our online store!</p>
    </div>
  )
}

export default Home
