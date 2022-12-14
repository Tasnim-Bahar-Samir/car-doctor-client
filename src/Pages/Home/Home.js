import React from 'react'
import About from './About/About'
import Banner from './Banner'
import Products from './Products/Products'
import Services from './Services/Services'

const Home = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <Services/>
      <Products/>
    </div>
  )
}

export default Home