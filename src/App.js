// import logo from './logo.svg';
import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import Shop from './pages/Shop'
import Header from './Header'
import Route from './components/Route'
import Footer from './components/Footer'

function App () {
  return (
    <div className='App'>
      <Header />
      <Route path='/'>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
      <Route path='/menu'>
        <Menu />
      </Route>
      <Route path='/shop'>
        <Shop />
      </Route>
      <Footer />
    </div>
  )
}

export default App
