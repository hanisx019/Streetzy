import React from 'react'
import Hero from '../components/Main/Home/Hero'
import Collections from '../components/Main/Home/Collections'
import Arrivals from '../components/Main/Home/Arrivals'
import WomensSection from '../components/Main/Home/WomensSection'
import Apparel from '../components/Main/Home/Apparel'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Collections/>
      <Arrivals/>
      <WomensSection/>
      <Apparel/>
    </div>
  )
}

export default HomePage
