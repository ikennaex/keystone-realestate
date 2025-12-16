import React from 'react'
import HeroSection from '../../Components/HeroSection'
import FeaturedListing from '../../Components/FeaturedLisitng'
import Services from '../../Components/Services'
import MortgageCalculator from '../../Components/MortgageCalculator'

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedListing />
      <Services />
      <MortgageCalculator />
    </div>
  )
}

export default Homepage
